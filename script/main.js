
// 어바웃
let arch_con = document.querySelectorAll('.arch_con');
let skil = document.querySelectorAll('.skil li');
let skilText = document.querySelector('.arch .skil_t span');

// 슬라이드
const swiper = new Swiper(".mySwiper", {
  slidesPerView : '1',
  spaceBetween : 100,
  loop : true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: { // 아치 내용 변경
    slideChange: function () {
      arch_con.forEach(function(item){
        item.classList.add('hidden');
      });
      arch_con[this.realIndex].classList.remove('hidden');
    }
  }
});

// 스킬 이름 변경
skil.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    skilText.innerHTML=this.dataset.skil;
  });
});



// 탑버튼
let t_btn = document.querySelector('.t_btn');

t_btn.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', ()=>{
  let ws = window.scrollY;
  // console.log(ws);
  if(ws>=800){
    t_btn.style.display='block';
  }else{
    t_btn.style.display='none';
  }
});

// 프로젝트 탭
let tab = document.querySelectorAll('#projects .category label');
let line = document.querySelector('#projects .line');
let unit = document.querySelectorAll('#project .unit');

// act 이동함수
function actStyle(num){
  let newLeft = tab[num].offsetLeft;
  let newWidth = tab[num].offsetWidth;
  line.style.left = newLeft + 'px';
  line.style.width = newWidth + 'px';
  tab.forEach(function(item){
    item.style.fontWeight='normal';
  });
  tab[num].style.fontWeight='bold';
}
actStyle(0);

tab.forEach(function(item,idx){
  item.addEventListener('click', function(){
    actStyle(idx);
  });
});