// your function here
function showTrack() {
let container = document.querySelector("#track-list");
let isShowing = false;
if (!isShowing) {
    isShowing = true;
    let track = `<section class="track">
    <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41">
    <div>
        <h3>When the Sun Hits</h3>
        <p>Slowdive</p>
        <p>Souvlaki</p>
    </div>
</section>`
    container.insertAdjacentHTML("beforeend", track);
} else {
    isShowing = false;
    container.innerHTML = "";
    container.style.display(none);
}
};

