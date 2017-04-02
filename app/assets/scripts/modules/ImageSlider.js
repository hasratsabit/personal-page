import $ from "jquery";

const imageSlider = (function() {
  const NextButton = $('.next-slide');
  const PrevButton = $('.prev-slide');

  const eventHandlers = function() {
    NextButton.on('click', function() {
      showNextSlide();
    });

    PrevButton.on('click', function() {
      showPrevSlide();
    })
  }

  const showNextSlide = function() {
    const CurrentSlide = $('.content--active');
    const NextSlide = CurrentSlide.next();
    if(NextSlide.length) {
      NextSlide.addClass('content--active');
      CurrentSlide.removeClass('content--active');
    }
  }

  const showPrevSlide = function() {
    const CurrentSlide = $('.content--active');
    const PrevSlide = CurrentSlide.prev();

    if(PrevSlide.length) {
      PrevSlide.addClass('content--active');
      CurrentSlide.removeClass('content--active');
    }
  }

  eventHandlers();
}());


// function imageSlide() {
//   $('.next-slide').on('click', function() {
//     const CurrentSlide = $('.content--active');
//     let NextSlide = CurrentSlide.next();
//
//     if(NextSlide.length) {
//       CurrentSlide.removeClass('content--active');
//       NextSlide.addClass('content--active');
//     }
//
//     $('.prev-slide').on('click', function() {
//       let CurrentSlide = $('.content--active');
//       let PrevSlide = CurrentSlide.prev();
//
//       if(PrevSlide.length) {
//         CurrentSlide.removeClass('content--active');
//         PrevSlide.addClass('content--active');
//       }
//     })
//   })
//
//
// }
//
// imageSlide();
