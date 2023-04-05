let orderNumber = document.querySelector('#numOrdered');

function getNumber() {
    if (localStorage.getItem('numDrinks') === null) {
        localStorage.setItem('numDrinks', 0);
    }    
    orderNumber.innerHTML = localStorage.getItem("numDrinks");
}
getNumber();