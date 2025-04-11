import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Story from "./Story.jsx";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);
        
        
            async function getStories() {
                //fetches data from endpoint 
                const data = await getDataFromServer(token, "/api/stories/");
        
                //printing that data to the screen
                console.log(data);
        
                //setting a state variable
                console.log("Setting a state variable to redraw the screen after the sto are set...")
                setStories(data);
            }
        
            // useEffect is a built-in function used to handle side-effects when a page first loads
            useEffect(() => {
                getStories();
            }, []);
        
            function outputStories(storyObj) {
                return <Story key={storyObj.id} storyData={storyObj} />
            }
    
    
    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
           {stories.map(outputStories)}
        </header>
    );

}
