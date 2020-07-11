function toggleMenu() {

  var burgerclosed = document.querySelector(".burgeropen");
  var burgeropen = document.querySelector(".burgerclosed");
  var nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active');

  var nav = document.getElementById('toggleIcon');
  nav.classList.toggle('active');

  if (burgerclosed.style.display === "block") {
    burgerclosed.style.display = "block";
    burgeropen.style.display = "none";
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');

    var nav = document.getElementById('toggleIcon');
    nav.classList.toggle('active');
    
  } else {
    burgerclosed.style.display = "none";
    burgeropen.style.display = "block";

  }
  if (burgerclosed.style.display === "block") {
    burgeropen.style.display = "block";
    burgerclosed.style.display = "none";
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');

    var nav = document.getElementById('toggleIcon');
    nav.classList.toggle('active');
  } else {
    burgeropen.style.display = "none";
    burgerclosed.style.display = "block";
  }
}

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 4; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});