import styles from '../styles/Track.module.css'

function Track({ playlist, onHandleRemoveButton }) {

    return (
        <div className={styles.trackContainer}> 
            <ul>{playlist?.map(track => ( 
                <li key={track.uri}>
                    <p>Song Name: {track.name}</p>
                    <p>Artist: {track.artists[0].name}</p>
                    <p>Album: {track.album.name}</p>
                    <button type="button" onClick={() => onHandleRemoveButton(track.uri)}>-</button>
                </li>
            ))
            } 
            </ul>
        </div>
    )
}

export default Track