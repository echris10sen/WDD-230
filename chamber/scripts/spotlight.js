const joinUrl = './data/data.json'

async function getBusinessData() {
    const responce = await fetch(joinUrl);
    const data = await responce.json();
    console.table(data.companies);
    displaySpotlightData(data.companies);
}

const displaySpotlightData = (companies) => {
    // This grabs the default grid
    
  let premium = companies.filter( (company) => {
        console.log(`Company being filtered in premium ${company.name}`);
    if (company.membershipLvl == 'gold' || company.membershipLvl == 'silver') {
        console.log(`Company Selected ${company.name}`);
        return company;
    };});

    let length = premium.length;

    let selector1 = Math.floor(Math.random() * length);
    let selector2 = Math.floor(Math.random() * length);
    let selector3 = Math.floor(Math.random() * length);

    while(selector1 == selector2 || selector1 == selector3 || selector2 == selector3){
        selector2 = Math.floor(Math.random() * length);
        selector3 = Math.floor(Math.random() * length);
    };
    
    console.log(`I AM NOW SELECTING PREMIUM MEMBERS TO BE DISPLAYED!!!!!`);

    setPremium = premium.filter((company) => {
        console.log(`Company being filtered in premium ${company.name}`);
        if (company === premium[selector1] || company === premium[selector2] || company === premium[selector3]) {
            console.log(`Company Selected ${company.name}`);
            return company;
    }});

    setPremium.forEach((company, index) => {
        let cards = document.querySelector(`.spotlight${index + 1}`);
        console.log(index)
        // build the html for the card
        let card = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let membershipLvl= document.createElement('p');
        let linkContainer = document.createElement('p');
        let link = document.createElement('a');
        let imgContainer = document.createElement('div')
        // populate the HTML
        card.setAttribute('class', 'card')
        img.setAttribute('src', `${company.imagesrc}`);
        img.setAttribute('alt', 'business photo');
        name.textContent = company.name;
        membershipLvl.textContent = `A ${company.membershipLvl} member`
        link.textContent = company.siteurl;
        link.href = "";

        // Putting it all together
        linkContainer.appendChild(link);
        imgContainer.appendChild(img);

        // card.appendChild(img);
        card.appendChild(membershipLvl);
        card.appendChild(imgContainer);
        card.appendChild(name);
        card.appendChild(linkContainer);
        
        // Ship it to the html doc
        
        cards.appendChild(card);
    });
    
}
getBusinessData()