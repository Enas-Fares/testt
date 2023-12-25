// Initialize and add the map
//function initMap() {
    // The location of istanbul
  //var istanbul = {lat: 41.015137, lng: 28.979530};
    // The map, centered at istanbul
   //var map = new google.maps.Map(
     //  document.querySelector(".map"), {zoom: 4, center: istanbul});
    // The marker, positioned at istanbul
   // var marker = new google.maps.Marker({position: istanbul, map: map});
 // } 


 // Smooth scrolling
 $("#navbar a, .btn").on("click", function(event) {
  
    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  // navbar Opacity
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });
  