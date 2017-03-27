import $ from "jquery";

class Overlay {
  constructor() {
    this.Model = $('.model');
    this.modelContainer = $('.model__container');
    this.openModelBtn = $('.btn__login');
    this.closeModelBtn = $('.model__close');
    this.login = $('.model__login');
    this.signup = $('.model__signup');
    this.loginBtn = $('.btn--login');
    this.signupBtn = $('.btn--signup');
    this.eventsHandler();
  }

  eventsHandler() {
    this.openModelBtn.click(this.openModel.bind(this));
    this.closeModelBtn.click(this.closeModel.bind(this));
    $(document).keyup(this.keyPress.bind(this));

    this.loginBtn.click(this.loginIsOpen.bind(this));
    this.signupBtn.click(this.signupIsOpen.bind(this));
  }

  // Close the overaly with esc key
  keyPress(e) {
    if(e.keyCode == 27) {
      this.closeModel();
    }
  }

  openModel() {
    this.Model.addClass("model--is-visible");
    this.modelContainer.addClass('model__container--is-expanded');
    return false;
  }

  closeModel() {
    this.Model.removeClass('model--is-visible');
    this.modelContainer.removeClass('model__container--is-expanded');
  }

  loginIsOpen() {
    this.signup.removeClass('model__signup--is-open');
    this.login.removeClass('model__login--is-closed');
    this.loginBtn.removeClass('btn--login--not-active');
    this.signupBtn.removeClass('btn--signup--active');
  }

  signupIsOpen() {
    this.login.addClass('model__login--is-closed');
    this.signup.addClass('model__signup--is-open');
    this.signupBtn.addClass('btn--signup--active');
    this.loginBtn.addClass('btn--login--not-active');
  }
}

export default Overlay;
