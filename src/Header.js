import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <IconButton>
                <EmojiObjectsIcon className="header_icon"  fontSize="middle" />
            </IconButton>
            </Link>
            <Link to="trending">
            <IconButton>
                <WhatshotIcon className="header_icon"  fontSize="middle" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header