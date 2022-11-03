if (window.innerWidth <= 500) {
  $('#nav').removeClass('tabs-vertical tabs-left');
  $('#navUl').addClass('nav-justified flex-column flex-md-row');
}

console.log(document.getElementById('nav').classList);
console.log(document.getElementById('navUl').classList);