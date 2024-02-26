import styles from '../styles/SearchResults.module.css'

function SearchResults({searchResults}) {
    

    return (
        <div className={styles.resultsContainer}>
                <h1>Search Results</h1>
                 <div className={styles.results}>{searchResults}</div>
        </div>
    )
}

export default SearchResults