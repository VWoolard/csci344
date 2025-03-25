
import Profile from "./Profile.jsx";
import React from "react";
import "./App.css";

export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>

                <Profile name = "Violet" imgURL="https://picsum.photos/200/200?a=90"/>
                <Profile name = "Mira" imgURL="https://picsum.photos/200/200?a=91"/>
                <Profile name = "Kati" imgURL="https://picsum.photos/200/200?a=92"/>
                <Profile name = "Alina" imgURL="https://picsum.photos/200/200?a=93"/>
                <Profile name = "Peter" imgURL="https://picsum.photos/200/200?a=94"/>
                <Profile name = "Sarah" imgURL="https://picsum.photos/200/200?a=95"/>
            </main>
        </>
    );
}