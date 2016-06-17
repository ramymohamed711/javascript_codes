   /*
    |--------------------------------------------------------------------------
    | Array summation function 
    | -------------------------------------------------------------------------
	| Author: Ramy Muhammad - Date: 2016/06/16 -
	|--------------------------------------------------------------------------
    | This function is responsible for return a sum of all numeric values in the array
    | it uses reduce function to apply a sum function against an accumulator
    | and each value of the array to reduce it to a single value.
	|===================================================
	| Test cases: 
	| Input:[0,1,2,3,4]    							output : 10 
	| Input:[15,7,0,9,47]  							output : 78 
	| Input:[-10,20,10,-10]   						output : 10 
	| Input:[1,15,98,1022,5,15,34,34,-99,5.6]  	    output : 1130.6 
	*/	
	
function sumArray(array){
var sum = array.reduce(function(previouse_value, current_value) { return previouse_value + current_value; }, 0);
return sum;
}

