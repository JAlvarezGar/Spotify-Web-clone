import { Logincontainer } from "../Login/styles";

const endpoint = "https://accounts.spotify.com/authorize";
const clientId = "ea396ec4afb9421ca4a7df1c9de4bad2";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const loginUrl = `${endpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;

// Hook para crear la pantalla de login
const Login = () => {

  // funcion para recuperar el token de la url de spotify tras pulsar el boton de login
  
  return (
    // el logo y el boton con Styled-component
    <Logincontainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="foto_perfil"/>
      <a href={loginUrl}> Login whit spotify </a>
    </Logincontainer>

  );

};

// función para  tomar el token que envía spotify al loguearnos.
export const getTokenFromUrl = () => {
  // con el substring(1) quito el #
  // con split(&) y split(=) separo la cadena de texto hasta donde se encuentren estos caracteres
  const a = window.location.hash.substring(1).split('&');
  const b = a[0];
  const c = b.split("=");
  const token = c[1];
  return token;

}

export default Login;
