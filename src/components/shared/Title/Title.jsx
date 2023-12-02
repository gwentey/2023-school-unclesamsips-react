import React,{useContext} from 'react';
import './Title.css';

const Title = ({ content, color }) => {
    return (
        <div>
            <h1 style={{ color: color }}>{content}</h1>
        </div>  
    );
}

export default Title;