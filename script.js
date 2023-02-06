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
 }
 function convertToRoman() {
 var n1 = document.getElementById("n1")
 var num = document.getElementById("n1").value;
 if(num>5000) { paragraph = document.getElementById("r1");
 alert("Tge numner must be less than 5000")
 }
 else {
 var my = [];
 
 var M = Math.floor(num / 1000);
 for (i = 1; i <= M; i++) {
 my.push("M");
 }
 var D = Math.floor((num % 1000) / 500);
 for (i = 1; i <= D; i++) {
 my.push("D");
 }
 var C = Math.floor((num % 500) / 100);
 for (i = 1; i <= C; i++) {
 my.push("C");
 }
 var L = Math.floor((num % 100) / 50);
 for (i = 1; i <= L; i++) {
 my.push("L");
 }
 
 var X = Math.floor((num % 50) / 10);
 for (i = 1; i <= X; i++) {
 my.push("X");
 }
 
 var V = Math.floor((num % 10) / 5);
 for (i = 1; i <= V; i++) {
 my.push("V");
 }
 
 var I = num % 5;
 for (i = 1; i <= I; i++) {
 my.push("I");
 }
 
 
 for(i=0;i<my.length;i++) {
 
 
 deletefour(my,i,"I","V") ;
 deletefour(my,i,"X","L") ;
 deletefour(my,i,"C","D") ;
 
 deletefive(my,i,"V","I","X");
 deletefive(my,i,"L","X","C");
 deletefive(my,i,"D","C","M");
 
 }
 paragraph = document.getElementById("r1");
 paragraph.value = my.join('');
 
 } }
 
 function deletefour(arr,i,a,b) {
 
 if ((arr[i]==a)&&(arr[i+1]==a)&&(arr[i+2]==a)&&(arr[i+3]==a)) {
 arr[i+1]=b;
 arr[i+2]="";
 arr[i+3]="";
 
 
 }
 
 }
 
 function deletefive(arr,i,a,b,c) {
 
 if ((arr[i]==a)&&(arr[i+1]==b)&&(arr[i+2]==b)&&(arr[i+3]==b)&&(arr[i+4]==b)) {
 arr[i]=b;
 arr[i+1]=c;
 arr[i+2]="";
 arr[i+3]="";
 arr[i+4]="";
 
 
 
 }
 
 }