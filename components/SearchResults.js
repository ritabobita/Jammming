import styles from '../styles/SearchResults.module.css'

function SearchResults({ searchResults, handleAddButton }) {

    const display = searchResults?.map(track => (
      <ul key={track.uri}>
        <li>
          <p>Song Name: {track.name}</p>
          <p>Artist: {track.artists[0].name}</p>
          <p>Album: {track.album.name}</p>
          <button type="button" onClick={() => handleAddButton(track.uri)}>+</button>
        </li>
      </ul>
    ));
  
    return (
      <div className={styles.resultsContainer}>
        <h1>Search Results</h1>
        <div className={styles.results}>{display}</div>
      </div>
    )
  }


export default SearchResults