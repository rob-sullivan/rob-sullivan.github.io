//show and hide the mobile menu button. Also add responsive class to the class field to show up mobile menu.
function toggleMobileNav() {
    var x = document.getElementById("nav-menu");
    if (x.className === "u-pull-right menu") {
      x.className = "menu";
    } else {
      x.className = "u-pull-right menu";
    }
  }