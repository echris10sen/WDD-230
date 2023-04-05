const params = new URLSearchParams(location.search);
const url = "./data/fruityvice.json";

function getParams(data) {
    let fruitList = data.fruits;

    // Get Url params
    let firstName = params.get('firstName');
    let mail      = params.get('mail');
    let phone     = params.get('phone');
    let check1    = params.get('check1');
    let check2    = params.get('check2');
    let check3    = params.get('check3');
    let flavor1   = fruitList[params.get('flavor1')].name;
    let flavor2   = fruitList[params.get('flavor2')].name;
    let flavor3   = fruitList[params.get('flavor3')].name;
    let spin      = params.get('spin');
    let time      = params.get('time');

    let orderArray = [];
    
    let ai1 = fruitList[params.get('flavor1')];
    let ai2 = fruitList[params.get('flavor2')];
    let ai3 = fruitList[params.get('flavor3')];

    // Get html elements
    let fn = document.querySelector('#fn-con');
    let em = document.querySelector('#email-con');
    let tl = document.querySelector('#phone-con');
    let ft = document.querySelectorAll('.fruit-con');
    console.log(ft)
    let si = document.querySelector('#spin-con');

    // Put it on the page
    fn.textContent = `${firstName}`;
    em.textContent = `${mail}`;
    tl.textContent = `${phone}`;
    si.textContent = `${spin}`;
    
    if(check1 == "on"){
        ft[0].textContent = `${flavor1}`;
        orderArray.push(ai1);        
    } else {
        ft[0].style.display = 'none';
    };

    if(check2 == "on"){
        ft[1].textContent = `${flavor2}`;
        orderArray.push(ai2);
    } else {
        ft[1].style.display = 'none';
    };

    if(check3 == "on"){
        ft[2].textContent = `${flavor3}`;
        orderArray.push(ai3);
    } else {
        console.log("bye");
        ft[2].style.display = 'none';
    };

    const date = new Date();
    const locale = "en-US";

    let dayContainer = document.querySelector('.day');

    dayContainer.textContent = date.toLocaleDateString(locale);

    let timeContainer = document.querySelector('.time');

    timeContainer.textContent = date.toLocaleTimeString(locale, {hour:"numeric", minute:"2-digit"});

    // Log
    console.log(firstName);
    console.log(mail);
    console.log(phone);
    console.log(flavor1);
    console.log(flavor2);
    console.log(flavor3);
    console.log(spin);
    console.log(time);

    // Add nutrition information
    let totalCar = 0;
    let totalPro = 0;
    let totalFat = 0;
    let totalSgr = 0;
    let totalCal = 0;

    orderArray.forEach(element => {
    //  create element containers
        let orderCard = document.querySelector('#nutrition-card');
        let ni1 = document.createElement('h3');
        let ni1l = document.createElement('ul');
        let ni1car = document.createElement('li');
        let ni1p = document.createElement('li');
        let ni1f = document.createElement('li');
        let ni1s = document.createElement('li');
        let ni1cal = document.createElement('li');
        
        // Fill the containers
        ni1.textContent = element.name;
        ni1cal.textContent = `Calories: ${element.nutritions.calories}`;
        ni1car.textContent = `Carbohydrates ${element.nutritions.carbohydrates}`;
        ni1p.textContent = `Protein: ${element.nutritions.protein}`;
        ni1f.textContent = `Fat: ${element.nutritions.fat}`;
        ni1s.textContent = `Sugar: ${element.nutritions.sugar}`;

        // Add them to the total amount for the whole drink
        totalCal += (+element.nutritions.calories);
        totalCar += (+element.nutritions.carbohydrates);
        totalPro += (+element.nutritions.protein);
        totalFat += (+element.nutritions.fat);
        totalSgr += (+element.nutritions.sugar);

        orderCard.appendChild(ni1);
        ni1l.appendChild(ni1car);
        ni1l.appendChild(ni1p);
        ni1l.appendChild(ni1f);
        ni1l.appendChild(ni1s);
        ni1l.appendChild(ni1cal);
        orderCard.appendChild(ni1l);
    });

    let orderCard = document.querySelector('#nutrition-card');
    let orderDrink = document.createElement('h3');
    let drl = document.createElement('ul');
    let drcar = document.createElement('li');
    let drp = document.createElement('li');
    let drf = document.createElement('li');
    let drs = document.createElement('li');
    let drcal = document.createElement('li');

    orderDrink.textContent = `Your Drink`;
    drcal.textContent = `Total Calories: ${totalCal.toFixed(2)}`;
    drcar.textContent = `Total Carbohydrates ${totalCar.toFixed(2)}`;
    drp.textContent = `Total Protein: ${totalPro.toFixed(2)}`;
    drf.textContent = `Total Fat: ${totalFat.toFixed(2)}`;
    drs.textContent = `Total Sugar: ${totalSgr.toFixed(2)}`;

    orderCard.appendChild(orderDrink);
    orderCard.appendChild(drl);
    drl.appendChild(drcar);
    drl.appendChild(drp);
    drl.appendChild(drf);
    drl.appendChild(drs);
    drl.appendChild(drcal);
    orderCard.appendChild(drl);
}

async function apiFetch() {
    const response = await fetch(url);
    try {
        console.log(response.ok);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            getParams(data);
        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    
}

apiFetch();
