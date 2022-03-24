// Create a carousel of a curved path
// https://stackoverflow.com/questions/27369383/curved-carousel-bezier-path

// Create a function that gets inpput from the user and sorts them to a constellation
function sortStar
//   get length of name
      var len = name.length;
//   do a mod 12
      var mod = len % 12;
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

//   Get input from user
       $("#button").click(function(){
//     put id input in html
       var date = $("#input").val();
       var star = sortStar(date);
       console.log(star)
//     put id output in html
        $("#output").html(star);
//     append paragraph to output
        var newText = "Your Zodiac constellation is " + ---;
        document.getElementById("output").innerHTML = newText;
})
})
