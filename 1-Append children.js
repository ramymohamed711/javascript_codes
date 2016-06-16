function appendChildren(){
var allDivs = document.getElementsByTagName("div");
/* the bug here is .getElementsByTagName() returns a live nodeList.
 that means that the new <div> elements that added to the page become part of the live nodeList so it will never finish the loop. 
 To repair that the nodeList has to turn into a plain array using Array.prototype.slice.call() function.
 */
allDivs = Array.prototype.slice.call( allDivs, 0 ); 
for(var i = 0 ; i < allDivs.length ;i++){
var newDiv = document.createElement("div");
allDivs[i].appendChild(newDiv);
 }
 } 