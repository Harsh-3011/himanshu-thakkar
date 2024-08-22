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