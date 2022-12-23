//Nav bar hide when scroll down, show when scroll up
var lastScrollTop = 0; // This Varibale will store the top position
navbar = document.querySelector('nav'); // Get The NavBar
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    //scroll down remove nav
    navbar.style.top = '-80px';
  }

  else {
    //scroll up add nav back
    navbar.style.top = '0';
  }

  lastScrollTop = (scrollTop <= 0) ? 0 : scrollTop; //New Position Stored
});

//fb Reviews
const revSec = document.querySelector('#carouselReviews div');//selects the "carousel inner div to be append to"
async function getFbReviews() {
  //takes data from json file (all the reviews)
  const reviewData = await fetch("public/json/reviews.json").then(response => {
    return response.json(); 
  })
  for (const review of reviewData.data) {
  const revDiv = document.createElement('div'); // create div for carousel-item
  const revP = document.createElement('p'); // create paragraph tag for review text
  revP.classList.add('d-block','w-100');
  revDiv.classList.add('carousel-item', 'revTrans');
  revDiv.setAttribute('data-bs-interval', '8500');
  revP.innerText = review.review_text;
  revSec.append(revDiv);
  revDiv.append(revP);

    //add 5 stars to every review
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('i');
    star.classList.add('bi', 'bi-star-fill', 'starRate');
    star.innerText = " ";
    revDiv.append(star);
  } 
}
}


//work equipment carousel
function equipCarousel() {
  const equipSec = document.querySelector('#carousel div');//selects the "carousel inner div to be append to"
  for (let i = 2; i <= 5; i++) {
    const equipDiv = document.createElement('div'); // create div for carousel-item
    const equipImg = document.createElement('img'); // create img tag for equipment imgs

    equipDiv.classList.add('carousel-item');
    equipImg.classList.add('d-block', 'w-100');
    equipImg.src = `public/img/equip${i}.jpg`;
    equipImg.alt = `Work Equipment pic:${i}`;

    equipSec.append(equipDiv);
    equipDiv.append(equipImg);

  }
}
//const rand = Math.floor(Math.random() * (reviewData.length- 1)) + 1;

//gallery photos
function populateGal(start = 1,stop = 20) {
  const galSec = document.querySelector('#galleryPage div.row');

  for (let i = stop; i >= start; i--) {
    const galDiv = document.createElement('div');
    const galA = document.createElement('a');
    const galImg = document.createElement('img');

    galDiv.classList.add('col-xl-3', 'col-md-4', 'col-sm-6', 'col-12');
    galDiv.setAttribute('tabindex', '0');
    galA.classList.add('d-block', 'mb-4', 'h-100');
    galA.setAttribute('data-bs-toggle', 'modal');
    galA.setAttribute('data-bs-target', '#galModal');
    galImg.classList.add('img-fluid', 'img-thumbnail', 'forceHeight', 'imgEffect')
    galImg.src = `public/img/imgGal/medsTree${i}.jpg`;
    galImg.alt = `Gallery image: ${i}`;
    galSec.append(galDiv);
    galDiv.append(galA);
    galA.append(galImg);
  }

  //makes images click to full screen
const imgs = document.querySelectorAll('#galleryPage img');
const fullPage = document.querySelector('#modalPic');
imgs.forEach(img => {
  img.addEventListener('click', function () {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
  });
});
}

//remove gallery photos
function removeGal(){
  const galSec = document.querySelector('#galleryPage div.row');
  const galDiv = document.querySelectorAll('#galleryPage div.row div');
  galDiv.forEach(div => {
    galSec.removeChild(div);
  }); 
}

//gallery pagination or Next and previous gallery page
function GalNav() {
  const galNavLi = document.querySelectorAll('#galleryPage li');
 
  galNavLi.forEach(li => {
    li.addEventListener('click', function () {
      if (li.className !== 'page-item active') {
        if (li == galNavLi[0]) {
          galNavLi[1].classList.remove('active');
          galNavLi[0].classList.add('active');
          removeGal();
          populateGal(1, 20);
          window.scrollTo(0, 0);
          
        }
        else if (li == galNavLi[1]) {
          galNavLi[0].classList.remove('active');
          galNavLi[1].classList.add('active');
          removeGal();
          populateGal(21, 40);
          window.scrollTo(0, 0);

        }
      }
      else {

      }
    });
  });
}
  
//sets phone number to dash style (ex: 999-999-9999)
function phoneNumber() {
  var tele = document.querySelector('#phoneNumber');

  tele.addEventListener('keyup', function (e) {
    if (event.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)) {
      tele.value += '-';
    }
  });
}
