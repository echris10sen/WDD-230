// Create three variables that hold references to the input, button, and list elements using const.
const chapterInput = document.querySelector('#favchap');
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
addButton.addEventListener('click', () => {
// make sure the input is not blank before doing the following remaining tasks in this list
if (chapterInput.value == "") {
    return;
}
// create an li element
let newlistItem = document.createElement("li");
// create a delete button
let deleteButton = document.createElement("button");
// populate the li elements textContent or innerHTML with the input
newlistItem.textContent = chapterInput.value;
// populate the button textContent with an ❌
deleteButton.textContent = '❌';
// append the li element with the delete button
newlistItem.appendChild(deleteButton);
// append the list element with the li element just created and appended with text and the delete button
chapterList.appendChild(newlistItem);
// add an event listener to the delete button that removes the li element when clicked
deleteButton.addEventListener('click', () => {
    newlistItem.remove();
});
// send the focus to the input element
chapterInput.focus();
// change the input value to nothing or the empty string to clean up the interface for the user
chapterInput.value = "";
});

chapterInput.focus();
chapterInput.value = "";