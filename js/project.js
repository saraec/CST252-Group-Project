// Create a carousel of a curved path
// https://stackoverflow.com/questions/27369383/curved-carousel-bezier-path
// $(document).ready(function(){
//   // Carousel
//   $("#myCarousel").carousel();
//
//   // Carousel Indicators
//   $(".item1").click(function(){
//     $("#myCarousel").carousel(0);
//   });
//   $(".item2").click(function(){
//     $("#myCarousel").carousel(1);
//   });
//   $(".item3").click(function(){
//     $("#myCarousel").carousel(2);
//   });
//   $(".item4").click(function(){
//     $("#myCarousel").carousel(3);
//  });

  // Carousel Controls
//  $(".left").click(function(){
//    $("#myCarousel").carousel("prev");
//  });
//  $(".right").click(function(){
//    $("#myCarousel").carousel("next");
//  });
//});

function sortStar() {
//   do a mod 12
      var mod = date % 12;
//   use conditional to define variable
      if (mod == 0) {
          starStr = "Aquarius";
        } else if (mod == 1){
          starStr = "Pisces";
        } else if (mod == 2){
          starStr = "Aries";
        } else if (mod == 3){
          starStr = "Taurus";
        } else if (mod == 4){
          starStr = "Gemini";
        } else if (mod == 5){
          starStr = "Cancer";
        } else if (mod == 6){
          starStr = "Leo";
        } else if (mod == 7){
          starStr = "Virgo";
        } else if (mod == 8){
          starStr = "Libra";
        } else if (mod == 9){
          starStr = "Scorpio";
        } else if (mod == 10){
          starStr = "Sagittarius";
        } else if (mod == 11){
          starStr = "Capricorn";
        }
//   return text
        return starStr;
    }

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
// function hasClass(ele,cls) {
//   return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
// }
// //
// function addClass(ele,cls) {
//   if (!hasClass(ele,cls)) ele.className += " "+cls;
// }
// //
// function removeClass(ele,cls) {
//   if (hasClass(ele,cls)) {
//     var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
//     ele.className=ele.className.replace(reg,' ');
//   }
// }

//   Get input from user
       $("#button").click(function(){
//     put id input in html
       var date = $("#input").val();
       var star = sortStar(date);
       console.log(star)
//     put id output in html
        $("#output").html(star);
//     append paragraph to output
        var newText = "Your Zodiac constellation is " + starStr;
        document.getElementById("output").innerHTML = newText;
})

//   var outputArea = document.getElementById("output");
//   outputArea.innerHTML = newText;
//   removeClass(outputArea, "hidden");
//   removeClass(document.getElementById("hidden");
// })
// var myInput = document.getElementById("input");
// myInput.addEventListener("focus", function() {
//   addClass(document.getElementById("output"), "hidden");
//   addClass(document.getElementById("hidden");
// });
