for(var i = 1 ; i < 6 ; i++){
/*
before wrapping each iteration of the loop in self executing function the bug was that  
Javascript has a .setTimeout() function scope only. 
to repair that it needs to create a scope that is different for every loop to wrap each iteration of the loop in a function
that makes .setTimeout() function creates a closure around (i) for that iteration of the loop.
*/
(function(i){
setTimeout(function(){
console.log(i);
},1000);
})(i);
}