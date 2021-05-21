import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';


const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <IconButton>
                <HomeIcon className="header_icon"  fontSize="large" />
            </IconButton>
            </Link>
            <Link to="trending">
            <IconButton>
                <WhatshotIcon className="header_icon"  fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header