import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
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
    //const results = findTrack(searchInput)
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
          console.log(data.tracks.items)
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

  // function findTrack(input) {
  //   const filteredTracks = tracks.filter(track =>
  //   (track.name.toLowerCase().includes(input.toLowerCase()) ||
  //     track.artist.toLowerCase().includes(input.toLowerCase()) ||
  //     track.album.toLowerCase().includes(input.toLowerCase())
  //   ));
  //   const trackList = filteredTracks.map(track => <li key={track.id}>Song Name: {track.name}<br />Artist: {track.artist} Album: {track.album}
  //     <button type="button" onClick={() => handleAddButton(track.id)}>+</button></li>)
  //   const trackListUl = <ul>{trackList}</ul>
  //   if (input.length > 0) {
  //     return trackListUl
  //   } //can use this to provide else for non-searches and possibly searches that don't match the track
  // }

  //Playlist, TrackList & Track (Playlist Creation)
  const [playlist, setPlaylist] = useState([])
  const [playlistName, setPlaylistName] = useState('')

  const handleAddButton = (trackURI) => {
    const addTrack = results.find(result => result.uri === trackURI);
    setPlaylist(prevTracks => {
      if (!prevTracks.some(prevTrack => prevTrack.uri === addTrack.uri)) {
        setPlaylist([...prevTracks, addTrack])
      } else {
        setPlaylist([...prevTracks])
      }
    })
  };

  const handleRemoveButton = (trackURI) => {
    setPlaylist(prevTracks => prevTracks.filter(track => track.uri !== trackURI))
  }

  const handlePlaylistName = (newName) => {
    setPlaylistName(newName)
  }

  //Spotify functions

  const uriArray = () => {
    const uriPlaylist = playlist.map(track => track.uri)
    let array = [...uriPlaylist]
    console.log(array)
  }
  //uriArray()

  return (
    <div className={styles.container}>
      <Head>
        <title>Jammming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={requestAuthorization}>Log In</button>
      <SearchBar onSearchInputChange={handleSearchInput} onButtonClick={handleClick} />
      <SearchResults searchResults={results} handleAddButton={handleAddButton} />
      <Playlist playlist={playlist} uriArray={uriArray} newPlaylist={playlistName} onNewPlaylistName={handlePlaylistName} 
      onHandleRemoveButton={handleRemoveButton} />
    </div>
  );
}
