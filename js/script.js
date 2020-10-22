function toggleMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="btn"]');
    const menu = document.querySelector('[data-menu="menu"]');

    function toggleMenu() { 
        menu.classList.toggle('active');
        btnMenu.classList.toggle('active');
    }

    btnMenu.addEventListener('click', toggleMenu);
}   

toggleMenuMobile();