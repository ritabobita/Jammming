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
    const results = findTrack(searchInput)
    setResults(results)
  }

  const tracks = [{
    name: 'Paradise City',
    artist: "Guns N' Roses",
    album: 'Appetite For Destruction',
    id: 0
  },
  {
    name: 'Hey Lou',
    artist: 'Lewis OfMan, Camille Jansen',
    album: 'Cristal Medium Blue',
    id: 1
  },
  {
    name: 'War',
    artist: 'IDLES',
    album: 'Ultra Mono',
    id: 2
  }
  ]

  function findTrack(input) {
    const filteredTracks = tracks.filter(track =>
    (track.name.toLowerCase().includes(input.toLowerCase()) ||
      track.artist.toLowerCase().includes(input.toLowerCase()) ||
      track.album.toLowerCase().includes(input.toLowerCase())
    ));
    const trackList = filteredTracks.map(track => <li key={track.id}>Song Name: {track.name}<br/>Artist: {track.artist} Album: {track.album} 
                                                  <button type="button" onClick={() => handleAddButton(track.id)}>+</button></li>)
    const trackListUl = <ul>{trackList}</ul>
    if (input.length > 0) {
      return trackListUl
    } //can use this to provide else for non-searches and possibly searches that don't match the track
  }

  //Playlist, TrackList & Track (Playlist Creation)
  const [playlist, setPlaylist] = useState([])

  const handleAddButton = (trackId) => {
    const addTrack = tracks.find(track => track.id === trackId)
    setPlaylist(prevTracks => [...prevTracks, addTrack])
  }
    const trackPick = playlist.map(playlistItem => <li key = {playlistItem.id}>{playlistItem.name} - {playlistItem.artist}</li>)
    const playlistUl = <ul>{trackPick}</ul>


  return (
    <div className={styles.container}>
      <Head>
        <title>Jammming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar onSearchInputChange={handleSearchInput} onButtonClick={handleClick} />
      <SearchResults searchResults={results} />
      <Playlist playlist={playlistUl} />
    </div>
  );
}
