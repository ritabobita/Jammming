import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist'
import SearchResults from '../components/SearchResults';
//import Tracklist from '../components/Tracklist';


export default function Home() {
  const [searchInput, setSearchInput] = useState("")
  //const [button, setButton] = useState(false) //may need results/setResults setState to empty array (useState([])) to 
  //replace this button state
  const [results, setResults] = useState([])
  //function handleClick() {results = findTrack(searchInput) setResults(results)}
  //LEFT OFF HERE

  function handleSearchInput(input) {
    setSearchInput(input);
  }

  function handleClick() {
    //setButton(true);
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

    //if (results) {
      const trackList = filteredTracks.map(track => <li key={track.id}>{track.name} {track.artist} {track.album}</li>)
      return <ul>{trackList}</ul>
    //}
    //return null
  }

  //const searchResults = findTrack(searchInput)


  return (
    <div className={styles.container}>
      <Head>
        <title>Jammming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar onSearchInputChange={handleSearchInput} onButtonClick={handleClick} />
      {results && <SearchResults searchResults={results} />}
      <Playlist />
    </div>
  );
}
