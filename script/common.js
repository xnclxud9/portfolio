// 스크롤 이벤트
AOS.init();

// 탑버튼
let t_btn = document.querySelector(".t_btn");

t_btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  let ws = window.scrollY;
  // console.log(ws);
  if (ws >= 800) {
    t_btn.style.display = "block";
  } else {
    t_btn.style.display = "none";
  }
});
