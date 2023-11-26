const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    //card build code goes here
    prophets.forEach(prophet => {
        //create elements to add to the document
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        //Change the textContent property of the h2 element to contain the prophet's full name
        fullName.textContent = prophet.name + ' ' + prophet.lastname;

        //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrait of' + prophet.name + ' ' + prophet.lastname + ' ' + prophet.order + ' ' + 'Latter-day President');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Build the paragraph with the birth data
        birthDate.textContent = 'Date of Birth: ' + prophet.birthdate;
        birthPlace.textContent = 'Place of Birth: ' + prophet.birthplace;

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
    
        cards.appendChild(card);
    });
}