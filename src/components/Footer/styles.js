import styled from "styled-components";

// styled-components 
const FooterContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
height:70px;
width:100%;
background-color:#181818;
color:#fff;
bottom:0;
`

const FooterLeft= styled.div`
flex:0.3;
display:flex;
padding: 10px;
align-items: center;
& img{
    width:50px;
    padding-right:15px;

}
`
const FooterCenter= styled.div`
flex:0.4;
display:flex;
align-items: center;
max-width: 300px;
justify-content: space-around;
padding: 10px;
& .iconGreen{
    color: #00ff00;
}
&:hover .iconGreen {
    transition: transform 300ms ease-in-out !important;

    transform: scale(1.2) !important;
}
&:hover .iconsWhite {
    transition: transform 300ms ease-in-out !important;

    transform: scale(1.2) !important;
}
`

const FooterRight= styled.div`
flex:0.3;
display:flex;
align-items: center;
padding-right: 10px;
max-width:300px;
& .MuiSlider-root{
    color: #00ff00;
}

`

export {FooterContainer,FooterLeft,FooterRight,FooterCenter};
