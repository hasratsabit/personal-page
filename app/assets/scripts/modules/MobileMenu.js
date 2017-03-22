import $ from "jquery";


class MobileMenu {
  constructor() {
    this.menuIcon = $('.menu-icon');
    this.primaryNav = $('.primary-nav');
    this.primaryNavContent = $('.primary-nav__menu-content');
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.primaryNav.toggleClass("primary-nav--is-visible");
    this.primaryNavContent.toggleClass('primary-nav__menu-content--is-visible');
    this.menuIcon.toggleClass("menu-icon--close-x");
  }

}

export default MobileMenu;
