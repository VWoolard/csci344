import { getAccessToken } from "./get-token.js";
const rootURL = "https://photo-app-secured.herokuapp.com";

export async function createPost() {
    // get access token (like logging in) so that you can query for "your data":
    const token = await getAccessToken(rootURL, "violet", "password");

    // data to sent to server:
    const postData = {
        image_url: "https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=445&dpr=1&s=none&crop=none",
        caption: "hey :)",
        alt_text: "here is some alt text for the photo!",
    };

    // endpoint:
    const endpoint = `${rootURL}/api/posts/`;

    // send asynchronous request and wait for response headers:
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    });

    // now wait for response body (also asynchronous):
    const data = await response.json();

    // now print to the console:
    console.log(data);
}

createPost();
