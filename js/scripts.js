  // Back-to-top btn
const backToTopButton = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 650) {
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 600;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

// Section-8
  // slick carousel
$(document).ready(function(){
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: true,
    pauseOnDotsHover: true
    // mobileFirst: true
  });
});

  // read more toggle
function moreLessToggle1() {
  var less = document.querySelector('#less1');
  var more = document.querySelector("#more1");
  var toggle = document.querySelector("#more-less-toggle1");

  if (less.style.display === "none") {
    less.style.display = "inline";
    toggle.innerHTML = "Читать весь отзыв <span class=\"icon-more\">></span>";
    more.style.display = "none";
  } else {
    less.style.display = "none";
    toggle.innerHTML = "Меньше <span class=\"icon-less\">></span>";
    more.style.display = "inline";
  }
}
function moreLessToggle2() {
  var less = document.querySelector('#less2');
  var more = document.querySelector("#more2");
  var toggle = document.querySelector("#more-less-toggle2");

  if (less.style.display === "none") {
    less.style.display = "inline";
    toggle.innerHTML = "Читать весь отзыв <span class=\"icon-more\">></span>";
    more.style.display = "none";
  } else {
    less.style.display = "none";
    toggle.innerHTML = "Меньше <span class=\"icon-less\">></span>";
    more.style.display = "inline";
  }
}
function moreLessToggle3() {
  var less = document.querySelector('#less3');
  var more = document.querySelector("#more3");
  var toggle = document.querySelector("#more-less-toggle3");

  if (less.style.display === "none") {
    less.style.display = "inline";
    toggle.innerHTML = "Читать весь отзыв <span class=\"icon-more\">></span>";
    more.style.display = "none";
  } else {
    less.style.display = "none";
    toggle.innerHTML = "Меньше <span class=\"icon-less\">></span>";
    more.style.display = "inline";
  }
}
function moreLessToggle4() {
  var less = document.querySelector('#less4');
  var more = document.querySelector("#more4");
  var toggle = document.querySelector("#more-less-toggle4");

  if (less.style.display === "none") {
    less.style.display = "inline";
    toggle.innerHTML = "Читать весь отзыв <span class=\"icon-more\">></span>";
    more.style.display = "none";
  } else {
    less.style.display = "none";
    toggle.innerHTML = "Меньше <span class=\"icon-less\">></span>";
    more.style.display = "inline";
  }
}