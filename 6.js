<script>
   
   /*
    |--------------------------------------------------------------------------
    | Palindrome check function 
    | -------------------------------------------------------------------------
	| Author: Ramy Muhammad - Date: 2016/06/16 - 
	|--------------------------------------------------------------------------
	| This function reverse the string characters and words and keep only characters (a-z) 
	| and remove any other character to compare it with the original string without spaces and any other characters else (a-z)  
	| if it is the same then this string is palindrome else that this is not palindrome string
	|============================================================
	| Test Cases:
	| Input: "a man a plan a canal panama" ==> amanaplanacanalpanama , amanaplanacanalpanama	    ==>	Output: Palindrome string
	| Input: "mam"					       ==> mam ,	mam		      						        ==>	Output: Palindrome string
	| Input: "Able was i,ere I saw elba"   ==> ablewasiereisawelba	, ablewasiereisawelba	        ==>	Output: Palindrome string
	| Input: "Straw warts "				   ==> strawwarts	, strawwarts 							==>	Output: Palindrome string
	| Input: "A Toyota's a Toyota."		   ==> atoyotasatoyota ,	atoyotasatoyota			  	    ==>	Output: Palindrome string
	| Input: "My name is Ramy"			   ==> mynameisramy	, ymarsiemanym					        ==>	Output: Not palindrome string
	| Input: "Man"					       ==> man , nam											==>	Output: Not palindrome string
	*/	
	
function palindromeCheck(String){
return String.replace(/[^a-zA-Z]+/g, "").toLowerCase()  == String.split('').reverse().join('').replace(/[^a-zA-Z]+/g, "").toLowerCase();
}

//usage example
var Input = "a man a plan a canal panama";
palindromeCheck(Input)?console.log('Palindrome string'):console.log('Not palindrome string');


</script>