const today = new Date();

const dateoptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};

document.querySelector('#lastmodified').textContent = today.toLocaleDateString('en-US', dateoptions);