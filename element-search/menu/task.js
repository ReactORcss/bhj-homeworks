function menu() {
    let menuLinks = document.querySelectorAll('.menu__link');

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].onclick = clickMenu;
    }

    function clickMenu() {
        let thisSubMenu = this.closest('.menu__item').querySelector('.menu_sub');
        if (thisSubMenu) {
            if (thisSubMenu.className == 'menu menu_sub') {
                thisSubMenu.className = 'menu menu_sub menu_active';
            } else {
                thisSubMenu.className = 'menu menu_sub';
            }
            return false;
        }
    }
}

menu();
