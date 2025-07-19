const sliedes = document.querySelectorAll('.slide');
let counter = 0;
sliedes.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const slideImage = () => {
    sliedes.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

const goNext = () => {
    counter++;
    slideImage();
}

const goPrev = () => {
    counter--;
    slideImage();
}