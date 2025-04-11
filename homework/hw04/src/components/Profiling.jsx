import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Profile from "./Profile.jsx";

export default function Profiling({ token }) {
    // when useState is invoked it retruns an array wih 2 values:
    // 1. state variable
    // 2. function whose job is to set the state variable 
    // and then redraw the screen after the variable is set.
    const [profile, setProfile] = useState([]);


    async function getProfile() {
        //fetches data from endpoint 
        const data = await getDataFromServer(token, "/api/profile/");

        //printing that data to the screen
        console.log(data);

        //setting a state variable
        console.log("Setting a state variable to redraw the screen after the posts are set...")
        setProfile(data);
    }

    // useEffect is a built-in function used to handle side-effects when a page first loads
    useEffect(() => {
        getProfile();
    }, []);

    function outputProfile(profileObj) {
        return <Profile token={token} key={profileObj.id} profileData={profileObj} />
    }

return (
    <div>
    {profile.map(outputProfile)}
    </div>
    );
}
