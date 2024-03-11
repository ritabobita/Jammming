import styles from '../styles/Track.module.css'
import { useState } from 'react';
import Playlist from './Playlist';

function Track({ playlist, onHandleRemoveButton }) {

    const playlistReturn = () => {
        for (let i = 0; i <= playlist.length; i++) {
            <div>{playlist[i]}</div>
        }
    }

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