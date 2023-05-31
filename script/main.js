// 스크롤 이벤트
AOS.init();

// 어바웃
let arch_con = document.querySelectorAll(".arch_con");
let arch_p = document.querySelectorAll(".arch_con div");
let skil = document.querySelectorAll(".skil li");
let skilText = document.querySelector(".arch .skil_t span");

// 슬라이드
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 60,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: { // 아치 내용 변경
    slideChange: function () {
      arch_con.forEach((item) => {
        item.classList.add("hidden");
      });
      arch_con[this.realIndex].classList.remove("hidden");
    }
  }
});

// 스킬 이름 변경
skil.forEach((item, idx) => {
  item.addEventListener("mouseenter", function () {
    skilText.innerHTML = this.dataset.skil;
    arch_p.forEach((item) => {
      item.style.display = "none"
    });
    arch_p[idx].style.display = "block"
  });
});



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


// 프로젝트 탭메뉴
let tab = document.querySelectorAll("#projects .category label");
let line = document.querySelector("#projects .line");
let unit = document.querySelectorAll("#project .unit");

// act 스타일 변경 함수
const actStyle = (num) => {
  let newLeft = tab[num].offsetLeft;
  let newWidth = tab[num].offsetWidth;
  line.style.left = newLeft + "px";
  line.style.width = newWidth + "px";
  tab.forEach((item) => {
    item.style.fontWeight = "normal";
  });
  tab[num].style.fontWeight = "bold";
}
actStyle(0);

tab.forEach((item, idx) => {
  item.addEventListener("click", () => {
    actStyle(idx);
  });
});