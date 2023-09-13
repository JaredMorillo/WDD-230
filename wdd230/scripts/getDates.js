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