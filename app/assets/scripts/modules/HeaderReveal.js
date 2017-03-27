import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class HeaderReveal {
  constructor() {
    this.siteHeader = $('.site-header');
    this.roundImage = $('.site-header__round-image');
    this.headerTitle = $('.site-header__title');
    this.headerDescription = $('.site-header__description');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    this.roundImage.addClass('site-header__round-image--dropdown');
    this.headerTitle.addClass('site-header__title--slide-in');
    this.headerDescription.addClass('site-header__description--slide-in');
  }
}

export default HeaderReveal;
