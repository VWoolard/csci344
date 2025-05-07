//job: contianer that holds all of the widgets/framework
import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";


// custom components:
import NavBar from "./NavBar";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Stories from "./Stories";
import Posts from "./Posts";

export default function App({ username, token }) {
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
        <>
            {/* Navbar (already implemented for you ) */}
            <NavBar username={profile.username} />

            {/* Main Panel */}
            <main className="mt-[100px] md:max-w-[61vw] md:mr-[50px] px-6 md:pl-[5vw] lg:pl-[10vw]">
                {/* Stories Panel */}
                <Stories token={token} />

                {/* Posts */}
                <Posts token={token} />
            </main>

            {/* Right Panel */}
            <aside className="fixed top-[100px] left-[63vw] w-70 hidden md:block max-w-[300px]">
                {/* Profile Panel */}
                <Profile profile={profile} token={token} />

                {/* Suggestions Panel */}
                <Suggestions token={token} />
            </aside>
        </>
    );
}
