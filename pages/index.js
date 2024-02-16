import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist'
import SearchResults from '../components/SearchResults';


export default function Home() {
  const [searchInput, setSearchInput] = useState(false);

  function handleSearchInput() {
    setSearchInput(true);
}

  console.log("Component re-rendered")

  return (
      <div className= {`${searchInput ? styles.containerChange : styles.container }`}>
          <Head>
              <title>Jammming</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <SearchBar onSearchInputChange={handleSearchInput} />
          <SearchResults/>
          <Playlist/>
      </div>
  );
}
