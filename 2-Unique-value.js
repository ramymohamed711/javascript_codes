   /*
    |--------------------------------------------------------------------------
    | Unique values function 
    | -------------------------------------------------------------------------
	| Author: Ramy Muhammad - Date: 2016/06/16 - 
	|--------------------------------------------------------------------------
	| This function filters the array from the duplications of entry values.
	| filter() function applies onlyUnique() function on each value in array 
	| it check existence of value to get the first occurrence's index and 
	| comparing it with the current value's index to check if there is a duplication or not.
	|=============================================================
	| Test Cases:
	| Input: [1,2,3,4,1,5,3]  			Output: [ 1, 2, 3, 4, 5 ]
	| Input: [0,10,1,10,99,2]			Output: [ 0, 10, 1, 99, 2 ]
	| Input: [-1,2.5,5,2.5,3,1,-1]		Output: [ -1, 2.5, 5, 3, 1 ]
	| Input: [10,100,1000,10,99,-10]	Output: [ 10, 100, 1000, 99, -10 ]
	*/	

	function onlyUnique(value, index, array) { 
    return array.indexOf(value) === index;
	}

//usage example
var Input = [1,2,3,4,1,5,3];
var Output = Input.filter( onlyUnique );
console.log(Output);
