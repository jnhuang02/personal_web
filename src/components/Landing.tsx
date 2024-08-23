import React from 'react';
import './Landing.css'
import profiles from './data/profiles/profiles.json'
import { Profile } from './models/profile/Profile'
import Button from './button/button.tsx'
export default function Landing() {
    return (
    <div className = "landing-container">
            {/* <img src = "imgs/starwars.svg"></img> */}
            <div className = "content">
                <span className = "title">Who's Watching?</span>
                <div className = "profiles">
                     {profiles.map((profile, index) => (
                        <div className = "profile">
                        <img className = "image" src = {profile.image_src}/>
                        <span className = "username">{profile.username}</span>
                    </div>
                ))}
                </div>
                    <Button label = "Manage Profiles"/> 
            </div>
            
        </div>
    )
}