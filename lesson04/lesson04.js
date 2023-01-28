function toggleMenu() {
    document.querySelector("#navbar").classList.toggle('menu-active');
    document.querySelector("#navbar").classList.toggle('menu-close');
    document.querySelector("#navbar").classList.toggle('menu-open');
}

document.querySelector("#hamburger-menu").onclick = toggleMenu;