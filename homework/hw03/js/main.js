import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "violet";
let password = "password";

async function initializeScreen() {
    token = await getToken();
    showNav();
    getPosts();
}

async function getToken() {
    return await getAccessToken(rootURL, username, password);
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

async function getPosts() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/posts/?limit=10", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    renderPosts(data);
}


function renderPost(postJSON) {
    const template = `
    <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${postJSON.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${postJSON.image_url}" alt="placeholder image" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(postJSON)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${getBookmarkButton(postJSON)}
                    </div>
                </div>
                <p class="font-bold mb-3">${postJSON.likes.length} likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${postJSON.user.username}</strong>
                        ${postJSON.caption} <button class="button"><strong>more</strong></button>
                    </p>
                </div>
                <div class="text-sm mb-3">
                    <p>
                         ${showComments(postJSON.comments)}
                    </p>
                </div>
        
                <p class="uppercase text-gray-500 text-xs">1 day ago</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `;
    const container = document.querySelector('main');
    container.insertAdjacentHTML('beforeend', template);
}


function renderPosts(postListJSON) {
    postListJSON.forEach(renderPost);
}

function showComments(comments) {
    if (comments.length > 1) {
        const lastComment = comments[comments.length - 1];
        return `
        <button class="text-blue-500">View All ${comments.length} Comments</button>
        <p><strong>${lastComment.user.username}</strong> ${lastComment.text}<p>
        `;
    } 
    if (comments.length === 1) {
        return ` <p><strong>${comments[0].user.username}</strong> ${comments[0].text}<p>`
    } 
    return '';
}

function getLikeButton(postJSON) {
    let iconClass = "far";
    if (postJSON.current_user_like_id) {
        iconClass = "fas text-red-500"
    }
    return `<button><i class="${iconClass} fa-heart"></i></button>`
}

function getBookmarkButton(postJSON) {
    //already bookmarked
   if (postJSON.current_user_bookmark_id) {
        return `<button onclick="deleteBookmark(${postJSON.current_user_bookmark_id})"><i class="fas fa-bookmark"></i></button>`;
   //not bookmarked
    } else {
        return `<button onclick="createBookmark(${postJSON.id})">
        <i class="far fa-bookmark"></i>
        </button>`;
   }
}

window.createBookmark = async function(postId) {
    const postData = {
        post_id: postId,
    };    
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/bookmarks/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData)
    }
);
    const data = await response.json();
    console.log(data);
}

window.deleteBookmark = async function(bookmarkId) { 
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }
);
    const data = await response.json();
    console.log(data);
}

function renderBookmarkButton() {
    let template = "";
    if (postJSON.current_user_bookmark_id) {
    template = `
        <button onclick="window.createBookmark(${postJSON.id})">
            <i class="fa-solid fa-bookmark"></i>
        </button>
    `;
} else {
    template = `
    <button onclick="window.createBookmark(${postJSON.id})">
        <i class="fa-regular fa-bookmark"></i>
    </button>
`;
}
    return template;
}

function renderLikeButton() {
    let template = "";
    if (postJSON.current_user_like_id) {
    template = `
        <button onclick="window.createLikeButton(${postJSON.id})">
            <i class="fa-solid fa-heart"></i>
        </button>
    `;
} else {
    template = `
    <button onclick="window.createLikeButton(${postJSON.id})">
        <i class="fa-regular fa-bookmark"></i>
    </button>
`;
}
    return template;
}
// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();