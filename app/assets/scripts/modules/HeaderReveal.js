import $ from "jquery";

class HeaderReveal {
  constructor() {
    this.HeaderContent = $('.site-header__header-content');
    this.displayHeaderContent();
  }

  displayHeaderContent() {
    this.HeaderContent.addClass('site-header__header-content--is-visible');
  }
}

export default HeaderReveal;
