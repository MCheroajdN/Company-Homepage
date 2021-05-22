//function to open and close toggle menu for media query

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0"; //changing the right-value to make menu visible
}

function hideMenu() {
    navLinks.style.right = "-200px"; //changing right-value to close menu
}