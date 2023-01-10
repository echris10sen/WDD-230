const today = new Date();

//Display current year
document.querySelector('#currentyear').textContent = today.getFullYear();

//This sets last modified date
document.querySelector('#lastmodified').textContent = document.lastModified;