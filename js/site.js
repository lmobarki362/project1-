// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('button[type="submit"]');
  
  submitButton.onmouseover = () => submitButton.style.backgroundColor = "#FFD700";
  submitButton.onmouseout = () => submitButton.style.backgroundColor = "#FFFFFF";
});