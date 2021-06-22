import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles'
import { Avatar } from '@material-ui/core'
import {selectUser} from '../../features/userSlice';
import { useSelector } from 'react-redux';


function Header() {
    const user = useSelector(selectUser);
    return (
        <HeaderContainer>
            <div>
                <HeaderLeft>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1usfroi-0 kcaoHR _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="16 4 7 12 16 20" fill="none" stroke="#181818"></polyline></svg>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1usfroi-0 kcaoHR _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="8 4 17 12 8 20" fill="none" stroke="#181818"></polyline></svg>
                </HeaderLeft>
            </div>
            <HeaderRight>
                <Avatar/>
                <h4>{user?.display_name}</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header