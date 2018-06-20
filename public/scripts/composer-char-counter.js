$(document).ready(function() {
  $('#textArea').on('keyup', function() {
    const counter = $(this).parent().find(".counter");
    var totalCharacters = (140 - $(this).val().length);
    counter.text(totalCharacters);
    if (totalCharacters < 0) {
      counter.addClass('tooManyChar');
    } else {
      counter.removeClass('tooManyChar');
    }
  })
});

