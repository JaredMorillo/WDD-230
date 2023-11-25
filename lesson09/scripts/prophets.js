const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // <--- Create an h2 element
  
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // <--- Adjust based on JSON structure
  
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }