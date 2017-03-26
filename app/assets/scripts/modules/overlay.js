import $ from "jquery";

class Overlay {
  constructor() {
    this.Model = $('.model');
    this.openModelBtn = $('.btn__login');
    this.closeModelBtn = $('.model__close');
    this.eventsHandler();
  }

  eventsHandler() {
    this.openModelBtn.click(this.openModel.bind(this));
    this.closeModelBtn.click(this.closeModel.bind(this));
    $(document).keyup(this.keyPress.bind(this));
  }

  keyPress(e) {
    if(e.keyCode == 27) {
      this.closeModel();
    }
  }

  openModel() {
    this.Model.addClass("model--is-visible");
    return false;
  }

  closeModel() {
    this.Model.removeClass('model--is-visible');
  }
}

export default Overlay;
