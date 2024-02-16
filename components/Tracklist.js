import styles from '../styles/Tracklist.module.css'
import { useState } from 'react';
import Track from '../components/Track.js'

function Tracklist() {


    return (
        //prob turn this into a list format over div or have list inside div if it is a container
        <div className={styles.tracklistContainer}>
            <Track />
        </div>
    )
}

export default Tracklist