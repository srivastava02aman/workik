var myTopnav = document.getElementById("myTopnav");

function myFunction() {
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}
