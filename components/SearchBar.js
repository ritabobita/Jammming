import styles from '../styles/SearchBar.module.css'
import { useState } from 'react';

/*NEXT STEP: create a grid that changes as input is placed inside the search bar, the search bar should expand 
             to the top of the page -- new grid should likely be attached to a new class to change on input
 */
function SearchBar() {
    const [isExpanded, setExpanded] = useState(false);

    function handleChange() {
        setExpanded(true)
    }

    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={`${styles.searchInput} ${isExpanded ? styles.searchExpanded : ''}`} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBar