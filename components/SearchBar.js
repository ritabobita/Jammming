import styles from '../styles/SearchBar.module.css'

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