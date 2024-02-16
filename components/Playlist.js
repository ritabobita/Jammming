import styles from '../styles/Playlist.module.css'
import Tracklist from '../components/Tracklist';

function Playlist() {



    return (
        <div className={styles.playlistContainer}>
            <Tracklist />
            <button>Save To Spotify</button>
        </div>
    )
}

export default Playlist