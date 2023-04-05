document.querySelector("#menu").addEventListener('click', ()=>{
    document.querySelector("#open").classList.toggle('active_button');
    document.querySelector("#closed").classList.toggle('active_button');
    document.querySelector("#navbar").classList.toggle('active_button');
});

const today = new Date();

// Display current year
document.querySelector('#currentyear').textContent = today.getFullYear();

// Display
// document.querySelector('#currentdate').textContent = today.toLocaleString("en-us", {
//     weekday: "long",
//     day: "2-digit",
//     month: 'long',
//     year: 'numeric'

// });
// This sets last modified date
document.querySelector('#lastmodified').textContent = document.lastModified;
