import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class ContactReveal {

  constructor() {
    this.inputReveal = $('.contact-form .input-group');
    this.createWayPoints();
  }

  createWayPoints() {
    this.inputReveal.each(function(i) {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
            $(currentItem).addClass("input-group--is-visible");
        },
        offset: "80%"
      });
    });
  }

}

export default ContactReveal;
