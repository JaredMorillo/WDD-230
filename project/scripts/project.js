fetch('data/project.json')
      .then(response => response.json())
      .then(data => {
        const rentalTypes = data.rentalType;
        const tableBody = document.getElementById('tableBody');

        rentalTypes.forEach(rental => {
          const row = document.createElement('tr');

          const typeCell = document.createElement('td');
          typeCell.textContent = rental.type;
          row.appendChild(typeCell);

          const maxPersonsCell = document.createElement('td');
          maxPersonsCell.textContent = rental.maxPersons;
          row.appendChild(maxPersonsCell);

          const halfDayCell = document.createElement('td');
          halfDayCell.textContent = rental.pricing.halfDay;
          row.appendChild(halfDayCell);

          const fullDayCell = document.createElement('td');
          fullDayCell.textContent = rental.pricing.fullDay;
          row.appendChild(fullDayCell);

          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));