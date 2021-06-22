import React from 'react'
import Header from './Header'
import { BodyContainer, BotonPlayer, Iconos, ListaInfo, TextInfo, Titulo, TracksContainer } from './styles'
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/PlayListSlice';
import { InfoPlaylist } from './styles';
import { selectUser } from '../../features/userSlice';
// iconos 
//import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ListaCanciones from './ListaCanciones';




function Body() {
    const playlist = useSelector(selectPlaylist);
    const user = useSelector(selectUser);
    console.log("playlist=> ", playlist);
    return (
        <BodyContainer>
            <Header />
            <InfoPlaylist>
                <img src={(playlist?.images[0])?.url} alt="foto_playlist"></img>
                <TextInfo>
                    <div>PLAYLIST</div>
                    <Titulo>{playlist?.name}</Titulo>
                    <ListaInfo>
                        <h4>{user?.display_name}</h4>
                        <p> ·{playlist?.tracks.items.length} canciones</p>
                    </ListaInfo>
                </TextInfo>
            </InfoPlaylist>
            <TracksContainer>
            <Iconos>
                <BotonPlayer type="button" >

                    <PlayArrowIcon fontSize="large" />
                </BotonPlayer>
                <FavoriteBorderIcon fontSize="large" />
                <MoreHorizIcon />
            </Iconos>
            {

                playlist?.tracks?.items.map((item) => (
                    <ListaCanciones track={item.track} />
                ))
            }
            </TracksContainer>
            
                     
        </BodyContainer>
    )
}

export default Body
