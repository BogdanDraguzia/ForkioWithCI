let burgerBtn = document.querySelector('.navbar__burger');
let menu = document.querySelector('.navbar__list');

burgerBtn.addEventListener('click', (event)=> {
    toggleMenu();
    event.stopPropagation();
});

function toggleMenu() {
    menu.classList.toggle('visible');
    burgerBtn.classList.toggle('open');
}

menu.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', (event)=> {
    let openMenu = burgerBtn.classList.contains('open');

    let target = event.target;
    let clickedBtnMenu = target == burgerBtn || burgerBtn.contains(target);
    let clickedMenu = target == menu || menu.contains(target);
    
    if (openMenu &&  !clickedMenu && !clickedBtnMenu) {
        toggleMenu();
    }
});

let titles = document.querySelectorAll('.navbar__list-item');

for(let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', (event)=> {
        let oldActive = document.querySelector('.navbar__list-item.active');
        oldActive.classList.remove('active');
        event.target.classList.add('active');
    });
}
