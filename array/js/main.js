
let studentArray=["leonardo", "Raphael", "Michalangelo"];
	console.log("the first student name is:" + studentArray[0]);





var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";

text += "</ul>";

document.getElementById("demo").innerHTML = text;



let numberArray =[10,10,10];
let average;
let sum= 0;
let i;


for (i=0; i < numberArray.lenght; i++){

sum +=numberArray[i];

}

average = sum / numberArray.length;


function showArray() {
	document.getElementById("show").innerHTML=numberArray
} function Average(){
	document.getElementById('here').innerHTML=average

}



function check(){
	let num1 =parsInt(document.getElementById("number1").value);
	let num2 =parsInt(document.getElementById("number2").value);
	let num3 =parsInt(document.getElementById("number3").value);



	let sumNum=parsInt(num1+ num2 + num3);
	let averageNum=parsInt((num1 + num2 +num3)/3);
	if (document.getElementById('sum').checked){
		document.getElementById('result').innerHTML =sumNum;

	}else if(document.getElementById('averageNum').checked){
	document.getElementById('result').innerHTML =averageNum;	
	}else 
	{document.getElementById('result').innerHTML ="select someting"

}


function k1(){
	let cm = parseInt(document.getElementById("CM").value);
	let Inch = cm *0.393701;
	document.getElementById("result").innerHTML =Inch;
}