import "./App.css";
import "./components/Login/Login";
import Login, { getTokenFromUrl } from "./components/Login/Login";
import SpotifyContainer from "./components/SpotifyContainer/SpotifyContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SET_USER } from "./features/userSlice";
import { selectToken, SET_TOKEN } from "./features/TokenSlice";
import SpotifyWebApi from "spotify-web-api-js";
import { SET_PLAYLIST } from "./features/PlayListSlice";

const spotify = new SpotifyWebApi();
function App() {

  // estos son los datos que he guardado con Redux
  var _token = useSelector(selectToken);
  var user = useSelector(selectUser)

  // utilizado para enviar(dispatch) datos a Reduxjs
  const dispatch = useDispatch();


  useEffect(() => {
    // obtengo el token de Login.js
    var token = getTokenFromUrl();

    // si existe el token obtengo el ususario
    if (token) {
      _token = token;
      // guardo el token en Redux
      dispatch(SET_TOKEN(_token));
      // utilizo el token para acceder a Spotify Web
      spotify.setAccessToken(_token);
      // cuando tenga el token me dará el usuario y lo guardo en Reduxjs
      spotify.getMe().then(user => dispatch(SET_USER(user)));
      
      spotify.getPlaylist('37i9dQZF1DXaQ34lqGBfrU').then(playlist => dispatch(SET_PLAYLIST(playlist)));
      console.log('token=> ', _token);
      
    }


  }, [dispatch]);
  return (

    // si existe el ususario accedo a la aplicacion de SpotifyContainer
    // si no, al 
    <div>
      {
        user ? <SpotifyContainer /> : <Login />
      }
    </div>
  );
}

export default App;
