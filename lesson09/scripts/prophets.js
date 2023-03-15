const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData() {
    const responce = await fetch(url);
    const data = await responce.json();
    // console.log("Getting Prophet Data...");
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // Selecting Html element for the cards
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        // Creating html elements for the card container
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bdate = document.createElement('p');
        let bplace = document.createElement('p')
        let protrait = document.createElement('img');    
    
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        bdate.textContent = `Birth Day: ${prophet.birthdate}`;
        bplace.textContent = `Birth Place: ${prophet.birthplace}`;


        protrait.setAttribute('src', prophet.imageurl);
        protrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`)
        protrait.setAttribute('loading', 'lazy');
        protrait.setAttribute('width', '340');
        protrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(bdate);
        card.appendChild(bplace);
        card.appendChild(protrait);

        cards.appendChild(card);
    });
}

getProphetData();