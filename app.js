// // start scroller

let ele = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  ele.style.width = `${(scrollTop / height) * 100}%`;
});

// end scroller


// start nav
let menu = document.querySelector(".menu");
let ul = document.querySelector(".landing nav ul");
let specail = document.querySelector(".specail");
let nav = document.querySelector("nav");

menu.onclick = function () {
  ul.classList.toggle("active");
  specail.classList.toggle("js-class");
};

let progress = document.querySelectorAll(".skill-progress");



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  if (this.scrollY > 100) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  //Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop < skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
}

