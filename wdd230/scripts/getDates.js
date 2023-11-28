// getdates.js

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

//Hamburger Button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// Increment the number of visits by one.
numVisits++;

// Store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);


// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

//Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }

    } catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    const desc = data.weather[0].description.toUpperCase();
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    currentTemp.innerHTML = `<p>Current Temperature: <strong>${data.main.temp.toFixed(0)} °F</stron></p>`;
    captionDesc.innerHTML = `<p>Description: <strong>${desc}</stron></p>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

//Links
const linksURL = "https://letiabelenda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

function displayLinks(weeks) {
  const lessonList = document.getElementById("container");

  weeks.lessons.forEach(week => {
    const weekElement = document.createElement("div");
    weekElement.className = "week";

    const weekTitle = document.createElement("h4");
    weekTitle.textContent = "Week " + week.lesson;

    const linksList = document.createElement("ul");

    week.links.forEach(link => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = link.url;
      linkAnchor.textContent = link.title;

      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekElement.appendChild(weekTitle);
    weekElement.appendChild(linksList);
    lessonList.appendChild(weekElement);
  });
}

getLinks();