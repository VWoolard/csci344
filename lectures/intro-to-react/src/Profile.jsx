import "./Profile.css";
import React, {useState} from "react";

export default function Profile({ name, imgURL }) {
    // state variables go at the top
    const [style, setStyle] = useState("card");
    const [times, setTimes] = useState(0);
    function toggleClass() {
       console.log("change the card class!"); 
        if (style === "card") {
            setStyle("active-card");
        } else {
            setStyle("card");
        }
    }
    function addOne(ev) {
        setTimes(times + 1);
        ev.stopPropagation();
    }

    return (
        <section className={style} onClick={toggleClass}>
           <h2>Hello {name}!</h2>
           <img src={imgURL} alt="profilepic" />
           <button onClick={addOne}>This has been clicked {times} times</button>
        </section>
    );
}