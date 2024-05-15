const itemsWhychoosee = document.querySelectorAll(
  ".why-choosee .why-choosee-item"
);

//Module Why choosee animation
if (itemsWhychoosee) {
  Array.from(itemsWhychoosee).forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        return true;
      }

      //Remove class item
      const activeItem = document.querySelector(
        ".why-choosee .why-choosee-item.active"
      );
      activeItem.classList.remove("active");
      item.classList.add("active");

      //Get class item change & current
      const currentImg = document.querySelector(
        ".why-choosee .why-choosee-banner-item.active"
      );

      const data = item.getAttribute("data-item");
      const changeImg = document.querySelector(
        `.why-choosee .why-choosee-banner-item[data-item="${data}"]`
      );
      const changeClass = changeImg.classList;

      //Swap class
      currentImg.setAttribute("class", changeClass);
      changeImg.setAttribute("class", "why-choosee-banner-item active");
    });
  });
}

const homeBanner =
  new Swiper(".home-banner .swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    watchOverflow: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.home-banner .swiper-button-next',
      prevEl: '.home-banner .swiper-button-prev',
    },
  }) || false;

const fellingsSwiper =
  new Swiper(".feelings .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    watchOverflow: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 16,
        grid: {
          fill: "columns",
          rows: 4,
        },
      },
      480: {
        slidesPerView: 2,
        grid: {
          fill: "rows",
          rows: 2,
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          fill: "rows",
          rows: 2,
        },
      },
    },
  }) || false;

const slideBlogs =
  new Swiper(".slide-blogs .swiper", {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 34,
    speed: 1000,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 16,
        grid: {
          fill: "columns",
          rows: 4,
        },
      },
      480: {
        slidesPerView: 2,
        grid: {
          fill: "rows",
          rows: 1,
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 34,
      },
    },
    navigation: {
      nextEl: ".slide-blogs .swiper-button-next",
      prevEl: ".slide-blogs .swiper-button-prev",
    },
  }) || false;

  const swiperListTeacher =
  new Swiper(".expert-list-teacher .swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    watchOverflow: true,
    allowTouchMove: false,
    // allowSlidePrev: false,
    navigation: {
      nextEl: '.expert-list-teacher .swiper-button-next',
      prevEl: '.expert-list-teacher .swiper-button-prev',
    },
  }) || false;

const modalImage = document.querySelector(
  ".archivement .modal-body .image img"
);
const modalName = document.querySelector(
  ".archivement .modal-body .content .name"
);
const modalSchool = document.querySelector(
  ".archivement .modal-body .content .school"
);
const archivementItems = document.querySelectorAll(
  ".archivement .archivement-item"
);

archivementItems.forEach((archivementItem) => {
  archivementItem.addEventListener("click", () => {
    let src = archivementItem.getAttribute("data-image");
    let name = archivementItem.getAttribute("data-name");
    let school = archivementItem.getAttribute("data-school");
    fillInfoModal(src, name, school);
  });
});

const fillInfoModal = (src, name, school) => {
  modalImage.setAttribute("src", `${src}`);
  modalName.innerText = `${name}`;
  modalSchool.innerText = `${school}`;
};


//Add tablist teacher 
document.addEventListener('DOMContentLoaded', () => {
  //active tablist teacher before active slide swiper
  swiperListTeacher.on('slideChangeTransitionEnd',  () => {
    //Hide tab old
    const oldTab = document.querySelector('.expert-list-teacher .swiper-slide:not(.swiper-slide-active) .expert-tabs .nav-link.active')

    const idOldTab = oldTab.getAttribute('id')
    const oldContent = document.querySelector(`.expert-list-teacher .expert-content .tab-pane[aria-labelledby='${idOldTab}']`)

    oldTab.classList.remove('active')
    oldContent.classList.remove('show', 'active')

    //Show tab new
    const newTab = document.querySelector('.expert-list-teacher .swiper-slide-active .expert-tabs .nav-link')
    const idNewTab = newTab.getAttribute('id')
    const newContent = document.querySelector(`.expert-list-teacher .expert-content .tab-pane[aria-labelledby='${idNewTab}']`)
    newTab.classList.add('active')
    newContent.classList.add('show', 'active')
  });
})

//Show bar when scroll page
const quickAccess = document.querySelector('.quick-accsess')
if(quickAccess) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 600) {
      quickAccess.classList.add('active')
      return
    }
    quickAccess.classList.remove('active')
  })
  
}


document.addEventListener('DOMContentLoaded', () => {
  //Show popup register form
  const modalPopupRegister = new bootstrap.Modal('.popup-form .modal', {
    keyboard: false
  })
  if(modalPopupRegister) {
    setTimeout(() => {
      modalPopupRegister.show(modalPopupRegister)
    }, 2000)
  }
})