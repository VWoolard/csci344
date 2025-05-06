import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post.jsx";

export default function Posts({ token }) {
    // when useState is invoked it retruns an array wih 2 values:
    // 1. state variable
    // 2. function whose job is to set the state variable 
    // and then redraw the screen after the variable is set.
    const [posts, setPosts] = useState([]);


    async function getPosts() {
        //fetches data from endpoint 
        const data = await getDataFromServer(token, "/api/posts");

        //printing that data to the screen
        console.log(data);

        //setting a state variable
        console.log("Setting a state variable to redraw the screen after the posts are set...")
        setPosts(data);
    }

    // useEffect is a built-in function used to handle side-effects when a page first loads
    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj) {
        return <Post token={token} key={postObj.id} postData={postObj} />
    }

    return (
    <div>
    {
        // posts.map((post) => (
        //     <Post token= {token} />
        // ))
        posts.map(outputPost)
    }
    <br />
    </div>
    );
}
