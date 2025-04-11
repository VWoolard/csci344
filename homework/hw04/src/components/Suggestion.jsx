import React, { useState, useEffect } from "react";


export default function Suggestion({suggestionData}) {
    console.log(suggestionData);
    return (
        <div className="suggestion">
        <section className="flex justify-between items-center mb-4 gap-2">
<img src={suggestionData.thumb_url} alt="suggestion profile picture" className="rounded-full" />
<div className="w-[180px]">
    <p className="font-bold text-sm">{suggestionData.username}</p>
    <p className="text-gray-700 text-xs">suggested for you</p>
</div>
<button aria-label="follow" className="text-blue-700 text-sm py-2">follow</button>
</section>
        </div>)
};