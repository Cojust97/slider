const cards = [
    {
        img: 'img/1.jpg',
        text: 'Rostov-on-Don \n LCD admiral',
        text2: '81 m2',
        text3: '3.5 months',
        tetx4: 'Upon request',
        title: 'ROSTOV-ON-DON, ADMIRAL'
    },
    {
        img: 'img/2.jpg',
        text: 'Sochi Thieves',
        text2: '105 m2',
        text3: '4 months',
        text4: 'Upon request',
        title: 'SOCHI THIEVES'
    },
    {
        img: 'img/3.jpg',
        text: 'Rostov-on-Don \n Patriotic',
        text2: '93 m2',
        text3: '3 months',
        text4: 'Upon request',
        title: 'ROSTOV-ON-DON PATRIOTIC'
    }
];

let currentIndex = 0;

const img = document.querySelector('.image');
const t1 = document.querySelector('.text-1');
const t2 = document.querySelector('.text-2');
const t3 = document.querySelector('.text-3');
const t4 = document.querySelector('.text-4');
const titleText = document.querySelector('.title');

const setCards = () => {
    img.style.backgroundImage = `url(${cards[currentIndex].img})`;
    t1.innerText = cards[currentIndex].text;
    t2.innerText = cards[currentIndex].text2;
    t3.innerText = cards[currentIndex].text3;
    t4.innerText = cards[currentIndex].text4;
  };



function next() {
  if (currentIndex === cards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setCards();
  addStyle();
};

function prev() {
  if (currentIndex === 0) {
    currentIndex = cards.length - 1;
  } else {
    currentIndex -= 1;
  }
  setCards();
  addStyle();
};


const dotsParent = document.querySelector('.dots');
const titleParent = document.querySelector('.titles');

function initSlideElements() {
  cards.forEach((card, index) => {
    dotsParent.innerHTML += `<div class="dot ${index === 0 ? 'active__dot' : ''}" data-index="${index}"></div>`;
    titleParent.innerHTML += `<div class="title ${index === 0 ? 'active__title' : ''}" data-index="${index}">${card.title}</div>`;
  })
};

document.addEventListener('click',function(e){
  if (e.target.classList.contains('dot')) {
    currentIndex = Number(e.target.getAttribute('data-index'));
    setCards();
    addStyle();
  }
});

document.addEventListener('click',function(e){
  if (e.target.classList.contains('title')) {
    currentIndex = Number(e.target.getAttribute('data-index'));
    setCards();
    addStyle();
  }
});

function addStyle() {
  document.querySelector('.dot.active__dot').classList.remove('active__dot');
  document.querySelector(`.dot[data-index="${currentIndex}"]`).classList.add('active__dot');
  document.querySelector('.title.active__title').classList.remove('active__title');
  document.querySelector(`.title[data-index="${currentIndex}"]`).classList.add('active__title');
  
};

const left = document.querySelector('.scrl-left');
const right = document.querySelector('.scrl-right');

left.addEventListener('click', prev);
right.addEventListener('click', next);

initSlideElements();