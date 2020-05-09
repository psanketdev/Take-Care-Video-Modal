
window.onload = function () {
//for hamburger
var burger = document.querySelector('.burger');
var navLink = document.querySelector('.nav-links');
burger.addEventListener('click', function(){
    navLink.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
    
});


// video modal using javascript
    var modal = document.querySelector('.lightbox-opened');
    var videoThumbnail = document.querySelectorAll('.video figure');
    var thumbnailArray = Array.from(videoThumbnail);

    thumbnailArray.forEach(function (element) {
        element.addEventListener('click', openModal);
    });

    modal.addEventListener('click', closeModal);
    document.querySelector('body').addEventListener('keyup', closeVideo);

    // Function to open modal
    function openModal(e) {
        e.preventDefault();
        var currentVideo = this.nextElementSibling.src;
        modal.children[0].src = currentVideo;
        modal.classList.add("activeVideo");
        document.querySelector('html').classList.add('no-scroll');
    };

    // Function to close modal
    function closeModal(e) {
        e.preventDefault();
        var playedVideo = document.querySelector('.lightbox-opened .currentVideo');
        if (e.target != playedVideo) {
            modal.classList.remove("activeVideo");
            document.querySelector('html').classList.remove('no-scroll');
        }
    };

    function closeVideo(e) {
		e.preventDefault();
		if(e.which === 27) {
			modal.classList.remove("activeVideo");
			document.querySelector('html').classList.remove('no-scroll');
		}
    };

}
    
// by using jquery slick slider
$(document).ready(function () {
    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
})
