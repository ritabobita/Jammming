import styles from '../styles/SearchBar.module.css'

/*NEXT STEP: css update search results portion -- then begin to create/modify playlist creation portion.. going to need input
for playlist naming oooh and also add buttons needed for searchresults portion
 */
function SearchBar({ onSearchInputChange, onButtonClick }) {

    const handleChange = (e) => {
        const value = e.target.value
        onSearchInputChange(value) 
}

    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={styles.searchInput} onChange={handleChange}></input>
            <button type='submit' className={styles.searchButton} onClick={onButtonClick}>Search</button>
        </div>
    )
}

export default SearchBar