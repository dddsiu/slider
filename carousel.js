function slideRight() {
  //console.log("scroll right clicked");
  //document.getElementById("carousel").scrollLeft += 20;
  document.getElementById(
    "carousel"
  ).scrollLeft += document.getElementsByClassName("box")[0].offsetWidth;
}
function slideLeft() {
  //document.getElementById("carousel").scrollLeft -= 20;
  document.getElementById(
    "carousel"
  ).scrollLeft -= document.getElementsByClassName("box")[0].offsetWidth;
}
/* debug tests for the functions slideRight() and slideLeft()

  console.log(document.getElementById("carousel"));
  console.log(document.getElementsByClassName("box"));
  console.log(document.getElementsByClassName("box")[0]);
  console.log(document.getElementsByClassName("box")[0].offsetWidth);

  */
