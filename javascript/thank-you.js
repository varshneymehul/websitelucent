setTimeout(function(){
  document.getElementsByClassName('section-2')["0"].click();
  var outForDeliveryText = document.querySelectorAll(".out-for-delivery-text")["0"];
  var outForDeliveryImg = document.querySelectorAll(".out-for-delivery-img")["0"];
  outForDeliveryText.style.display = "block";
  outForDeliveryText.classList.add("animated", "fadeInUp");
  outForDeliveryImg.style.display = "block";
  outForDeliveryImg.classList.add("animated", "slideInRight");
}, 7000);

setTimeout(function(){
  document.getElementsByClassName('section-3')["0"].click();
  var deliveredText = document.querySelectorAll(".delivered-text")["0"];
  var deliveredImg = document.querySelectorAll(".delivered-img")["0"];
  deliveredText.style.display = "block";
  deliveredText.classList.add("animated", "fadeInUp");
  deliveredImg.style.display = "block";
  deliveredImg.classList.add("animated", "slideInRight");
}, 14000);
