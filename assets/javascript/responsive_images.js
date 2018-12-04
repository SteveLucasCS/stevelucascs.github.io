/********************************************************************************
 * @author Steve Lucas
 * @version 12/3/18
 * Sets image sources on the page based on viewport size
 *******************************************************************************/
const numImages = 4;
const carouselImgArray = $(".unearth-img");
const mobileImgUrls = [
  "assets/images/unearth/mobile/index.jpg",
  "assets/images/unearth/mobile/results.jpg",
  "assets/images/unearth/mobile/nearby.jpg",
  "assets/images/unearth/mobile/about.jpg"
];

const wideImgUrls = [
  "assets/images/unearth/wide/index.jpg",
  "assets/images/unearth/wide/results.jpg",
  "assets/images/unearth/wide/nearby.jpg",
  "assets/images/unearth/wide/about.jpg"
];

/** represents the current display breakpoitn */
var isMobile = true;
$(window).width() < 660 ? isMobile = true : isMobile = false;

function setCarouselImages() {
  if (isMobile) {
    for (var i = 0; i < numImages; i++) {
      $(carouselImgArray[i]).attr("src", mobileImgUrls[i]);
    }
  } else {
    //initialize imgArray with using this naming convention: 'background#.jpg'
    imgUrlArray = [];
    for (var i = 0; i < numImages; i++) {
      $(carouselImgArray[i]).attr("src", wideImgUrls[i]);
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
      setCarouselImages();
    }
    if ($(window).width() >= 660 && isMobile === true) {
      isMobile = false;
      setCarouselImages();
    }
  });
});