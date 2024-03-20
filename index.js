const images = ["Asset/image14.webp", "Asset/image11.webp", "Asset/image13.webp"];
let currentIndex = 0;
const intervalTime = 3000;

function changeImage(index) {
    currentIndex = index;
    const imageUrl = images[index];
    const imgElement = document.querySelector('#currentImage');
    imgElement.src = imageUrl;
    updateButtonStyles();
}

function updateButtonStyles() {
    const buttons = document.querySelectorAll('h2');
    buttons.forEach((h2, index) => {
        if (index === currentIndex) {
            h2.classList.add('active');
        } else {
            h2.classList.remove('active');
        }
    });
}

function autoChangeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex];
    const imgElement = document.querySelector('#currentImage');
    imgElement.src = imageUrl;
    updateButtonStyles();
}

setInterval(autoChangeImage, intervalTime);