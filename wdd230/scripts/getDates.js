// getdates.js

// Function to update the copyright year in the footer
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = currentYear;
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

// Call the functions to update the footer content
updateCopyrightYear();
updateLastModified();
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/
