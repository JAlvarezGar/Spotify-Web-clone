import React from "react";
import {
    FooterCenter,
    FooterContainer,
    FooterLeft,
    FooterRight,
} from "./styles";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesIcon from "@material-ui/icons/Devices";
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <FooterContainer>
            <FooterLeft>
                <img
                    src="http://2.bp.blogspot.com/-HsE0fq9tQGw/Vm8ll3YOdSI/AAAAAAAAAfc/UDkCVu9IMQ0/s1600/Pink-Floyd-The-Wall.jpg"
                    alt="caratula"
                />
                <div>
                    <h4>The Wall</h4>
                    <p>Pink Floyd</p>
                </div>
            </FooterLeft>

            <FooterCenter>
                <ShuffleIcon className="iconGreen" />
                <SkipPreviousIcon className="iconsWhite"/>
                <PlayCircleFilledWhiteIcon className="iconsWhite" fontSize="large"/>
                <SkipNextIcon className="iconsWhite"/>
                <RepeatIcon className="iconGreen"/>
            </FooterCenter>

            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <DevicesIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider color="green" aria-labelledby="continuous-slider" />
                    </Grid>
                    
                </Grid>
            </FooterRight>
        </FooterContainer>
    );
}

export default Footer;
