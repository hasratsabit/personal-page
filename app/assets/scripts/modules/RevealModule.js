import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealModule {

  constructor(element, offset) {
    this.itemsToReveal = element;
    this.hideInitially();
    this.offsetPercentage = offset;
    this.createWayPoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
  createWayPoints() {
    let that = this;
    this.itemsToReveal.each(function(i) {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          setTimeout(function(i) {
            $(currentItem).addClass("reveal-item--is-visible");
          }, 180 * (i+1));
        },
        offset: that.offsetPercentage
      });
    });
  }

}

export default RevealModule;
