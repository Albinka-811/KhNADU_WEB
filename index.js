const sliderItems = document.querySelectorAll('.sliderControlsItem'),
    currentSlideTitle = document.querySelector('.sliderDescTitle'),
    currentSlideDescText = document.querySelector('.sliderDescText');


for (const item of sliderItems) {
    item.addEventListener('click', this.selectSlide);
}

function selectSlide ({ target }) {
    currentSlideTitle.textContent = target.textContent;
    currentSlideDescText.textContent = target.textContent;
}