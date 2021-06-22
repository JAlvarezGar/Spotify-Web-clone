import styled from "styled-components";

// styled-components 
const Logincontainer = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:#000;
& img {
  width:100%
}
& a{
  border-radius:60px;
  padding:20px;
  background-color:#1db954;
  color:#fff;
  text-transform:uppercase;
  text-decoration:none;
}
`
export {Logincontainer};