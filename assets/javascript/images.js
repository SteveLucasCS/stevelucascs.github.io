const targetArray = $(".res-img");
var isMobile = true;

$(window).width() < 660 ? isMobile = true : isMobile = false;

function setImages() {
  if (isMobile) {
    for (var i = 0; i < targetArray.length; i++) {
      $(targetArray[i]).attr("src", $(targetArray[i]).data("mobile"));
    }
  } else {
    for (var i = 0; i < targetArray.length; i++) {
      $(targetArray[i]).attr("src", $(targetArray[i]).data("wide"));
    }
  }
}

setImages();

//image set on window resize 
$(document).ready(function() {
  $(window).resize(function() {
    //if the viewport changes from mobile to large or visa versa, setImage()
    if ($(window).width() < 660 && isMobile === false) {
      isMobile = true;
      setImages();
    }
    if ($(window).width() >= 660 && isMobile === true) {
      isMobile = false;
      setImages();
    }
  });
});