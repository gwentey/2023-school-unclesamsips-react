import React from 'react';
import './Label.css'

const Label = ({content, color, onClick, underline, uppercase, italic}) => {
    return <span className="Label" style={{
        color: color,
        textDecoration: underline ? "underline" : null,
        textTransform: uppercase ? "uppercase" : null,
        fontStyle: italic ? "italic" : null
    }} onClick={onClick}>{content}</span>
}

export default Label;