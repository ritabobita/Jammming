import styles from '../styles/Playlist.module.css'
import Tracklist from '../components/Tracklist';

function Playlist({playlist}) {


    return (
        <div className={styles.playlistContainer}>
            <input type='text' placeholder='Name Playlist...'></input>
            <Tracklist playlist={playlist}/>
            <button  type='submit'>Save To Spotify</button>
        </div>
    )
}

export default Playlist