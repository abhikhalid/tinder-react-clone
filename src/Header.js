import React from 'react';

import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


import {
    Link, useHistory
} from "react-router-dom";


const Header = ({ backButton }) => {

    const history = useHistory();

    return (
        //BEM
        <div className="header">

            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (<IconButton >
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            )}


            <Link to="/">
                <img
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"
                    alt="tinder logo"
                />
            </Link>


            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
    );
};

export default Header;