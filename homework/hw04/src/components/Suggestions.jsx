import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion.jsx";

export default function Suggestions({ token }) {

    const [suggestions, setSuggestions] = useState([]);
    
    
        async function getSuggestions() {
            //fetches data from endpoint 
            const data = await getDataFromServer(token, "/api/suggestions");
    
            //printing that data to the screen
            console.log(data);
    
            //setting a state variable
            console.log("Setting a state variable to redraw the screen after the suggestions are set...")
            setSuggestions(data);
        }
    
        // useEffect is a built-in function used to handle side-effects when a page first loads
        useEffect(() => {
            getSuggestions();
        }, []);
    
        function outputSuggestion(suggestionObj) {
            return <Suggestion key={suggestionObj.id} suggestionData={suggestionObj} />
        }
    
    return (
        <div className="mt-4"> 
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>
            {suggestions.map(outputSuggestion)}
           
        </div>
    );
}
