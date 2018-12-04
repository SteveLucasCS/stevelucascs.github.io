$(".link").on("click", function(event) {
  event.preventDefault();
  var source = event.target;
  window.open($(source).data("link"),"_blank");
})