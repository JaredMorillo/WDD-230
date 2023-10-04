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

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});