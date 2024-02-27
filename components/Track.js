import styles from '../styles/Track.module.css'
import { useState } from 'react';
import Playlist from './Playlist';

function Track({playlist}) {
    return (
        <div className={styles.trackContainer}>
            <ul>{playlist}</ul>
        </div>
    )
}

export default Track