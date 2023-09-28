"use strict";
// console.log("hello world")
Object.defineProperty(exports, "__esModule", { value: true });
// VARIABLES : Anything that can vary (let,var,const)(camalcase)
// let firstName:string="ali"
// console.log(firstName)
// 1:var(function Scoped)
// var firstName:string="herry";
// firstName="hariq";
// console.log(firstName);
// 2:let(blocked function)
// let firstName:string="herry";
// firstName="hariq"
// console.log(firstName)
// 3:const(blocked function but its value will be not change)
// const firstName:string="herry";
// firstName="hariq"
// console.log(firstName)
// let funcName=()=>{
//     var firstName="herry"
//     firstName="hariq"
//     console.log(firstName)
// }
// funcName()
// let funcName=()=>{
//     let firstName="herry"
//     firstName="hariq"
//     console.log(firstName)
// }
// funcName()
// let funcName=()=>{
//     const firstName="herry"
//     firstName="hariq"
//     console.log(firstName)
// }
// funcName()
// let funcName=(){
//     var firstName="herry"
//     if(true){
//         firstName="hariq"
//         console.log(firstName)
//     }
// }
// funcName()
// let funcName=(){
//     let firstName="herry"
//     if(true){
//         firstName="hariq"
//         console.log(firstName)
//     }
// }
// funcName()
// let funcName=(){
//     const firstName="herry"
//     if(true){
//         firstName="hariq"
//         console.log(firstName)
//     }
// }
// funcName()
// let funcName=(){                             // this one is here for scoped
//     if(true){
//         var firstName="herry"
//         firstName="hariq"
//     }
//     console.log(firstName)
// }
// funcName()
// Primitive Data Types
// 1:string 2:number 3:boolean 4:null 5:undefined 
// let firstName:string="herry"
// let score = 25
// let isMarried=true
// let numBer=undefined
// console.log(numBer)
// Templete Letter ``
// Checking Of type
// let testVariable = 1;
// console.log(typeof testVariable);
// Operators
// A: Arithmatic Operators (1:addition)
//  let n1:number=1
//  let n2:number=5;
//  console.log(n1 + n2)
// let st1:string="1"
// let st2:string="1"
// console.log(st1 + st2)
// 2:Subtraction
//  let n1:number=1
//  let n2:number=5;
//  console.log(n1 - n2)
// let st1:string="1"
// let st2:string="1"
// console.log(st1 - st2)\
// 3:Multiplication
//  let n1:number=1
//  let n2:number=5;
//  console.log(n1 * n2)
// 4:Division
//  let n1:number=1
//  let n2:number=5;
//  console.log(n1 /n2)
// 5: Exponentiation
// let n1:number=2
//  let n2:number=5;
//  console.log(n1 ** n2)
// 6:Modules(reminder)
// let n1 = 10;
// let n2 = 2;
// console.log(n1 % n2);
// B:Assignments Operators:used to assiging values to variables(=,+=,-=,/=,*=)
// let n=5
// //  n+=5
// n*=5
// console.log(n)
// C:Comparsion Operators:compare values of variables (==,===,!=,<,>,<=,>=)
// let n:number=10
// console.log(n==10)
// console.log(n===10)
// console.log(n!=10) // (!) n is not equal to n
// console.log(10<n)
// console.log(10>n)
// console.log(n <= 10)
// console.log(n >= 10)
// D:Logical Operators: logical operators are used to perform logical operations on boolean values or expressions
// ((AND) && , (OR) ||, (NOT)!,)
// let n = 5;
// console.log(n >= 5 && n < 10);
// console.log(n > 5 && n < 10); 
// console.log(n > 5 && n < 10); 
// console.log(n >= 5 || n < 10); 
// console.log(n > 5 || n < 10); 
// console.log(!(n < 10)); 
// console.log(!(n > 10));
// let age:number=18
// let hasId:boolean=true
// if(age>20 && hasId){
//     console.log("jane do")
// }else{
//     console.log("ruk ly")
// }
// Fucntions:code main bar bar use karte hen phir hum aisa karte hen aik fuinction banwata hen phir usko call karwaty hen
// two types of function:1(bulit-in(touppercase etc))2(customs for our use )
// name function are hosted!!!!!
// function sum(num1:number,num2:number,num3:number){
//     let sum=num1 + num2 + num3
//     console.log(`the sum of ${num1} , ${num2} and ${num3} is ${sum}`);
// }
// sum(1,2,4)
// sum(10,2,40)
// sum(10,2,1000)
// Parameter type annotation
// function greet(name: string) {
//     console.log("Hello, " + name.toUpperCase() + "!!");
//     return name.toUpperCase();
//     }
//     greet("herry");
// Return Type Annotation:Appears after the parameters
// function getFavoriteNumber(): string {
//     return "herry";
//     }
// function greetName(){
// block of code
//     console.log("hello world")
// }
// greetName()
// function funcName1(){
//     return"herry is back"
// }
// let name1:string= funcName1(); 
// console.log(name1)
// function herRy(){
//     let data:string="herry is back";
//     return data;
// }
// herRy()
// console.log(herRy())
// Arrow Function:arrowFunction()=>{}
// Arrow Function is not hosted!!!!!!!!!!means it will no call before the function
// let arrowfunction =()=>{    
// excutable code   
//     let data : string ="herry is back"
//     return data;
// not excuteable code
// }  
// console.log(arrowfunction())
// let sum1=(x:number,y:number,z:number):number=>{
//     return x + y - z;
// }
// let a= sum1(10,40,1)
// console.log(a)
// let dunc=(str:string)=>str.toUpperCase()_
// let c=dunc("herry");
// console.log(c)
// if, else, else if statement:if(true),else(false),else if (another new condition)
// let per=100
// if(per<=0){
//     console.log("pass")
// }else{
//     console.log("fail")
// }
// if(per>=80){
//     console.log("your grade is A");
// }else if(per>=70){
//     console.log("your grade is B");
// }else if(per>=50){
//     console.log("your grade is C");
// }else{
//     console.log("you are fail")
// }
// if NESTED STATEMENT:two conditions but both are true
// in INES.JS
// // ARRAY:An array is a special variable, which can hold more than one value.
// ● An array can hold many values under a single name, and you can access the
// values by referring to an index number.
// ● In JavaScript, arrays always use numbered indexes.
// ● Array indexes start with 0.
//        0        1       2       3 .......
// let arr=["herry","haris","hariq","love"]
// console.log(arr[3])
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
// console.log(fruits[0]) // apple
// console.log(fruits[3]) // apple
// console.log(fruits[4]) // apple
// console.log(fruits[5]) // apple
//  // grapes
// let x = [1, 2, "daniyal",true,null] // Arrays can store multiple types of data
// ARRAY POP METHOD:The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out"
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
// let a=fruits.pop()
// console.log(fruits)
// // The pop() method returns the value that was "popped out"
// console.log(a)
// ARRAY PUSH METHOD:The push() method adds a new element to an array (at the end).
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"];// length(5),indexes(4)
// let b = fruits.push("mango");
// console.log(fruits);
// // The push() method returns the new array length.
// console.log(b)
// Arrays: Adding and removing elements - Examples
// let pets = [];
// pets[0] = "dog"; 
// pets[1] = "cat"; 
// pets[2] = "cat"; 
// pets[3] = "cat"; 
// pets[5] = "cat"; 
// console.log(pets)
// pets.pop(); 
// console.log(pets)
// pets.push("parrot"); 
// console.log(pets)
// Arrays: Removing, inserting, and extracting elements
// Shifting is equivalent to popping, but working on the first element instead of the last.
//  The shift() method removes the first array element and "shifts" all other
// elements to a lower index.
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"];// it is oppsite to pop
// let a= fruits.shift(); 
// console.log(fruits);
// console.log(a)
// Unshifting:The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//The unshift() method returns the new array length.
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"];// it is oppsite to push
// let a= fruits.unshift("happy"); 
// console.log(fruits);
// console.log(a) 
// Arrays: Removing, inserting, and extracting elements - Example
// let pets = [];
// pets[0] = "dog"; // adds “dog” to an array at 0 index
// pets[1] = "cat"; // adds “cat” to an array at index 1
// console.log(pets)
// pets.shift();
// console.log(pets)
// pets.unshift("parrot");
// console.log(pets)
// Arrays: Removing, inserting, and extracting elements
// Splicing and 
//  The splice() method adds new items to an array.
// let name=["herry","herry","hahhah","hhehheheeheh","12334"];
// name.splice(1,3,"hahahahahaha");
// console.log(name)
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// //           ["-4", "-3", "-2", "-1"];
// fruits.splice(-3,3,"added");
// console.log(fruits);
// Slicing Arrays:
// The slice() method slices out a piece of an array.
// let fruits = ["Banana", "Orange", "Apple", "Mango"];// The slice() method creates a new array.// end point ko add nhi kare ga
// let sweet= fruits.slice(0);
// console.log(sweet);
// console.log(fruits);
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1);
// console.log(citrus)
// // TASK
// let nicknames=["khan","haris","hariq","lala","herry","abc"];
// // nicknames.sort();
// nicknames.indexOf("khan",1)
// console.log(nicknames)
// // nicknames.push("HARIQ")
// // console.log(nicknames)
// // nicknames.pop()
// console.log(nicknames)
// For Loops:Loops are handy, if you want to run the same code over and over again,
// each time with a different value.
// expression=operator(=,<,++) with oprands(variables,number xyz)
// exp1:once before loop start
// exp2:condition step 1
// body of loop step 2
// exp3:increment step 3 // (i=i+1)
// for(exp1;exp2;exp3){
//     console.log("hello world");
// }
// for(var i=0 ; i<=100 ; i++){
//     console.log("hello world");
// }
// console.log(i)
// For Loops - Examples
// for (let i = 0; i < 3; i++) {
//     console.log("Hello World")
//     }
// for (let i = 0; i < 3; i++) {
//     console.log("Hello World",i)
//     }
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for (var i = 0; i <= 4; i++) {
// if ("Islamabad" === cleanestCities[i]) {
// console.log("It's one of the cleanest cities");
// break;// terminate loop excution
// }
// }
// console.log(i)
// var names = ["haris","haris ali khan","heheh","ali"];
// for(var i=0;i<5;i++){
//     if("heheh" === names[i]){
//         console.log("he is my bestie");
//         break;
//     }
//    // break;// answer is 0
//     }
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var matchFound = "no";
// for (var i = 0; i <= 4; i++){
// if ("Islambad" === cleanestCities[i]) {
// matchFound = "yes";
// console.log("It's one of the cleanest cities");
// }
// }
// if (matchFound === "no") {
// console.log("It's not on the list");
// }
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
// if ("Islamabad" === cleanestCities[i]) {
// matchFound = true;
// console.log("It's one of the cleanest cities");
// break;
// }
// }
// if (matchFound === false) {
// console.log("It's not on the list");
// }
// console.log(i)
// // Nested For Loops - Example
// A nested loop is a loop within a loop.
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) { // outer loop 
// for (var j = 0; j < lastNames.length; j++) { // inner loop
// fullNames.push(firstNames[i] + lastNames[j]);
// }
// }
// console.log(fullNames);
// console.log(i)
// GIT VS GIT HUB
// GIT: Command base function (version controlling system)  
// GITHUB:Server provide(website hosting)(globally)
