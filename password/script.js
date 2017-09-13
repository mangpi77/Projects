 function onload() { 
       var input = document.getElementById("input");
       }
function test(){
var checked1 = document.getElementById ("checkbox1").checked = false;
var checked2 = document.getElementById ("checkbox2");
var checked3 = document.getElementById ("checkbox3");
var checked4 = document.getElementById ("checkbox4");
var number = input.value;

if (number >32){
alert("Password is too long!,Please choose the length between 1-32");
}

else if (number <=0) {
alert ("Please choose the length between 1-32");
}

else if (isNaN(number)) {
alert ("Please choose the number");
}
//alert(length);

if (checked1.checked == true && checked2.checked ==true && checked3.checked ==true && checked4.checked == true && number<32){
	var text = document.getElementById ("textbox").innerHTML = output1();
	}
	else if ( checked1.checked == true && checked2.checked ==false && checked3.checked ==false && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output7();
	}
	else if (checked1.checked == false && checked2.checked ==true && checked3.checked ==false && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output8();
	}
	else if (checked1.checked == false && checked2.checked ==false && checked3.checked ==true && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output9();
	}
	else if (checked1.checked == true && checked2.checked ==true && checked3.checked ==false && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output5();
	}
	else if (checked1.checked == true && checked2.checked ==true && checked3.checked ==true && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output2();
	}
	else if (checked1.checked == true && checked2.checked ==false && checked3.checked ==true && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output4();
	}
	else if (checked1.checked == true && checked2.checked ==false && checked3.checked ==false && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output15();
	}
	else if (checked1.checked == false && checked2.checked ==true && checked3.checked ==true && checked4.checked == false && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output6();
	}
	else if (checked1.checked == false && checked2.checked ==true && checked3.checked ==false && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output14();
	}
	else if (checked1.checked == false && checked2.checked ==false && checked3.checked ==true && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output10();
	}
	else if (checked1.checked == false && checked2.checked ==true && checked3.checked ==true && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output12();
	}
	else if (checked1.checked == true && checked2.checked ==true && checked3.checked ==false && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output13();
	}
	else if (checked1.checked == true && checked2.checked ==false && checked3.checked ==true && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output3();
	}
	else if (checked1.checked == false && checked2.checked ==false && checked3.checked ==false && checked4.checked == true && number<=32){
	var text = document.getElementById ("textbox").innerHTML = output11();
	}
	else  {
	var text = document.getElementById ("textbox").innerHTML = "Please select type of password";
	}
}

//var x = document.getElementById("myBtn");
//x.addEventListener("click", test);
//var length1 = prompt("What type? 1 for capital, 2 for small");
//var choice = prompt ("what type?");
//var length = prompt("Number of length? : ");


function test2(){

for (var i=0; i<=1; i++){
	var text = output2();
	document.getElementById ("textbox").innerHTML = output2();
}

return text;

}


function capital()
	{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
	}

function small()
	{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

   
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
	}


function numbers()
	{
    var text = "";
    var possible = "0123456789";

    
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
	}

 function specialChar()
	{
    var text = "";
    var possible = "!@#$%&*?_";

    
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}





//All------------------------------------------------------------------------------       	 	
function output1 (){
	var number = input.value;
	var password = "";
	for(var y=1; y<= number; y++){
	
	function myFunction()
 	{
    	var x = Math.floor((Math.random() * 4) + 1);
    	return x;
	}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            		    password += capital();
            		   
               	 break;
           		 case 2:
            			password += small();
            			 
               	 break;
            	case 3:
            			password += numbers();
            			 
                	break;
                default:
                		password += specialChar();
                		
               	}
               	
               	
               	
        	 }  return password; 
        	
        	 }   
        	 
        	 
        	 
        	 
//Capital, Small and Numbers------------------------------------------------------------      	 	
function output2 (){
var number = input.value;
var password = "";
	for(var y=1; y<= number; y++){
	
	function myFunction()
 	{
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
	}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            			//document.getElementById("textbox").innerHTML = capital();
                        password += capital();
               	 break;
           		 case 2:
            			//document.getElementById("textbox").innerHTML = small();
                        password += small();
               	 break;
            	
                default:
                		//document.getElementById("textbox").innerHTML = numbers();
                        password += numbers();
               	}
               	
               	
               
        	 }  return password;
        	
        	 } 
        	 
      
        	 
//Capital, Special and numbers only-----------------------------------------------------
function output3(){	
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
}
	var chosen = myFunction();
    		switch (chosen){
        		case 1:
            		 password += capital();
               	 break;
           		 case 2:
            		password += specialChar();
               	 break;
            	
                default:
                   password += numbers();
               	}
               	
        	 }  return password; 
        	
        	 }   
        	 	 

//Capital and numbers only--------------------------------------------------------------        	 
function output4 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}
	var chosen = myFunction();
    		switch (chosen){

        		case 1:
            		 password += capital();
               	 break;
            	
                default:
                	password += numbers();
               	}
               	
        	 }  return password; 
        	
        	 }   

//capital and small only--------------------------------------------------------------     
function output5 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}
	var chosen = myFunction();
    		switch (chosen){
        		case 1:
            		password += capital();
               	 break;
            	
                default:
                	password += small();
               	}
        	 }  return password; 
        
         }         	 
//small and numbers only--------------------------------------------------------------            	 
function output6 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            		password += numbers();
               	 break;
            	
                default:
                	password += small();
               	}
        	 }  return password; 
        	
        	 }  
        	 
        	 
        	 
        	  
   
//capital only--------------------------------------------------------------        	   
function output7 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 1) + 1);
    return x;
}

	var chosen = myFunction();		
		password += capital();
               
        	} return password; 
        	
        	 }   
        	 
        	 
        	 
//small only--------------------------------------------------------------        	 
function output8 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 1) + 1);
    return x;
}

	var chosen = myFunction();

    		
		password += small();
               	
               
        	} return password; 
        	
        	 }   
        	 
        	 
//numbers only--------------------------------------------------------------
function output9 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 1) + 1);
    return x;
}

	var chosen = myFunction();

    		
		password += numbers();
               	
               	
               
        	} return password; 
        	
        	 }   
        	 
//-------numbers and special Characters----------------------------------
function output10 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            		password += numbers();
               	 break;
            	
                default:
                	password += specialChar();
               	}
        	 }  return password; 
        	
        	 }  
        	  	 

//special Characters only--------------------------------------------------------------        	   
function output11 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 1) + 1);
    return x;
}

	var chosen = myFunction();		
		password += specialChar();
               
        	} return password; 
        	
        	 }  
      
      
  //--------------small. numbers and characters----------------------------------------
function output12 (){
var number = input.value;
var password = "";
	for(var y=1; y<= number; y++){
	
	function myFunction()
 	{
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
	}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            			//document.getElementById("textbox").innerHTML = capital();
                        password += numbers();
               	 break;
           		 case 2:
            			//document.getElementById("textbox").innerHTML = small();
                        password += small();
               	 break;
            	
                default:
                		//document.getElementById("textbox").innerHTML = numbers();
                        password += specialChar();
               	}
               	
               	
               
        	 }  return password;
        	
        	 }     
      
      
        	 
//--------------small. capital and characters----------------------------------------
function output13 (){
var number = input.value;
var password = "";
	for(var y=1; y<= number; y++){
	
	function myFunction()
 	{
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
	}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            			//document.getElementById("textbox").innerHTML = capital();
                        password += capital();
               	 break;
           		 case 2:
            			//document.getElementById("textbox").innerHTML = small();
                        password += small();
               	 break;
            	
                default:
                		//document.getElementById("textbox").innerHTML = numbers();
                        password += specialChar();
               	}
               	
               	
               
        	 }  return password;
        	
        	 } 

  	 
//-------small and special Characters----------------------------------
function output14 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            		password += small();
               	 break;
            	
                default:
                	password += specialChar();
               	}
        	 }  return password; 
        	
        	 }  


//-------capital and special Characters----------------------------------
function output15 (){
var length = input.value;
var password = "";
	for(var y=1; y<=length; y++){
	
	function myFunction()
 {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}

	var chosen = myFunction();

    		switch (chosen){

        		case 1:
            		password += capital();
               	 break;
            	
                default:
                	password += specialChar();
               	}
        	 }  return password; 
        	
        	 }  
        	  	 	  	 