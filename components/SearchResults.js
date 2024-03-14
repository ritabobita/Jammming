import styles from '../styles/SearchResults.module.css'

function SearchResults({ searchResults, handleAddButton }) {

    // const display = searchResults?.map(track => (
    //   <ul key={track.uri}>
    //     <li>
    //       <p>Song Name: {track.name}</p>
    //       <p>Artist: {track.artists[0].name}</p>
    //       <p>Album: {track.album.name}</p>
    //       <button type="button" onClick={() => handleAddButton(track.uri)}>+</button>
    //     </li>
    //   </ul>
    // ));

    const display = searchResults?.map(track => (
        <li key={track.uri}>
            <p>Song Name: {track.name}</p>
            <p>Artist: {track.artists[0].name}</p>
            <p>Album: {track.album.name}</p>
            <button type="button" onClick={() => handleAddButton(track.uri)}>+</button>
        </li>
    ));

    return (
        <div className={styles.resultsContainer}>
            <h1>Search Results</h1>
            <div className={styles.results}>
                <ul>
                    {display}
                </ul>
            </div>
        </div>
    )
}


export default SearchResults