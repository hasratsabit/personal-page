import $ from "jquery"

let resumeModel = (function() {

  const ResumeModel = $('.resume-model');
  const ResumeModelContainer = $('.resume-model__container');
  const HeaderButton = $('.site-header__btn');
  const CloseButton = $('.resume-model__close');

  // Event Handler
  const eventHandler = function() {
    //Header Button
    HeaderButton.on('click', function() {
      openResumeModel();
    })
    // Close Button
    CloseButton.on('click', function() {
      closeResumeModel();
    });
  }

  // Open Resume Model
  const openResumeModel = function() {
    ResumeModel.addClass('resume-model--is-visible');
    ResumeModelContainer.addClass('resume-model__container--is-expanded');
  }

  // Close Resume Model
  const closeResumeModel = function() {
    ResumeModel.removeClass('resume-model--is-visible');
    ResumeModelContainer.removeClass('resume-model__container--is-expanded');
  }

  eventHandler();
})

resumeModel();
