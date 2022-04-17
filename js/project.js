/**
 * Author:    Sara Christensen, Arturo Rios, Rodrigo Diaz
 * Created:   4.15.2022
 **/

 function birthDate(){
   var image = document.getElementById("star");
   var month=document.getElementById("month").value;
   var day=document.getElementById("day").value;
   var starArray=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
   var url;
   var sign=[];
   if (month===""||day===""){
     alert("Enter the month and date to get your results!");
   }
   else{
   if( (month ==3 && 20<day < 22)||(month==4 && day<20) ){
   sign= starArray[0];
     url="../img/aries.png";
   }
   else if ( (month ==4 && 19 < day )||(month==5 && day<20) ){
   sign= starArray[1];
     url="../img/taurus.png";
   }
   else if ( (month ==5 && 20 < day )||(month==6 && day<21) ){
   sign= starArray[2];
     url="../img/gemini.png";
   }
   else if ( (month ==6 && 20 < day )||(month==7 && day<23) ){
   sign= starArray[3];
     url="../img/cancer.png";
   }
   else if ( (month ==7 && 22 < day )||(month==8 && day<23) ){
   sign= starArray[4];
     url="../img/Leo.png";
   }
   else if ( (month ==8 && 22 < day )||(month==9 && day<23) ){
   sign= starArray[5];
     url="../img/virgo.png";
   }
   else if ( (month ==9 && 22 < day )||(month==10 && day<23) ){
   sign= starArray[6];
     url="../img/libra.png";
   }
   else if ( (month ==10 && 22 < day )||(month==11 && day<22) ){
   sign= starArray[7];
     url="../img/scorpio.png";
   }
   else if ( (month ==11 && 21 < day )||(month==12 && day<22) ){
   sign= starArray[8];
     url="../img/Sagittarius.png";
   }
   else if ( (month ==12 && 21 < day )||(month==1 && day<20) ){
   sign= starArray[9];
     url="../img/Capricorn.png";
   }
   else if ( (month ==1 && 19 < day )||(month==2 && day<19) ){
   sign= starArray[10];
     url="../img/aquarius.png";
   }
   else if ( (month ==2 && 18 < day )||(month==3 && day<21) ){
   sign= starArray[11];
     url="../img/pisces.png";
   }

   document.getElementById("display").innerHTML= sign;
   image = url;
   document.getElementById("star").src = image;
 }
 }

 console.log(document.getElementById("button"));

// button click event
document.getElementById("button").onclick = function() {
  birthDate();
  console.log(birthDate());
};
