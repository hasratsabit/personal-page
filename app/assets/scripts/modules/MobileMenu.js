import $ from "jquery";


class MobileMenu {
  constructor() {
    this.menuIcon = $('.menu-icon');
    this.primaryNav = $('.primary-nav');
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.primaryNav.toggleClass("primary-nav--is-visible");
  }

}

export default MobileMenu;
