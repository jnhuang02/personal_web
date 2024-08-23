import React from 'react';
import './button.css';

interface Props {
    label: string;
}

export default function Button({label}: Props) {
    return <button className = "button-container">{label}</button>
}