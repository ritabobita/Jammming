import styles from '../styles/SearchBar.module.css'
import { useState } from 'react';

/*NEXT STEP: continue creating status components
 */
function SearchBar({ onSearchInputChange }) {

    function handleChange(e) {
        const inputValue = e.target.value;
        onSearchInputChange(inputValue)
    }

    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={styles.searchInput} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBar