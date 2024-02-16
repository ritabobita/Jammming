import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist'
import SearchResults from '../components/SearchResults';
//import Tracklist from '../components/Tracklist';


export default function Home() {

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


  return (
      <div className= {styles.container}>
          <Head>
              <title>Jammming</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <SearchBar />
          <SearchResults />
          <Playlist />
      </div>
  );
}
