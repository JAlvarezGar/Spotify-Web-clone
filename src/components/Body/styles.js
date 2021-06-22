import styled from "styled-components";

// styled-components 
const BodyContainer = styled.div`
flex:0.8;
height:100vh;
overflow-y: overlay;
background-image: linear-gradient(to bottom, #891010, #7e1a19, #722121, #652726, #572b2b);
/** quito la barra lateral de scroll  */
&::-webkit-scrollbar{
    display: none;
  }
`

const HeaderContainer = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
 font-weight: bold;
padding: 10px;
`
const HeaderLeft = styled.div`
display: flex;
min-width: 100px;
justify-content:space-around;
color: #fff;
`
const HeaderRight = styled.div`
display: flex;
min-width: 80px;
justify-content:space-between;
align-items:center;
margin-right:10px;
color:white;
`

const InfoPlaylist = styled.div`
display: flex;
align-items:flex-end;
padding:30px;
color:white;

& img{
    width:25vh;
    box-shadow: 0px 0px 102px 30px rgba(255,255,255,0.58);}
`
const TextInfo = styled.div`
margin-left:30px;
`
const Titulo = styled.div`
font-size:80px;
font-weight:900;
`
const ListaInfo = styled.div`
display: flex;
& p{
    margin-left:10px;
}
`
const Iconos = styled.div`
display: flex;
align-items: center;
max-width: 150px;
justify-content:space-between;
color:white;
margin:30px;
cursor:pointer;

`
const BotonPlayer = styled.button`
    width: 48px;
    height:48px;
    border-radius:50%;
    border:none;
    background-color: #00ff00;
    color:#fff;
    cursor:pointer;

    &:hover{
        transform: scale(1.1) !important;
    }
    
`

const ContenedorTracks = styled.div`
display: flex;
color: #fff;
align-items:center;
margin-left:30px;
margin-bottom: 20px;
transition: all 300ms ease-in-out ;
&:hover{
    -webkit-transform:scale(0.9);
transition: all 300ms ease-in-out ;
    cursor:pointer;
}
`

const LeyendaTrack = styled.div`
margin-left:20px;
& p{
    font-size:12px;
}  
`

const TracksContainer = styled.div`
   background:rgba(77, 52, 46 ,0.5);
   padding-top:1px;
`

export {
    BodyContainer, HeaderLeft, HeaderRight, HeaderContainer,
    InfoPlaylist, TextInfo, Titulo, ListaInfo, ContenedorTracks,
    Iconos, BotonPlayer, LeyendaTrack, TracksContainer
};