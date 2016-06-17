   /*
    |--------------------------------------------------------------------------
    | Words count function 
    | -------------------------------------------------------------------------
	| Author: Ramy Muhammad - Date: 2016/06/16 -
	|--------------------------------------------------------------------------
	| This function takes an array and applies reduce function on each value in that array
	| to return it's number of occurrence in an object.
	|=====================================================
	| Test Cases:
	| Input: ["A","B","C","A","A","E","B"]      Output: Object { A: 3, B: 2, C: 1, E: 1 }
	| Input: ["Ramy","John","Ramy","Anton"]     Output: Object { Ramy: 2, John: 1, Anton: 1 }
	| Input: ["Apple","Hp","Dell","Hp"]			Output: Object { Apple: 1, Hp: 2, Dell: 1 }
	*/	

	function getWordCount(array){
    return array.reduce(function(previousValue,nextValue){
        previousValue[nextValue] = (previousValue[nextValue] + 1) || 1;
        return previousValue;
    },{});
}

//usage example
	var array = ["A","B","C","A","A","E","B"];
    console.log(getWordCount(array));
