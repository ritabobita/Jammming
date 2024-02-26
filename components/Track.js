import styles from '../styles/Track.module.css'
import { useState } from 'react';
import Playlist from './Playlist';

function Track({playlist}) {
    return (
        <div className={styles.trackContainer}>
            {playlist}
        </div>
    )
}

export default Track