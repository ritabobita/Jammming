import styles from '../styles/Playlist.module.css'
import Tracklist from '../components/Tracklist';

function Playlist({playlist, onNewPlaylistName, onHandleRemoveButton, savePlaylist}) {

    function handleChange(e) {
        const value = e.target.value;
        onNewPlaylistName(value)
    }
    
    return (
        <div className={styles.playlistContainer}>
            <input type='text' placeholder='Name Playlist...' onChange={handleChange}></input>
            <Tracklist playlist={playlist} onHandleRemoveButton={onHandleRemoveButton}/>
            <button  type='button' onClick={() => savePlaylist()}>Save To Spotify</button>
        </div>
    )
}

export default Playlist