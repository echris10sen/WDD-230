const url = "./data/fruityvice.json"

function getFruitOfDay(fruits) {
    console.log(fruits.fruits.length);
    // Set max and min
    let max = fruits.fruits.length - 1;
    let min = 0;

    // Generate Random numbers
    let num1 = Math.floor(Math.random() * (max - min + 1) + min);
    let num2 = Math.floor(Math.random() * (max - min + 1) + min);
    let num3 = Math.floor(Math.random() * (max - min + 1) + min);

    while (num1 == num2 || num1 == num3 || num2 == num3) {
        console.log(`Oops something was equal ${num1} ${num2} ${num3}`);
        num2 = Math.floor(Math.random() * (max - min + 1) + min);
        num3 = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`Here are the new numbers ${num1} ${num2} ${num3}`);
    }

    // Build fruit containers
    let fruit1 = fruits.fruits[num1];
    let fruit2 = fruits.fruits[num2];
    let fruit3 = fruits.fruits[num3];

    console.log(fruit1.name);
    // Access html elements
    let flavor1 = document.querySelector("#lab-flavor1");
    let flavor2 = document.querySelector("#lab-flavor2");
    let flavor3 = document.querySelector("#lab-flavor3");

    // Connect the fruit names to the html
    flavor1.innerHTML = `<input type="checkbox" name="check1"> ${fruit1.name} <input type="hidden" id="flavor1" name="flavor1" value="${num1}">`;
    flavor2.innerHTML = `<input type="checkbox" name="check2"> ${fruit2.name} <input type="hidden" id="flavor2" name="flavor2" value="${num2}">`;
    flavor3.innerHTML = `<input type="checkbox" name="check3"> ${fruit3.name} <input type="hidden" id="flavor3" name="flavor3" value="${num3}">`;

    let button = document.querySelector('#order');
    button.addEventListener('click', ()=>{
        const date = new Date();
        const locale = "en-US";
        button.setAttribute("value", date.toLocaleDateString(locale, {day:"numeric"}));   
    })

    let form = document.querySelector('#myform')
    form.addEventListener('submit', () =>{
        if (localStorage.getItem('numDrinks') === null) {
            localStorage.setItem('numDrinks', 0);
        }
        let storeInt = +localStorage.getItem('numDrinks');
        console.log(storeInt);
        let tot = Math.floor(storeInt + 1);
        localStorage.setItem('numDrinks', tot);  
    })
}   

async function apiFetch() {
    const response = await fetch(url);
    try {
        console.log(response.ok);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            getFruitOfDay(data);
        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    
}

apiFetch();