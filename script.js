function menu(){
 var x = document.getElementById("mi")
 x.style.display = "block"
 var y = document.getElementById("mo")
 y.style.display ="none"
 var z = document.getElementById("mc")
 z.style.display ="block"
 }
 function menuc() {
 
 var x = document.getElementById("mi")
 x.style.display = "none"
 var y = document.getElementById("mo")
 y.style.display ="block"
 var z = document.getElementById("mc")
 z.style.display ="none"
 }function convertToRoman() {
 const number = document.getElementById("n1").value;
 let romanNumeral = "";
 const romanNumerals = [
 "M",
 "CM",
 "D",
 "CD",
 "C",
 "XC",
 "L",
 "XL",
 "X",
 "IX",
 "V",
 "IV",
 "I"
 ];
 const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
 for (let i = 0; i < numbers.length; i++) {
 while (number >= numbers[i]) {
 romanNumeral += romanNumerals[i];
 number -= numbers[i];
 }
 }
 
 document.getElementById("r1").value = romanNumeral;
 }
 
 function convert2() {
 let roman = document.getElementById("r2").value;
 let result = 0;
 
 let romanNumeralMap = {
 'I': 1,
 'IV': 4,
 'V': 5,
 'IX': 9,
 'X': 10,
 'XL': 40,
 'L': 50,
 'XC': 90,
 'C': 100,
 'CD': 400,
 'D': 500,
 'CM': 900,
 'M': 1000
 };
 
 for (let i = 0; i < roman.length; i++) {
 let char = roman[i];
 let nextChar = roman[i + 1];
 let charValue = romanNumeralMap[char];
 let nextCharValue = romanNumeralMap[nextChar];
 
 if (nextCharValue > charValue) {
 result += nextCharValue - charValue;
 i++;
 } else {
 result += charValue;
 }
 }
 
 document.getElementById("n2").value = result;
 }
 