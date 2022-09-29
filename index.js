let icon = document.querySelector(".nav i");
let arrimg = Array.from(document.querySelectorAll(".num div"));
let arrinav = Array.from(document.querySelectorAll(".tavigech span"));
let one = document.querySelector(".one .left .busi");
let two = document.querySelector(".two .right .busi");
let three = document.querySelector(".three .box .busi");
let onediv = document.querySelector(".work .one");
let twodiv = document.querySelector(".work .two");
let threediv = document.querySelector(".work .three");
let num = 0;
let azer = num;
icon.onclick = () => {
  document.querySelector(".topmedia ul").style.display == "flex"
    ? (document.querySelector(".topmedia ul").style.display = "none")
    : (document.querySelector(".topmedia ul").style.display = "flex");
};
setInterval(() => {
  num++;
  arrimg[num].className = "active";
  arrimg[azer].className = "tem";
  arrinav[num].classList.add("one");
  arrinav[azer].classList.remove("one");
  azer = num;
  num == 2 ? (num = -1) : false;
}, 3000);
window.onscroll = function () {
  scrollY >= onediv.offsetTop - 150 ? (one.style.left = "40%") : false;
  scrollY >= twodiv.offsetTop - 150 ? (two.style.right = "40%") : false;
  scrollY >= threediv.offsetTop - 150 ? (three.style.left = "40%") : false;
};
