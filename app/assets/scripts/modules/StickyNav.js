import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyNav {
  constructor() {
    this.primaryNav = $('.primary-nav');
    this.primaryNavDarkTrigger = $('.site-header__header-content');
    this.pageSections = $('.page-sections');
    this.primaryNavLinks = $('.primary-nav__menu-content a');
    this.createWayNavWaypoint();
    this.currentPageSectionWaypoint();
    this.addSmoothScroll();
  }

  // Changes the background color.
  createWayNavWaypoint() {
    let that = this;
    new Waypoint({
      element: this.primaryNavDarkTrigger[0],
      handler: function(direction) {
        if(direction == "down") {
          that.primaryNav.addClass('primary-nav--darker-background');
        }else {
          that.primaryNav.removeClass('primary-nav--darker-background');
        }
      }
    });
  }

  // Smooth scrolling when links clicked
  addSmoothScroll() {
    this.primaryNavLinks.smoothScroll();
  }

  // Highlights the link of the section we are scrolling to.
  currentPageSectionWaypoint() {
    let that = this;
    this.pageSections.each(function() {
      let currentPageSection = this;
      // Highlights when scrolling down.
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "down") {
            let currentSectionLink = currentPageSection.getAttribute('data-match-link');
            that.primaryNavLinks.removeClass('is-current-link');
            $(currentSectionLink).addClass('is-current-link');
          }
        },
        offset: "20%"
      });
      // Highlights when scrolling up.
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "up") {
            let currentSectionLink = currentPageSection.getAttribute('data-match-link');
            that.primaryNavLinks.removeClass('is-current-link');
            $(currentSectionLink).addClass('is-current-link');
          }
        },
        offset: "-45%"
      });
    });
  }

}

export default StickyNav;
