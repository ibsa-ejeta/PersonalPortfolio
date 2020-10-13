function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navigation-bar") {
    x.className += " responsive";
  } else {
    x.className = "navigation-bar";
  }
}