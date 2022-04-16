/**
 * Author:    Sara Christensen
 * Created:   4.15.2022
 **/

 function birthDate(){
   // var year=document.getElementById("year").value;
   var month=document.getElementById("month").value;
   var day=document.getElementById("day").value;
   var starArray=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
   // var numbers=[0,1,2,3,4,5,6,7,8,9,10,11];
   var url;
   console.log(url)
   // var element=document.getElementById("horoscope");
   var star=[];
   if (year===""||month===""||day===""){
     alert("The information is incomplete!");
   }
   else{
   // for (var i in numbers){
   // if(numbers[i]===year%12){
   //   animal=animals[i];
   //   degree=rotation[i];
   //   }
   // }
   if( (month ==3 && 20<day < 22)||(month==4 && day<20) ){
   star= starArray[0];
     url="../img/aries.png";
   }
   else if ( (month ==4 && 19 < day )||(month==5 && day<20) ){
   star= starArray[1];
     url="../img/taurus.png";
   }
   else if ( (month ==5 && 20 < day )||(month==6 && day<21) ){
   star= starArray[2];
     url="../img/gemini.png";
   }
   else if ( (month ==6 && 20 < day )||(month==7 && day<23) ){
   star= starArray[3];
     url="../img/cancer.png";
   }
   else if ( (month ==7 && 22 < day )||(month==8 && day<23) ){
   star= starArray[4];
     url="../img/leo.png";
   }
   else if ( (month ==8 && 22 < day )||(month==9 && day<23) ){
   star= starArray[5];
     url="../img/virgo.png";
   }
   else if ( (month ==9 && 22 < day )||(month==10 && day<23) ){
   star= starArray[6];
     url="../img/libra.png";
   }
   else if ( (month ==10 && 22 < day )||(month==11 && day<22) ){
   star= starArray[7];
     url="../img/scorpio.png";
   }
   else if ( (month ==11 && 21 < day )||(month==12 && day<22) ){
   star= starArray[8];
     url="../img/sagittarius.png";
   }
   else if ( (month ==12 && 21 < day )||(month==1 && day<20) ){
   star= starArray[9];
     url="../img/capricorn.png";
   }
   else if ( (month ==1 && 19 < day )||(month==2 && day<19) ){
   star= starArray[10];
     url="../img/aquarius.png";
   }
   else if ( (month ==2 && 18 < day )||(month==3 && day<21) ){
   star= starArray[11];
     url="../img/pisces.png";
   }

   document.getElementById("display").innerHTML= star;
   document.getElementById("zodiac").src=url;
 }
 }

 console.log(document.getElementById("submit"));

// button click event
document.getElementById("submit").onclick = function() {
  birthDate();
  console.log(birthDate());
};




// // Create a carousel of a curved path
// // https://stackoverflow.com/questions/27369383/curved-carousel-bezier-path
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
//
//   Carousel Controls
//  $(".left").click(function(){
//    $("#myCarousel").carousel("prev");
//  });
//  $(".right").click(function(){
//    $("#myCarousel").carousel("next");
//  });
// });
// // var mod = 0;
//
// function sortStar() {
// //   do a mod 12
//      var mod = date % 12;
// //   use conditional to define variable
// // for (let i = 0; i < 14; i++) {
// //   setTimeout(function () {mod++}, 6000);
//       if (mod == 0) {
//           starStr = "Aquarius";
//         } else if (mod == 1){
//           starStr = "Pisces";
//         } else if (mod == 2){
//           starStr = "Aries";
//         } else if (mod == 3){
//           starStr = "Taurus";
//         } else if (mod == 4){
//           starStr = "Gemini";
//         } else if (mod == 5){
//           starStr = "Cancer";
//         } else if (mod == 6){
//           starStr = "Leo";
//         } else if (mod == 7){
//           starStr = "Virgo";
//         } else if (mod == 8){
//           starStr = "Libra";
//         } else if (mod == 9){
//           starStr = "Scorpio";
//         } else if (mod == 10){
//           starStr = "Sagittarius";
//         } else if (mod == 11){
//           starStr = "Capricorn";
//         }
// //   return text
//         return starStr;
//         // return
//         // if (i == 13){
//         //   i = 0;
//         //   console.log(i);
//         // }
//     }
//
// // Three pure javascript functions to manipulate classes
// // from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
// // function hasClass(ele,cls) {
// //   return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
// // }
// // //
// // function addClass(ele,cls) {
// //   if (!hasClass(ele,cls)) ele.className += " "+cls;
// // }
// // //
// // function removeClass(ele,cls) {
// //   if (hasClass(ele,cls)) {
// //     var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
// //     ele.className=ele.className.replace(reg,' ');
// //   }
// // }
//
// //   Get input from user
//        $("#button").click(function(){
// //     put id input in html
//        var date = $("#input").val();
//        var star = sortStar(date);
//        console.log(star)
// //     put id output in html
//         $("#output").html(star);
// //     append paragraph to output
//         var newText = "Your Zodiac constellation is " + starStr;
//         document.getElementById("output").innerHTML = newText;
// })
//
// //   var outputArea = document.getElementById("output");
// //   outputArea.innerHTML = newText;
// //   removeClass(outputArea, "hidden");
// //   removeClass(document.getElementById("hidden");
// // })
// // var myInput = document.getElementById("input");
// // myInput.addEventListener("focus", function() {
// //   addClass(document.getElementById("output"), "hidden");
// //   addClass(document.getElementById("hidden");
// // });
//
//
//
// //< ---------------------------------------------------------------------------------------------- >
// // New code after talking with Wes
//
// //create and array the holds all the images
// //https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
//
// create and array the holds all the images
// //https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
//
// var starArray = [
//   {
//     title: "Aquarius",
//     url: "../img/aquarius.jpg"
//   },
//   {
//     title: "Pisces",
//     url: "../img/pisces.jpg",
//     location:"Right Ascension: 0.85 hours, Declination: 11.08 degrees, Best viewed: at 9 p.m. between Nov. 6 and Nov. 9.",
//     fact: "'The Hubble Space Telescope imaged a pair of bizarre galaxies, called Pisces A and Pisces B, in 2014. Two years later, researchers announced that data from those observations showed the dwarf galaxies used to be by themselves, but over time they moved to a nearby group of galaxies — a process that accelerated star formation.'",
//     myth: "'The fish themselves are apparently the Greek goddess Aphrodite and her son, Eros, who turned into fish and jumped into the Euphrates River to evade the fiery breath of the monster Typhon, 'the most awful monster the world had ever seen,' according to Ridpath.'"
//   },
//   {
//     title: "Aries",
//     url: "../img/aries.jpg"
//   },
//   {
//     title: "Taurus",
//     url: "../img/taurus.jpg"
//   },
//   {
//     title: "Gemini",
//     url: "../img/gemini.jpg",
//     location: "By April and May, the constellation can be seen soon after sunset in the west. Right ascension: 7 hours, Declination: 20 degrees.",
//     fact: "'Gemini is the radiant point for a meteor shower known as the Geminids, which happen every year around mid-December.'",
//     myth: "'The two brightest stars in the constellation, also named after Greek mythology's Castor and Pollux, represent the heads of the twins, while fainter stars outline the pair's bodies.'"
//   },
//   {
//     title: "Cancer",
//     url: "../img/cancer.jpg"
//   },
//   {
//     title: "Leo",
//     url: "../img/leo.jpg"
//   },
//   {
//     title: "Virgo",
//     url: "../img/virgo.jpg",
//     location: "Right Ascension: 13 hours, Declination: 0 degrees, Best seen in May at 9 p.m.",
//     fact:"The pink planet GJ 504b, which at the time of the announcement in 2013 was the smallest planet ever photographed around a sun-like star. However, the planet itself is still relatively large, at four times the mass of Jupiter.",
//     myth:"According to Greek mythology, the earth experienced eternal spring until the god of the underworld abducted the spring maiden Persephone."
//   },
//   {
//     title: "Libra",
//     url: "../img/libra.jpg"
//   },
//   {
//     title: "Scorpio",
//     url: "../img/scorpio.jpg"
//   },
//   {
//     title: "Sagittarius",
//     url: "../img/sagittarius.jpg"
//   },
//   {
//     title: "Capricorn",
//     url: "../img/capricorn.jpg"
//   }
// ]
//
//
//
// // Sort function from https://www.geeksforgeeks.org/program-display-astrological-sign-zodiac-sign-given-date-birth/
// // JavaScript program to display astrological sign
// // or Zodiac sign for given date of birth
//
// // Function to calculate sum
// // digits of n
// function zodiac_sign(day, month)	{
// 		let astro_sign="";
//
// 		// checks month and date within the
// 		// valid range of a specified zodiac
// 		if (month == "december"){
//
// 			if (day < 22)
// 			astro_sign = [10];
// 			else
// 			astro_sign = [11];
// 		}
//
// 		else if (month == "january"){
// 			if (day < 20)
// 			astro_sign =  [11];
// 			else
// 			astro_sign = [0];
// 		}
//
// 		else if (month == "february"){
// 			if (day < 19)
// 			astro_sign = [0];
// 			else
// 			astro_sign = [1];
// 		}
//
// 		else if(month == "march"){
// 			if (day < 21)
// 			astro_sign =  [1];
// 			else
// 			astro_sign =  [2];
// 		}
// 		else if (month == "april"){
// 			if (day < 20)
// 			astro_sign = [2];
// 			else
// 			astro_sign = [3];
// 		}
//
// 		else if (month == "may"){
// 			if (day < 21)
// 			astro_sign = [3];
// 			else
// 			astro_sign = [4];
// 		}
//
// 		else if( month == "june"){
// 			if (day < 21)
// 			astro_sign = [4];
// 			else
// 			astro_sign = [5];
// 		}
//
// 		else if (month == "july"){
// 			if (day < 23)
// 			astro_sign = [5];
// 			else
// 			astro_sign = [6];
// 		}
//
// 		else if( month == "august"){
// 			if (day < 23)
// 			astro_sign =  [6];
// 			else
// 			astro_sign =  [7];
// 		}
//
// 		else if (month == "september"){
// 			if (day < 23)
// 			astro_sign = [7];
// 			else
// 			astro_sign = [8];
// 		}
//
// 		else if (month == "october"){
// 			if (day < 23)
// 			astro_sign = [8];
// 			else
// 			astro_sign = [9];
// 		}
//
// 		else if (month == "november"){
// 			if (day < 22)
// 			astro_sign =  [9];
// 			else
// 			astro_sign =  [10];
// 		}
//
// 		document.write(astro_sign);
// 	}
//
// // take a string and return a hashed checksum of the string
// // from c
// function checksum(s) {
//   var hash = 0, strlen = s.length, i, c;
//   if ( strlen === 0 ) {
//     return hash;
//   }
//   for ( i = 0; i < strlen; i++ ) {
//     c = s.charCodeAt( i );
//     hash = ((hash << 5) - hash) + c;
//     hash = hash & hash; // Convert to 32bit integer
//   }
//   return hash;
// };
//
// // Three pure javascript functions to manipulate classes
// // from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
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
//
// // Given a name, hash the string, and
// // return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// function zodiac_sign(day, month) {
//   checksumValue = checksum(str);
//   mod = Math.abs(checksumValue) % housesArray.length;
//   return starArray[ur];      // returns an object from the array
// }
//
// //   Get input from user
//  $("#button").click(function(){
// //     put id input in html
//  var date = $("#input").val();
//  var star = constellationName(date);
//  console.log(constellationName);
// //     put id output in html
//   $("#output").html("<img src=" + starArray.url + ">");
// //     append paragraph to output
//   var newText = "Your Zodiac constellation is " + starArray.url;
//   document.getElementById("output").innerHTML = newText;
// })
//
// //Wes's code from Lab 13
//   var newText = "<h2>" + starArray.title + "</h2>" +
//           "<p>" + starArray.url + "</p>";
//   var outputArea = document.getElementById("output");
//   outputArea.innerHTML = newText;
//   removeClass(outputArea, "hidden");
//   removeClass(document.getElementById("hidden"));
//
//   var myInput = document.getElementById("input");
//   myInput.addEventListener("focus", function() {
//   addClass(document.getElementById("output"), "hidden");
//   addClass(document.getElementById("hidden"));
// });
// =======
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
//
//   //Carousel Controls
//  $(".left").click(function(){
//    $("#myCarousel").carousel("prev");
//  });
//  $(".right").click(function(){
//    $("#myCarousel").carousel("next");
//  });
// });
//
// //   Get input from user
//        $("#button").click(function(){
// //     put id input in html
//        var date = $("#input").val();
//        var star = sortStar(date);
//        console.log(star)
// //     put id output in html
//         $("#output").html(star);
// //     append paragraph to output
//         var newText = "Your Zodiac constellation is " + starStr;
//         document.getElementById("output").innerHTML = newText;
// })
//
// //< ---------------------------------------------------------------------------------------------- >
// // New code after talking with Wes
//
// //create and array the holds all the images
// //https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
//
// //create and array the holds all the images
// //https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
//
// var starArray = [
//   {
//     title: "Aquarius",
//     url: "../img/aquarius.png"
//   },
//   {
//     title: "Pisces",
//     url: "../img/pisces.png",
//     location:"Right Ascension: 0.85 hours, Declination: 11.08 degrees, Best viewed: at 9 p.m. between Nov. 6 and Nov. 9.",
//     fact: "'The Hubble Space Telescope imaged a pair of bizarre galaxies, called Pisces A and Pisces B, in 2014. Two years later, researchers announced that data from those observations showed the dwarf galaxies used to be by themselves, but over time they moved to a nearby group of galaxies — a process that accelerated star formation.'",
//     myth: "'The fish themselves are apparently the Greek goddess Aphrodite and her son, Eros, who turned into fish and jumped into the Euphrates River to evade the fiery breath of the monster Typhon, 'the most awful monster the world had ever seen,' according to Ridpath.'"
//   },
//   {
//     title: "Aries",
//     url: "../img/aries.png"
//   },
//   {
//     title: "Taurus",
//     url: "../img/taurus.png"
//   },
//   {
//     title: "Gemini",
//     url: "../img/gemini.png",
//     location: "By April and May, the constellation can be seen soon after sunset in the west. Right ascension: 7 hours, Declination: 20 degrees.",
//     fact: "'Gemini is the radiant point for a meteor shower known as the Geminids, which happen every year around mid-December.'",
//     myth: "'The two brightest stars in the constellation, also named after Greek mythology's Castor and Pollux, represent the heads of the twins, while fainter stars outline the pair's bodies.'"
//   },
//   {
//     title: "Cancer",
//     url: "../img/cancer.png"
//   },
//   {
//     title: "Leo",
//     url: "../img/leo.png"
//   },
//   {
//     title: "Virgo",
//     url: "../img/virgo.png",
//     location: "Right Ascension: 13 hours, Declination: 0 degrees, Best seen in May at 9 p.m.",
//     fact:"The pink planet GJ 504b, which at the time of the announcement in 2013 was the smallest planet ever photographed around a sun-like star. However, the planet itself is still relatively large, at four times the mass of Jupiter.",
//     myth:"According to Greek mythology, the earth experienced eternal spring until the god of the underworld abducted the spring maiden Persephone."
//   },
//   {
//     title: "Libra",
//     url: "../img/libra.png"
//   },
//   {
//     title: "Scorpio",
//     url: "../img/scorpio.png"
//   },
//   {
//     title: "Sagittarius",
//     url: "../img/sagittarius.png"
//   },
//   {
//     title: "Capricorn",
//     url: "../img/capricorn.png"
//   }
// ]
//
//
//
// // Sort function from https://www.geeksforgeeks.org/program-display-astrological-sign-zodiac-sign-given-date-birth/
// // JavaScript program to display astrological sign
// // or Zodiac sign for given date of birth
//
// // Function to calculate sum
// // digits of n
// function zodiac_sign(day, month)	{
// 		 let astro_sign=["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer","Leo","Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
// 		// checks month and date within the
// 		// valid range of a specified zodiac
// 		if (month == "december"){
//
// 			if (day < 22)
// 			astro_sign = [10];
// 			else
// 			astro_sign = [11];
// 		}
//
// 		else if (month == "january"){
// 			if (day < 20)
// 			astro_sign =  [11];
// 			else
// 			astro_sign = [0];
// 		}
//
// 		else if (month == "february"){
// 			if (day < 19)
// 			astro_sign = [0];
// 			else
// 			astro_sign = [1];
// 		}
//
// 		else if(month == "march"){
// 			if (day < 21)
// 			astro_sign =  [1];
// 			else
// 			astro_sign =  [2];
// 		}
// 		else if (month == "april"){
// 			if (day < 20)
// 			astro_sign = [2];
// 			else
// 			astro_sign = [3];
// 		}
//
// 		else if (month == "may"){
// 			if (day < 21)
// 			astro_sign = [3];
// 			else
// 			astro_sign = [4];
// 		}
//
// 		else if( month == "june"){
// 			if (day < 21)
// 			astro_sign = [4];
// 			else
// 			astro_sign = [5];
// 		}
//
// 		else if (month == "july"){
// 			if (day < 23)
// 			astro_sign = [5];
// 			else
// 			astro_sign = [6];
// 		}
//
// 		else if( month == "august"){
// 			if (day < 23)
// 			astro_sign =  [6];
// 			else
// 			astro_sign =  [7];
// 		}
//
// 		else if (month == "september"){
// 			if (day < 23)
// 			astro_sign = [7];
// 			else
// 			astro_sign = [8];
// 		}
//
// 		else if (month == "october"){
// 			if (day < 23)
// 			astro_sign = [8];
// 			else
// 			astro_sign = [9];
// 		}
//
// 		else if (month == "november"){
// 			if (day < 22)
// 			astro_sign =  [9];
// 			else
// 			astro_sign =  [10];
// 		}
//
// 		document.write(astro_sign);
// 	}
//
// // take a string and return a hashed checksum of the string
// // from c
//
// // Three pure javascript functions to manipulate classes
// // from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
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
//
// // Given a name, hash the string, and
// // return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//
// //   Get input from user
//  $("#button").click(function(){
// //     put id input in html
//  var date = $("#input").val();
//  var star = constellationName(date);
//  console.log(constellationName);
// //     put id output in html
//   $("#output").html("<img src=" + starArray.url + ">");
// //     append paragraph to output
//   var newText = "Your Zodiac constellation is " + starArray.url;
//   document.getElementById("output").innerHTML = newText;
// })
//
// //Wes's code from Lab 13
//   var newText = "<h2>" + starArray.title + "</h2>" +
//           "<p>" + starArray.url + "</p>";
//   var outputArea = document.getElementById("output");
//   outputArea.innerHTML = newText;
//   removeClass(outputArea, "hidden");
//   removeClass(document.getElementById("hidden"));
//
//   var myInput = document.getElementById("input");
//   myInput.addEventListener("focus", function() {
//   addClass(document.getElementById("output"), "hidden");
//   addClass(document.getElementById("hidden"));
// });
