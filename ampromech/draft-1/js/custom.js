function showMoreAbout() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("ReadMoreButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function showProject(x) {
  var project0 = document.getElementById("project0");
  var project1 = document.getElementById("project1");
  var project2 = document.getElementById("project2");
  var project3 = document.getElementById("project3");
  var project4 = document.getElementById("project4");
  var project5 = document.getElementById("project5");

  if (x === 1) {
    if (project1.style.display === "none") {
      project0.style.display = "none";
      project1.style.display = "block";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    } else {
      project0.style.display = "block";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    }
  } 
  else if (x === 2) {
    if (project2.style.display === "none") {
      project0.style.display = "none";
      project1.style.display = "none";
      project2.style.display = "block";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    } else {
      project0.style.display = "block";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    }
  }
  else if (x === 3) {
    if (project3.style.display === "none") {
      project0.style.display = "none";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "block";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    } else {
      project0.style.display = "block";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    }
  } 
  else if (x === 4) {
    if (project4.style.display === "none") {
      project0.style.display = "none";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "block";
      project5.style.display = "none";
      window.location='#projects';
    } else {
      project0.style.display = "block";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    }
  } 
  else if (x === 5) {
    if (project5.style.display === "none") {
      project0.style.display = "none";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "block";
      window.location='#projects';
    } else {
      project0.style.display = "block";
      project1.style.display = "none";
      project2.style.display = "none";
      project3.style.display = "none";
      project4.style.display = "none";
      project5.style.display = "none";
      window.location='#projects';
    }
  }
}

function showPeople(x) {
  var people0 = document.getElementById("people0");
  var people1 = document.getElementById("people1");
  var people2 = document.getElementById("people2");
  var people3 = document.getElementById("people3");
  var people4 = document.getElementById("people4");
  var people5 = document.getElementById("people5");

  if (x === 1) {
    if (people1.style.display === "none") {
      people0.style.display = "none";
      people1.style.display = "block";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    } else {
      people0.style.display = "block";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    }
  } 
  else if (x === 2) {
    if (people2.style.display === "none") {
      people0.style.display = "none";
      people1.style.display = "none";
      people2.style.display = "block";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    } else {
      people0.style.display = "block";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    }
  }
  else if (x === 3) {
    if (people3.style.display === "none") {
      people0.style.display = "none";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "block";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    } else {
      people0.style.display = "block";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    }
  } 
  else if (x === 4) {
    if (people4.style.display === "none") {
      people0.style.display = "none";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "block";
      people5.style.display = "none";
      window.location='#our-people';
    } else {
      people0.style.display = "block";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    }
  } 
  else if (x === 5) {
    if (people5.style.display === "none") {
      people0.style.display = "none";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "block";
      window.location='#our-people';
    } else {
      people0.style.display = "block";
      people1.style.display = "none";
      people2.style.display = "none";
      people3.style.display = "none";
      people4.style.display = "none";
      people5.style.display = "none";
      window.location='#our-people';
    }
  }
}