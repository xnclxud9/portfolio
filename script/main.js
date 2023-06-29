// 어바웃
let arch_con = document.querySelectorAll(".arch_con");
let arch_p = document.querySelectorAll(".arch_con div");
let skil = document.querySelectorAll(".skil li");
let skilText = document.querySelector(".arch .skil_t span");

// 어바웃 슬라이드
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 500,
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


// 프로젝트 주소 연결
const project = document.querySelectorAll('.unit');

project.forEach((item) => {
  item.addEventListener('click', () => {
    const link = item.dataset.id;
    location.href = `project.html?${link}`;
  });
});