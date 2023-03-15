const formDate = new Date();
document.querySelector("#formDate").value = formDate.toDateString();

function validate() {
    let value = document.querySelector('#title').value;
    console.log(value);
    const regEx = new RegExp("\w*");
    let valid = regEx.test(value);
    console.log(valid)
    return valid;

}