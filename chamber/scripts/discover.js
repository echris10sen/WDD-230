// Get images
let images = document.querySelectorAll('img[data-src]')

const loadImg = (image) => {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
    console.log("hello");
};

const callback = (items, observer) => {
    items.forEach((element) => {
        if (element.isIntersecting) {
            loadImg(element.target);
            observer.unobserve(element.target);
        }
    });
};

let options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(callback, options);

images.forEach((img) => {
    observer.observe(img);
});

const thisDay = new Date();

if(localStorage.getItem("lastVisited")==null){
    localStorage.setItem("lastVisited", thisDay);
}
else {
    const lastVisited = new Date(localStorage.getItem("lastVisited"));
    console.log(`Today's Date: ${thisDay}`);
    console.log(`lastVisited: ${lastVisited}`);
    let epochTime = Number(thisDay.getTime()) - Number(lastVisited.getTime());
    let numDays = Math.floor(epochTime/86400000);
    localStorage.setItem("lastVisited", thisDay);
    console.log(`epochTime: ${epochTime}`);
    console.log(`numDays: ${numDays}`);
    document.querySelector('#lastVisit').textContent = numDays
}