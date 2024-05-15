/*Animation Page*/
var myVar;
    
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/// Function to update the copyright year in the footer
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formatDate(lastModified);
    }
}

// Helper function to format the date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Call the functions to update the footer elements
updateCopyrightYear();
updateLastModified();

//Weather
var temp= 57;
var wSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;

/*Hambuger Button*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Set the current date/time in milliseconds to the hidden input field
document.getElementById('formTimestamp').value = Date.now();

// Set a directory
function loadMembers() {
	fetch('data/members.json')
	  .then(response => response.json())
	  .then(data => displayMembers(data))
	  .catch(error => console.error('Error fetching members:', error));
  }
  function displayMembers(members) {
	const membersContainer = document.getElementById('members-container');
	membersContainer.innerHTML = ''; // Clear container before displaying
  
	members.forEach(member => {
	  const memberElement = createMemberElement(member);
	  membersContainer.appendChild(memberElement);
	});
  }
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
