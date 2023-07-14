$(document).ready(function() {
    $('.section-title').click(function() {
      $(this).toggleClass('active');
      $(this).next('.section-content').slideToggle();
    });
  });

