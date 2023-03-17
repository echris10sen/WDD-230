document.querySelector("#gd-btn").addEventListener('click', ()=> {
    const defGrid = document.getElementById("default");
    console.log(defGrid.getAttribute('class'));
    if (defGrid.getAttribute('class') != 'active-grid') {
        defGrid.setAttribute('class','active-grid');
    }
    else {
        return;
    }
});

document.querySelector('#lst-btn').addEventListener('click', ()=> {
    const defList = document.getElementById('default');
    if (defList.getAttribute('class') != 'active-list') {
        defList.setAttribute('class', 'active-list');
    }
    else {
        return;
    }
})

const url = './data/data.json'

async function getBusinessData() {
    const responce = await fetch(url);
    const data = await responce.json();
    console.table(data.companies);
    displayBusinessData(data.companies);
}

const displayBusinessData = (companies) => {
    // This grabs the default grid
    const cards = document.querySelector('#default');

    companies.forEach(company => {
        // build the html for the card
        let card = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let ctiyState = document.createElement('p');
        let linkContainer = document.createElement('p');
        let link = document.createElement('a');
        let imgContainer = document.createElement('div')
        // populate the HTML
        card.setAttribute('class', 'card')
        img.setAttribute('src', `${company.imagesrc}`);
        img.setAttribute('alt', 'business photo')
        name.textContent = company.name;
        address.textContent = company.address;
        ctiyState.textContent = `${company.city}, ${company.state}`;
        link.textContent = company.siteurl;
        link.href = "";

        // Add gold class to companies with gold membership
        if (company.membershipLvl == 'gold') {
            card.setAttribute('class', 'card gold');
            imgContainer.setAttribute('class', 'gold');
        };

        // Putting it all together
        linkContainer.appendChild(link);
        imgContainer.appendChild(img);

        // card.appendChild(img);
        card.appendChild(imgContainer);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(ctiyState);
        card.appendChild(linkContainer);
        
        // Ship it to the html doc
        cards.appendChild(card);
    });
    
}
getBusinessData()