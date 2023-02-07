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
 var num = document.getElementById("n1").value;
 var roman = "";
 var romanNumeral = [
 ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
 ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
 ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
 ["", "M", "MM", "MMM", "MMMM"]
 ];
 
 if (num === 0) {
 return "N/A";
 }
 
 if (num >= 4000) {
 alert("Input number must be less than 4000");
 }
 
 var digits = num.toString().split("").reverse();
 
 for (var i = 0; i < digits.length; i++) {
 roman = romanNumeral[i][parseInt(digits[i])] + roman;
 }
 
 document.getElementById("r1").value = roman;
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
 