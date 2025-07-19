function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
const sliedes = document.querySelectorAll('.slide');
let counter = 0;
sliedes.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleAttractions');
    const attractionList = document.querySelector('.attraction-list');
    let expanded = false;
    if (toggleBtn && attractionList) {
        toggleBtn.addEventListener('click', function() {
            expanded = !expanded;
            if (expanded) {
                attractionList.style.maxHeight = 'none';
                toggleBtn.textContent = 'Show Less';
            } else {
                attractionList.style.maxHeight = '600px';
                toggleBtn.textContent = 'Show More';
            }
        });
        // Initial collapsed state for mobile
        if (window.innerWidth < 900) {
            attractionList.style.maxHeight = '600px';
            attractionList.style.overflow = 'hidden';
        }
    }
});

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

