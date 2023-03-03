// Get images
let images = document.querySelectorAll('img[data-src]')

const loadImg = (image) => {
    image.setAttribute('src', image.getAttribute("data-src"))
}