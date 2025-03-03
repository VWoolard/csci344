// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;
    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassOpen = (course) => {
    // modify this to accurately apply the filter:
    return course.EnrollmentCurrent < course.EnrollmentMax;
};

// Part 1.1b
const doesTermMatch = (course) => {
    if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
        match = true;
    } else {
        match = false;
    }
    return match;
    // modify this to accurately apply the filter:
};

// Part 1.2
const dataToHTML = (course) => {
    // modify this to be more detailed
    let seatsavailable = course.EnrollmentMax-course.EnrollmentCurrent;
    if (seatsavailable < 0) {
        seatsavailable = 0;
    }
    let waitlistavailable = course.EnrollmentCurrent-course.EnrollmentMax;
    let status;
    if (seatsavailable <= 0) {
        status = ` <i class="fa-solid fa-circle-xmark"></i> Closed &bull; ${course.CRN} &bull; Number on Waitlist: ${waitlistavailable}`;
    } else {
        status = `<i class="fa-solid fa-circle-check"></i> Open &bull; ${course.CRN} &bull; Seats Available: ${seatsavailable}`;
    }
    return `
        <section class="course">
        <h2>${course.Code}: ${course.Title}</h2>
         <p>
        ${status}
        </p>
        <p>
        ${course.Days || "TBD"} &bull; ${course.Location.FullLocation || "TBD"} &bull; ${course.Hours} credit hour(s)
        </p>
        <p><strong>${course.Instructors[0].Name}</strong></p>
        </section>`;
};

// Part 2
function showMatchingCourses() {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:
    const container = document.querySelector(".courses");
    container.innerHTML = "";
    //filter by search term
    let matches = courseList.filter(doesTermMatch);
    if (openOnly) {
        matches = matches.filter(isClassOpen);
    }
    matches.forEach(course => {

        const snippet = dataToHTML(course);
        //actually add the HTML snippet to doc
        container.insertAdjacentHTML("beforeend", snippet);
    });
}