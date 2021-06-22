import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';

import { SpotifyContainer } from '../SpotifyContainer/styles';


function Container() {
    return (
        <div>
            <SpotifyContainer>
                <Sidebar />
                <Body />
            </SpotifyContainer>
            <Footer/>
        </div>

    )
}

export default Container
