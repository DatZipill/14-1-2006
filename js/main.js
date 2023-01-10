const html_btn_no = document.getElementById("answer-no");
html_btn_no.addEventListener("mouseover", moveHover);
const html_btn_yes = document.getElementById("answer-yes");
html_btn_yes.addEventListener("click", answer_yes_clicked);
var catsound = document.getElementById("catsound")

var w = window.innerWidth;
var h = window.innerHeight;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function moveHover() {
  const i = Math.floor(getRndInteger(html_btn_no.offsetWidth ,w)-html_btn_no.offsetWidth);
  const j = Math.floor(getRndInteger(html_btn_no.offsetHeight ,h)-html_btn_no.offsetHeight);

  html_btn_no.style.left = i+"px"
  html_btn_no.style.top = j+"px"
  html_btn_no.style.position = "absolute"

  html_btn_yes.textContent = "Đồng ý đi nè!"

  catsound.play()
}

function answer_yes_clicked() {
  const open_web_timeout = setTimeout(open_web, 1500);
  html_btn_yes.textContent = "Ib luôn ika"
}

function open_web() {
  window.open("https://www.messenger.com/t/100023643200209")  
}

