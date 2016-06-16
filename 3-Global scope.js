var person = {
firstName : 'John',
lastName : 'Doe',
getFullNameFunction : function() {
/*
The bug in the return function() that it doesn't detect the firstName and lastName variables in it's outer scope "getFullNameFunction() function scope" .
to repair it define new variables firstName and lastName and assign to them the values of the global variables firstName and lastName in
person() scope.
*/
firstName = this.firstName;
lastName = this.lastName;
return (function(){ return  this.firstName + ' ' + this.lastName });
}
};
console.log(person.getFullNameFunction()());