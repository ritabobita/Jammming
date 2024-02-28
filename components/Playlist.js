import styles from '../styles/Playlist.module.css'
import Tracklist from '../components/Tracklist';

function Playlist({playlist, playlistName}) {

    function handleChange(e) {
        const value = e.target.value;
        playlistName(value)
    }


    return (
        <div className={styles.playlistContainer}>
            <input type='text' placeholder='Name Playlist...' onChange={handleChange}></input>
            <Tracklist playlist={playlist}/>
            <button  type='submit'>Save To Spotify</button>
        </div>
    )
}

export default Playlist