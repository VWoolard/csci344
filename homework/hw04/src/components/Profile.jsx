import React, { useState, useEffect } from "react";


export default function Profile({profileData}) {
    console.log(profileData);
    return (
        <header className="flex gap-4 items-center">
             <img src={profileData.thumb_url} alt="profile pic" class="rounded-full w-16" />
             <h2 class="font-Comfortaa font-bold text-2xl">{profileData.username}</h2>
        </header>
    );
}
