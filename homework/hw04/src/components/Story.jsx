import React, { useState, useEffect } from "react";


export default function Story({storyData}) {
    console.log(storyData);
    return (
        <div className="flex flex-col justify-center items-center">
        <img src={storyData.user.thumb_url} alt="profile picture of person" className="rounded-full border-4 border-gray-300" />
        <p className="text-xs text-gray-700">{storyData.user.username}</p>
        </div>)
};