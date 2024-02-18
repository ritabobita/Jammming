import styles from '../styles/SearchResults.module.css'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

function SearchResults({searchResults}) {

    //const searchResults = findTrack(searchInput)

    return (
        <div className={styles.resultsContainer}>
                <h1>Results</h1>
                <div>{searchResults}</div>
        </div>
    )
}

export default SearchResults