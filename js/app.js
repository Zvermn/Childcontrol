console.log('подключено');
// открытие списка имен детенышей
let arrowChildChoice = document.querySelector('.child-choice-icon');
let childList = document.querySelector('.child-list');
let openChildList = document.querySelector('.child-choice');
// проверка что все элементы есть на странице
if (openChildList && childList && arrowChildChoice) {
    openChildList.addEventListener('click', () => {
        childList.classList.toggle('active');
        arrowChildChoice.classList.toggle('active');
    });

} else {
    console.log('не все элементы есть на странице');
}

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const height = entry.target.offsetHeight;
            document.documentElement.style.setProperty('--footer-height', `${height}px`);
        }
    });

    resizeObserver.observe(footer);
});