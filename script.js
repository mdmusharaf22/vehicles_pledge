var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true
});
var swiper2 = new Swiper(".featuresSwiper", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true
});

var swiper3 = new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

tippy('#newarrival01', {
    content: `
    <div class="newarrival_row">
    <div class="col">
    <div class="img_container">
    <img src="assets/img/newarrival/1_0.jpeg" alt="dress">
    </div>
    </div>
    <div class="col">
    <h4>Clara Top</h4>
    <p>$50.00</p>
    </div>
    </div>

    `,
    theme: 'custom',
    allowHTML: true,
    trigger: 'click'
});
tippy('#newarrival02', {
    content: `
    <div class="newarrival_row">
    <div class="col">
    <div class="img_container">
    <img src="assets/img/newarrival/2_0.jpeg" alt="dress">
    </div>
    </div>
    <div class="col">
    <h4>Jim Shirt</h4>
    <p>$80.00</p>
    </div>
    </div>

    `,
    theme: 'custom',
    allowHTML: true,
    trigger: 'click'
});
tippy('#newarrival03', {
    content: `
    <div class="newarrival_row">
    <div class="col">
    <div class="img_container">
    <img src="assets/img/newarrival/2_1.jpeg" alt="dress">
    </div>
    </div>
    <div class="col">
    <h4>Jim Pant</h4>
    <p>$100.00</p>
    </div>
    </div>

    `,
    theme: 'custom',
    allowHTML: true,
    trigger: 'click'
});

var swiper4 = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

