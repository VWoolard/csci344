import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";


export default function Profile({ token }) {
    const [profile, setProfile] = useState({});

    async function getProfile() {
            //fetches data from endpoint 
            const data = await getDataFromServer(token, "/api/profile");
    
            //printing that data to the screen
            console.log(data);
    
            //setting a state variable
            console.log("Setting a state variable to redraw the screen after the posts are set...")
            setProfile(data);
        };
    
        // useEffect is a built-in function used to handle side-effects when a page first loads
        useEffect(() => {
            getProfile();
        }, []);
    
    return (
        <header className="flex gap-4 items-center">
             <img src={profile.thumb_url} alt="profile pic" className="rounded-full w-16" />
             <h2 className="font-Comfortaa font-bold text-2xl">{profile.username}</h2>
        </header>
        );
}
