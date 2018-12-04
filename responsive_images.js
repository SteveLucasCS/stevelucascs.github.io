/********************************************************************************
 * @author Steve Lucas
 * @version 12/3/18
 * Sets image sources on the page based on viewport size
 *******************************************************************************/



/** represents the current display breakpoitn */
var isMobile = false;
const carouselImgArray = $(".carousel-item");
const mobileImgUrls = [
  "../images/unearth."
]
const wideImgUrls 
$(window).width < 660 ? isMobile = true : isMobile = false;

function setCarouselImages() {
  if (isMobile) {
    imgUrlArray = [];
    for (var i = 0; i < numImages; i++) {
      $(".")
    }
  } else {
    //initialize imgArray with using this naming convention: 'background#.jpg'
    imgUrlArray = [];
    for (var i = 0; i < numImages; i++) {
      imgUrlArray.push(`url('assets/images/wide${i}.jpg')`);
    }
  }
}

//initial image is set
setCarouselImages();

//image set on window resize 
$(document).ready(function() {
  $(window).resize(function() {
    //if the viewport changes from mobile to large or visa versa, setImage()
    if ($(window).width() < 660 && isMobile === false) {
      isMobile = true;
      console.log("is mobile: " + isMobile);
      setImages();
    }
    if ($(window).width() >= 660 && isMobile === true) {
      isMobile = false;
      setImages();
    }
  });
});