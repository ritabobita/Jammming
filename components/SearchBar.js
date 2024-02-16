import styles from '../styles/SearchBar.module.css'
import { useState } from 'react';

/*NEXT STEP: continue creating status components
 */
function SearchBar({ onSearchInputChange }) {

  const [button, setButton] = useState('');

    function handleChange(e) {
        const inputValue = e.target.value;
        onSearchInputChange(inputValue)
        if (inputValue) {
          setButton(inputValue)
        }
    }

    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={styles.searchInput} onChange={handleChange}></input>
            <button type='submit' className={`${styles.noButton} ${button ? styles.searchButton : ''}`} >Search</button>
        </div>
    )
}

export default SearchBar