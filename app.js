// // start scroller

let ele = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);

  ele.style.width = `${(scrollTop / height) * 100}%`;
});

// end scroller
// start scroll to up
let scrollW = document.querySelector(".scroll-to-up");
window.onscroll = function () {};


// start nav
let menu = document.querySelector(".menu");
let ul = document.querySelector(".landing nav ul");
let specail = document.querySelector(".specail");
let nav = document.querySelector("nav");

menu.onclick = function () {
  ul.classList.toggle("active");
  specail.classList.toggle("js-class");
};

window.onscroll = function () {
  
  if (this.scrollY > 85) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
  // scroll to up
  if (this.scrollY > 400) {
    scrollW.style.opacity = "1";
  } else {
    scrollW.style.opacity = "0";
  }

  // remove active class when click on link
  let li = document.querySelectorAll(".landing nav ul li");
  li.forEach((a) => {
    a.addEventListener("click", (e) => {
      ul.classList.remove("active");
      specail.classList.remove("js-class");
    });
  });
  //progress
  let progress = document.querySelectorAll(".skill-progress");
  if (this.scrollY >= 1200) {
    progress.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  } else if (this.scrollY < 1000) {
    progress.forEach((ele) => {
      ele.style.width = 0;
    });
  } else if (this.scrollY > 1500) {
    progress.forEach((ele) => {
      ele.style.width = 0;
    });
  }
};
