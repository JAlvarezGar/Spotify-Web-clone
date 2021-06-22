import React from 'react'
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/PlayListSlice';
import { ContenedorTracks, LeyendaTrack } from './styles'

function ListaCanciones({ track }) {
    const playlist = useSelector(selectPlaylist);
    return (
        <ContenedorTracks>
            <div>
                <img src={track?.album.images[0].url} alt="urlfoto" width="60px" />
            </div>
            <LeyendaTrack>
                <h3>
                   { track.name}
                </h3>
                <p>
                    {track?.artists[0].name}
                </p>
                <h4>
                    {track?.album.name}
                    {/* {playlist?.description} */}
                </h4>
            </LeyendaTrack>
        </ContenedorTracks>
    )
}

export default ListaCanciones
