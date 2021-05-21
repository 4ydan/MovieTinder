import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header_icon"  fontSize="large" />
            </IconButton>
            <h2></h2>
            <IconButton>
                <QuestionAnswerIcon className="header_icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header