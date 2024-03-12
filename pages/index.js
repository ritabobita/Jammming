import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist'
import SearchResults from '../components/SearchResults';

export default function Home() {

  //SearchBar & SearchResults
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState([])

  function handleSearchInput(input) {
    setSearchInput(input);
  }

  function handleClick() {
    const apiResponse = searchTracks(searchInput)
    setResults(apiResponse)
  }

  //fetch
  function searchTracks(query) {
    const accessToken = getAccessToken()
    if (!accessToken) {
      throw new Error('Access token not found')
    }
    fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          setResults(data.tracks.items);
        })
      }
    })
  }

  function getAccessToken() {
    const currentUri = window.location.href
    const uriParts = currentUri.split('#');
    if (uriParts.length > 1) {
      const hashPart = uriParts[1];
      const keyValuePairs = hashPart.split('&');
      for (const pair of keyValuePairs) {
        const [key, value] = pair.split('=');
        if (key === 'access_token') {
          return decodeURIComponent(value);
        }
      }
    }
    return null;
  }

  function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function requestAuthorization() {

    var client_id = 'a4b4626f8e5f4d00a3fb8c229d812923';
    var redirect_uri = 'http://localhost:3000/';

    var stateKey = 'spotify_auth_state';
    var state = generateRandomString(16);

    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url
  }

  //Playlist, TrackList & Track (Playlist Creation)
  const [playlist, setPlaylist] = useState([])
  const [playlistName, setPlaylistName] = useState('')

  const handleAddButton = (trackURI) => {
    const addTrack = results.find(result => result.uri === trackURI);
    setPlaylist(prevTracks => {
      if (!prevTracks.some(prevTrack => prevTrack.uri === addTrack.uri)) {
        return [...prevTracks, addTrack]
      } else {
        return [...prevTracks]
      }
    })
  };

  const handleRemoveButton = (trackURI) => {
    setPlaylist(prevTracks => prevTracks.filter(track => track.uri !== trackURI))
  }
  const handlePlaylistName = (newName) => {
    setPlaylistName(newName)
  }

  //Save Playlist to Spotify
  async function getUsername() {
    const accessToken = getAccessToken()
    if (!accessToken) {
      throw new Error('Access token not found')
    }
    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    const json = await response.json()
    return json.id;
  }

  async function postPlaylistData() {
    const getUserprofile = await getUsername();
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error('Access token not found')
    }
    const response = await fetch(`https://api.spotify.com/v1/users/${getUserprofile}/playlists`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ` + accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": playlistName,
        "description": "New playlist description",
        "public": false
      })
    })
    const json = await response.json()
    return json.id
  }

  async function savePlaylist() {
    const playlist_id = await postPlaylistData();
    const user_id = await getUsername();
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error('Access token not found')
    }
    const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ` + accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  
       "uris": uriArray()
      })
    })
    const json = await response.json()
    return json
  }

  //Spotify functions
  const uriArray = () => {
    if (!playlist) {
      return []; 
    } else {
    const uriPlaylist = playlist.map(track => track.uri)
    let array = [...uriPlaylist]
    return array
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Jammming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={requestAuthorization}>Log In</button>
      <SearchBar onSearchInputChange={handleSearchInput} onButtonClick={handleClick} />
      <SearchResults searchResults={results} handleAddButton={handleAddButton} />
      <Playlist playlist={playlist} uriArray={uriArray} newPlaylist={playlistName} savePlaylist={savePlaylist} onNewPlaylistName={handlePlaylistName}
        onHandleRemoveButton={handleRemoveButton} />
    </div>
  );
}
