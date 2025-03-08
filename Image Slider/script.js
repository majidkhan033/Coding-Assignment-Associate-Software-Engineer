const images = [
    'https://i.pinimg.com/736x/12/84/c0/1284c0bc3c9eb64a0667b3a9b8ce25fc.jpg',
    'https://i.pinimg.com/736x/91/85/15/918515b03483068e1ea8a28a8dad478c.jpg',
    'https://i.pinimg.com/736x/9e/96/2e/9e962ea05d7d08b3296042095e139c00.jpg',
    'https://i.pinimg.com/736x/16/4f/df/164fdfdef0aa94e6a982857482f09c9a.jpg',
    'https://i.pinimg.com/736x/0f/df/e1/0fdfe119224655efcba8955bee85f13a.jpg',
    'https://i.pinimg.com/736x/a7/54/e5/a754e531d86998f5961688981b71d20f.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

// Initialize the first image
showImage(currentIndex);