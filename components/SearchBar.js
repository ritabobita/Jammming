import styles from '../styles/SearchBar.module.css'
import { useState } from 'react';

/*NEXT STEP: create a grid that changes as input is placed inside the search bar, the search bar should expand 
             to the top of the page -- new grid should likely be attached to a new class to change on input
             - start w/ new grid creation in home module -- may not need expanded feature for search bar maybe it could be done
             by default with a larger search bar space at the top
             **grid has been created, 
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