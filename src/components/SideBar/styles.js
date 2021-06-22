import styled from "styled-components";

// styled-components 
const SideBarContainer = styled.div`
flex:0.2;
height:100vh;
background-color: #000;
color: #fff;
min-width:240px;

& div{
    margin:10px ; 
    
}
& hr{
        border:1px solid #708c98;
        width:90%;
        margin: 10px auto;
    }
`

const Choices= styled.div`
display:flex;
align-items: center;
margin-left:10px;
color:grey;
height:40px;
cursor: pointer;
transition: 300ms color ease-in;
&:hover{
    color: #fff;
}
`

const PlayList= styled.div`
    margin: 5px 10px;
`

export {SideBarContainer, Choices, PlayList};