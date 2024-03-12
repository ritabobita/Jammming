import styles from '../styles/Tracklist.module.css'
import Track from '../components/Track.js'

function Tracklist({playlist, onHandleRemoveButton}) {

    return (
        <div className={styles.tracklistContainer}>
           <Track playlist={playlist} onHandleRemoveButton={onHandleRemoveButton}/>
        </div>
    )
}

export default Tracklist