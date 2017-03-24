import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealModule {

  constructor(element, offset, beforeAnimate, animate) {
    this.itemsToReveal = element;
    this.animate = animate;
    this.beforeAnimate = beforeAnimate;
    this.hideInitially();
    this.offsetPercentage = offset;
    this.createWayPoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass(this.beforeAnimate);
  }
  createWayPoints() {
    let that = this;
    this.itemsToReveal.each(function(i) {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          setTimeout(function(i) {
            $(currentItem).addClass(that.animate);
          }, 300 * (i+1));
        },
        offset: that.offsetPercentage
      })
    })
  }

}

export default RevealModule;
