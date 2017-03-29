import $ from "jquery";

class ConstructionOverlay {
  constructor() {
    this.Construction = $('.construction');
    this.ConstructionContainer = $('.construction__container');
    this.ConstructionCloseBtn = $('.construction__close');
    this.ConstructionOpenBtn = $('.construction-open-btn');
    this.events();
  }

  events() {
    this.ConstructionOpenBtn.click(this.openConstructionOverlay.bind(this));
    this.ConstructionCloseBtn.click(this.closeConstructionOverlay.bind(this));
  }

  openConstructionOverlay() {
    console.log("workds");
    this.Construction.addClass('construction--is-visible');
    this.ConstructionContainer.addClass('construction__container--is-expanded');
    return false;
  }

  closeConstructionOverlay() {
    this.Construction.removeClass('construction--is-visible');
    this.ConstructionContainer.removeClass('construction__container--is-expanded');
  }
}

export default ConstructionOverlay;
