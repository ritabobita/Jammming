import styles from '../styles/SearchBar.module.css'
import { useState } from 'react';
import SearchResults from '../components/SearchResults.js';

/*NEXT STEP: continue creating static components -- might need to complete css asthetic a little more, but being hardcoding mock 
data in either json or array format (focus on how your components will interact with the data rather than on how they will 
retrieve data from APIs)
 */
function SearchBar({ onSearchInputChange, onButtonClick }) {

    const handleChange = (e) => {
        const value = e.target.value
        if (onButtonClick) { 
            onSearchInputChange(value) 
        }
    }



    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={styles.searchInput} onChange={handleChange}></input>
            <button type='submit' className={styles.searchButton} onClick={onButtonClick}>Search</button>
        </div>
    )
}

export default SearchBar