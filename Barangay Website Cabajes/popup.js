$(document).ready(function() {
  // Show the popup (you can customize when to show it)
  $('.popup').show();

  // Close popup when the close button is clicked
  $('.close').on('click', function() {
      $('.popup').hide();
  });

  // Optionally close the popup when clicking outside of it
  $(window).on('click', function(event) {
      if ($(event.target).is('.popup')) {
          $('.popup').hide();
      }
  });
});
