$(document).ready(function() {
  $('#textArea').on('keyup', function(event) {
    const counter = $('#counter-container');
    var totalCharacters = (140 - event.target.value.length);
    counter.text(totalCharacters);
    if (totalCharacters < 0) {
      counter.addClass('tooManyChar');
    } else {
      counter.removeClass('tooManyChar');
    }
  })
});

