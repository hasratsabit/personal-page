import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class HeaderReveal {
  constructor() {
    this.siteHeader = $('.site-header');
    this.roundImage = $('.site-header__round-image');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    this.roundImage.addClass('site-header__round-image--dropdown');
  }
}

export default HeaderReveal;
