const formDate = new Date();
document.querySelector("#formDate").value = formDate.toDateString();

function validate() {
    let value = document.querySelector('#title').value;
    const regEx = new RegExp("\w");
    return regEx.test(value);
}

document.querySelector("#submit").addEventListener("click", validate)