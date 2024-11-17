// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     speed: 1000,
//     autoplay: {
//       delay: 2000, // Adjust delay in milliseconds
//       reverseDirection: false, // Scroll right to left
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//      breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       480: {
//         slidesPerView: 1,
//       },
//       768: {
//           slidesPerView: 1,
//       },
//       1200: {
//         slidesPerView: 1,
//       },
//     },
//   });

//   var swiper = new Swiper(".mySwiper-new", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     speed: 1000,
//     autoplay: {
//       delay: 2000, // Adjust delay in milliseconds
//       reverseDirection: false, // Scroll right to left
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//      breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       480: {
//         slidesPerView: 1,
//       },
//       768: {
//           slidesPerView: 1,
//       },
//       1200: {
//         slidesPerView: 3,
//       },
//     },
//   });

//     var acc = document.getElementsByClassName("accordion");
//     var i;

//     for (i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         this.parentElement.classList.toggle("active");

//         var pannel = this.nextElementSibling;

//         if (pannel.style.display === "block") {
//           pannel.style.display = "none";
//         } else {
//           pannel.style.display = "block";
//         }
//       });
//     }
    
    
// const testimonials = document.querySelector('.testimonials');
// const testimonialWidth = document.querySelector('.testimonial_new').offsetWidth + 20; // Includes gap size
// let currentIndex = 0;

//   function autoplayCarousel() {
//     currentIndex++;
//     testimonials.style.transition = 'transform 0.5s ease-in-out';
//     testimonials.style.transform = `translateX(-${testimonialWidth * currentIndex}px)`;

//     // Reset to start when the last set of testimonials slides out
//     if (currentIndex >= testimonials.children.length / 2) {
//       setTimeout(() => {
//         testimonials.style.transition = 'none'; // Remove animation
//         testimonials.style.transform = 'translateX(0)';
//         currentIndex = 0;
//       }, 500); // Match transition duration
//     }
//   }

//   setInterval(autoplayCarousel, 6000); // Change every 4 seconds


// var navLinks = document.getElementById("navLinks");

// 	function showmenu(){
// 		navLinks.style.right = "0";
// 	}
// 	function hidemenu(){
// 		navLinks.style.right = "-200px"
// 	}

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrolltoTop');
    scroll.classList.toggle("active" , window.scrollY > 350)
})

function scrollToTop(){
    window.scrollTo({
        top:0,
        behaviour:'smooth'
    })
}

window.addEventListener('scroll' , function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
