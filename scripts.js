// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelectorAll('[role="banner"]');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function logo() {
var img = document.createElement("img");
img.src = "zen_logo.png";
var src = document.querySelectorAll('[role="banner"]');
src.appendChild(img);
}