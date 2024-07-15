console.log("hello")
console.log("learning javascript")

// window.alert("I really love pizza!")

//This is a comment
/* 
 This is multiline comment
*/


//VARIABLES

//A variable is a container for storing data 
//A variable behaves as if it was the value that it contains

//Two Steps:
//1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

/*
1]var
1.scope = global , local
2.can redeclare, reassign
3.hoisted to the top of their global or local scope( accessible before the line they are declared with default value of undefined)
4.not recommended to use in modern js projects
*/

/*
2]let
1.scope = global, local, block 
(block scope is for variables declared in a block(if, loop, switch))
2.cannot redeclare but can reassign
3.hoisted to the top of their scope(global,local,block) but without a deafult initialization, so accessing variable before declaration will give error "cannot access 'variable' before initialization"
*/

/*
3]const
1.scope = global, local, block
2.cannot redeclare or reassign
3.hoisted to the top of their scope without a default initilization ( same as let )
*/

/*
let age=21;
console.log(age);
age=22;
console.log(age);


let firstName = "Iliyas";
console.log(firstName);

let student=true;
console.log(student);

firstName=age+firstName;
console.log(firstName);


document.getElementById("p1").innerHTML="Hello "+firstName;
document.getElementById("p2").innerHTML="You are "+age+" years old";
document.getElementById("p3").innerHTML="Enrolled "+student;
*/
/*
The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string
*/

/*
The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
*/


// ARITHMETIC OPERATION

/*
let students =20;
console.log(students);
students=students-1;
console.log(students);

students+=2;
console.log(students);
students-=1;
console.log(students);
students*=3;
console.log(students);
students/=2;
console.log(students);
*/

/* 
operator precedence
    1.parenthesis
    2.exponents
    3.multiplication and division
    4.addition and subtraction
*/
/*
let result = 1+2*(4+4);
console.log(result);
*/

//HOW TO ACCEPT USER INPUT

//EASY WAY WITH A WINDOW PROMPT

/*
let username=window.prompt("what's your name?");
console.log(username);
*/

//DIFFICULT WAY HTML TEXTBOX

/*
let username;
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML=username;
}
*/


//TYPE CONVERSION = CHANGE THE DATATYPE OF A VALUE TO ANOTHER (STRINGS,NUMBERS,BOOLEANS)

/*
age=window.prompt("Enter Your age : ");
console.log(typeof age);
age=Number(age);
console.log(typeof age);
//(converting string(user input) to number to perform arithmetic operation)
age+=1;
console.log(age);
*/

/*
let x,y,z;
x=Number("3.14");
y=String(3.14);
z=Boolean("pizza");
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/



//CONST = A VARIABLE THAT CAN'T BE CHANGED

/*
const PI=3.14;
let radius;
let circumference;
radius=window.prompt("Enter the radius of circle");
circumference=2*PI*radius;
console.log("The circumference is : ",circumference)
*/



//MATH

/*
let x = -3.49;
let y=5;
let z=9;
let maximum;
let minimum;
// x=Math.round(x);
// x=Math.floor(x);
// x=Math.ceil(x);
// x=Math.pow(x,2);
// x=Math.sqrt(x);
// maximum=Math.max(x,y,z);
// minimum=Math.min(x,y,z);
// x=Math.abs(x);
// console.log(maximum);
// console.log(minimum);
x=Math.PI;
console.log(x);
*/



//FIND HYPOTENUSE OF RIGHT ANGLE TRIANGLE

//BY WINDOW.PROMPT
/*
let a=window.prompt("Enter length of side 1");
a=Number(a);
let b=window.prompt("Enter length of side 2");
b=Number(b);
let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("Hypotenuse of triangle is : ",c);
*/

//BY HTML TEXTBOX
/*
let a;
let b;

document.getElementById("submit").onclick=function(){
    a=document.getElementById("aText").value;
    console.log(a);
    a=Number(a);

    b=document.getElementById("bText").value;
    console.log(b);
    b=Number(b);

    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("cans").innerHTML="Side C : "+c;
    console.log("Hypotenuse of triangle is : ",c);
}
*/

//COUNTER PROGRAM

/*
let count=0;
document.getElementById("decbutton").onclick=function(){
    count-=1;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("resbutton").onclick=function(){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("incbutton").onclick=function(){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
}
*/


//RANDOM NUMBER GENERATOR
/*
the Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range
*/
/*
let x=Math.floor((Math.random()*6));
console.log(x);
*/



//USE STRING PROPERTIES AND METHODS
/*
let userName="Bro Code";
let date="09-12-2023";
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.lastIndexOf("o"));
console.log(userName.indexOf("o"));
userName=userName.trim();
userName=userName.toUpperCase();
userName=userName.toLocaleLowerCase();
date=date.replaceAll("-","/");
console.log(date);
console.log(userName);
*/

//SLICE() 
//EXTRACTS A SECTION OF A STRING AND RETURNS IT AS A NEW STRING, WITHOUT MODIFYING THE ORIGINAL STRING

/*
let fullName="Bro Code";
let firstName;
let lastName;

lastName=fullName.slice(fullName.indexOf(" ")+1);
firstName=fullName.slice(0,fullName.indexOf(' '));

console.log(firstName);
console.log(lastName);
*/

//METHOD CHAINING = CALLING ONE METHODS AFTER ANOTHER IN ONE CONTINUOUS LINE OF CODE

//Without method chaining 
/*
let userName="bro";
let letter=userName.charAt(0);
letter=letter.toUpperCase();
console.log(letter);
*/
//With Method chaining
/*
let userName="bro";
console.log(userName.charAt(0).toUpperCase());
*/


// if statement
/*
let age=65;
if(age>=65){
    console.log("You are a senior citizen");
}
else if(age>=18){
    console.log("You are an Adult");
}
else if(age<0){
    console.log("You haven't been born yet!");
}
else{
    console.log("You are a child");
}
*/
/*
let online=false;
if(online)
console.log("You are online");
else
console.log("You are offline");
*/

/*
document.getElementById("checkbutton").onclick=function(){
    const visabtn=document.getElementById("visaBtn");
    const mastercardbtn=document.getElementById("mastercardBtn");
    const paypalbtn=document.getElementById("paypalBtn");

    const mycheckbox=document.getElementById("mycheckbox");
    if(mycheckbox.checked){
        console.log("You are subscribed");
    }
    else{
        console.log("You are not subscribed");
    }   

    if(visabtn.checked)
    console.log("You are paying with visa");
    else if(mastercardbtn.checked)
    console.log("You are paying with master card");
    else if(paypalbtn.checked)
    console.log("You are paying with payapl");
    else{
        console.log("Select payment option")
        window.alert("Please select a payment option");
    }
}
*/


//switch statement
/*
let grade="A";
switch(grade){
    case "A":
        console.log("You did great");
        break;
    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did Okay");
        break;
    case "D":
        console.log("You Passed barely");
        break;
    case "F":
        console.log("You Failed");
        break;
    default:
        console.log(grade," is not a letter grade");
        break;
}
*/

//While loop
/*
let userName="";
while(userName=="" || userName==null){
    userName=window.prompt("Enter your name");
}
console.log("Hello ",userName);
*/

//do while
/*
let userName;
do{
    userName=window.prompt("Enter your name");
}
while(userName=="" || userName==null)
console.log("Hello ",userName);
*/

//for loop
/*
let symbol=window.prompt("Enter a symbol");
let row=window.prompt("Enter number of row");
row=Number(row);
let col=window.prompt("Enter number of column");
col=Number(col);
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        document.getElementById("myRectangle").innerHTML+=symbol;
    }
    document.getElementById("myRectangle").innerHTML+="<br>";
}
*/


//FUNCTION
/*
startprogram();

function startprogram(){
    let age=21;
    let userName="Bro Code";
    happyBirthday(age,userName);
}

function happyBirthday(age,userName){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear ",userName);
    console.log("You are ",age," years old");
}

*/

//TERNARY OPERATOR

//condition? exp if true: exp if false
/*
let adult=checkage(21);
console.log(adult);
function checkage(age){
    return (age>=18)?true:false;
}

*/

//VARIABLE SCOPE=WHERE A VARIABLE IS ACCESSIBLE
//LET = VARIABLE ARE LIMITED TO BLOCK SCOPE {}
//VAR = VARIABLE ARE LIMITED TO A FUNCTION(){}

//global variable = is declared outside any function
// (if global , var will change browser's window properties)



//TEMPLATE LITERALS = DELIMITED WITH (`)
//INSTEAD OF DOUBLE OR SINGLE QUOTES AND ALLOWS EMBEDDED VARIABLES AND EXPRESSION

let userName="Bro";
let items=3;
let total=75;

//without template literals
/*

 console.log("Hello", userName);
 console.log("You have",items,"items in your cart");
 console.log("Your total is $",total);

*/

//with template literals (`)
/*
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is ${total}`);
*/
/*
let text=`Hello ${userName}
you have ${items} items in your cart
your total is $${total}`;
console.log(text);
*/

//eString()= returns a string with a language sensitive representation of this number 
// number.toLocaleString(locale,{options});
//'locale' = specify that langauge (undefined = deafult set in browser)
// 'options' = object with formatting options


/*
// let myNum=123456.789;
// myNum=myNum.toLocaleString("en-US");//US English
// myNum=myNum.toLocaleString("hi-IN");//Hindi
// myNum=myNum.toLocaleString("de-DE")//standard German

// myNum=myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});
// myNum=myNum.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
// myNum=myNum.toLocaleString("hi-IN",{style:"currency",currency:"EUR"});

// myNum=myNum.toLocaleString(undefined,{style:"percent"});

// myNum=myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"});
// console.log(myNum);
*/


//Array

/*
let fruit="apple";//single data

let fruits=["apple","orange","banana"]//multiple data

console.log(fruits);
fruits[0]="dragonfruit";
console.log(fruits[0]);

fruits[3]="kiwi";
console.log(fruits[3]);

fruits.push("watermelon");//add an element
fruits.pop();//remove last element
fruits.unshift("mango"); //add element to beginning
fruits.shift(); //removes element from beginning

let length=fruits.length;
let index=fruits.indexOf("kiwi");
console.log(index);
*/

//Loop Through Elements of Array

// let prices = [5,10,15,20];

// for loop
/*
for(let i=0;i<prices.length;i++){
    console.log(prices[i]);
}
*/
//for of statement
/*
for(let price of prices){
    console.log(price);
}
*/

//for in statement
/*
let myobj={x:1,y:2,z:3};
for(let key in myobj){
    console.log(key,myobj[key]);
}
*/


//Sort array of strings
/*
let fruits=["oranges","apple","watermelon","mango"];

for(let fruit of fruits){
    console.log(fruit);
}

fruits=fruits.sort();
console.log("After sorting");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("Fruits in reverse order");
//sort in reverse order
fruits=fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}

*/
//2D Array

/*
let fruits=["orange","kiwi","mango"];
let vegetables=["cabbage","fenugreek","tomato"];
let meat=["chicken","fish","mutton"];

let groceryList=[fruits,vegetables,meat];
console.log(groceryList);

for(let list of groceryList){
    for(let items of list){
        console.log(items);
    }
}
*/


//SPREAD OPERATOR (...)= ALLOWS AN INTERABLE SUCH AS AN ARRAY OR STRING TO BE EXPANDED IN PLACES WHERE ZERO OR MORE ARGUMENTS ARE EXPECTED (UNPACKS THE ELEMENTS)
/*
let numbers =[1,2,3,4,5,6,7,8,9];
console.log(numbers);
console.log(...numbers);
let maximum = Math.max(...numbers);
console.log(maximum);
let class1=["spongebob","patrick","sandy"];
let class2=["squidward","mr.krabs","plankton"];
class1.push(...class2);
console.log(...class1);
*/

//REST PARAMETERS(...) = REPRESENTS AN INDEFINITE NUMBER OF PARAMETERS (PACKS ARGUMENTS INTO AN ARRAY)

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;
/*
console.log(sum1(a,b));
function sum1(a,b){
    return a+b;
}
console.log(sum2(a,b,c));
function sum2(a,b,c){
    return a+b+c;
}
*/
/*
console.log(sum(a,b,c))
function sum(...numbers){
    let total=0;
    for(let number of numbers)
    total+=number;
    return total;
}
*/

//CALLBACK = A FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION
//properties
/*
Ensures that a function is not going to run before a task is completed.
helps us develop asynchronous code.(when one function has to wait for another function that helps us avoid errors and potential problems Ex. wait for a file to load)
*/
/*
sum(2,3,displayConsole);

function sum(x,y,callback){
    setTimeout(()=>{
        let result=x+y;
        console.log("hii");
        callback(result);
    },3000);
}

function displayConsole(output){
    console.log(output);
}

console.log("hello")
//output
//hello
//5

// the function callback function is set to execute after a 3 seconds , so it will be done asynchronously that means the program will continue to execute other lines of code without blocking or waiting for callback function to execute.thus hello is printed first then 5 is printed after 3 seconds
*/

//array.forEach() = executes a provided callback function once for each array element
/*
let students = ["spongebob","patrick","squidward"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}
*/

//array.map() = executes a provided callback function once for each array element AND creates a new array
/*
let numbers=[1,2,3,4,5];
let squares = numbers.map(square);
let cubes=numbers.map(cube);
squares.forEach(print);
cubes.forEach(print);
function square(element){
    return Math.pow(element,2);
}
function cube(element){
    return Math.pow(element,3);
}
function print(element){
    console.log(element);
}
*/

//array.filter() = creates a new array with all elements that pass the test provided by a function

/*
let ages=[18,16,21,17,19,90];
let adults=ages.filter(checkAge);
adults.forEach(print);
function checkAge(element){
    return element>=18;
}
function print(element){
    console.log(element);
}
*/

//array.reduce() = reduce an array to a single value

/*
let prices = [5,10,15,20,25];
let Total=prices.reduce(checkOut);
console.log("total is "+Total);
function checkOut(total,element){
    return total+element;
}
*/

//sort array of numbers
/*

let grades=[100,50,90,60,80,70];

let descend=grades.sort(descendingSort);
grades.forEach(print);
function descendingSort(x,y){
    return y-x;
}

let ascend=grades.sort(ascendingSort);
grades.forEach(print);
function ascendingSort(x,y){
    return x-y;
}

function print(element){
console.log(element);
}

*/

//function expression = function without a name (anonymous function) avoid pollution the global scope with names, Write it then forget about it.


//traditional function
/*
sayHello();
function sayHello(){
    console.log("Hello");
}

//function expression
const greet=function(){
    console.log("hello");
}

greet();
*/

//Tradition counting program with function name
/*
let count=0;
function increaseCount(){
    count++;
    document.getElementById("countlabel").innerHTML=count;
}
function decreaseCount(){
    count--;
    document.getElementById("countlabel").innerHTML=count;
}
*/

//wITH FUNCTION EXPRESSION
/*
let count=0;
document.getElementById("incButton").onclick=function(){
    count++;
    console.log(count);
    document.getElementById("countlabel").innerHTML=count;
}

document.getElementById("decButton").onclick=function(){
    count--;
    console.log(count);
    document.getElementById("countlabel").innerHTML=count;
}
*/


//ARROW FUNCTION = COMPACT ALTERNATIVE TO A TRADITIONAL FUNCTION expression

//function expression
const greeting = function(userName){
    console.log(`hello ${userName}`);
}
greeting("Iliyas");

//Arrow function

const greet = (userName) => console.log(`Hello ${userName}`);
greet("Iliyas");

//function expression
const percent=function(x,y){
    return x/y*100;
}
console.log(`${percent(75,100)}%`);


//arrow function
const findPercent=(x,y)=>x/y*100;

console.log(`${findPercent(75,100)}%`);


//function expression to sort array of number
/*
let grades = [100,50,90,60,80,70];
grades.sort(descending);
grades.forEach(print);

function descending(x,y){
    return y-x;
}

function print(element){
    console.log(element);
}

*/
//arrow function
/*
let grade=[100,50,90,80,70];

grade.sort((x,y)=>y-x);
grade.forEach((element)=>console.log(element));

*/

//Shuffle Array
/*
let cards=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);

console.log(cards);
function shuffle(array){
    let currentIndex=array.length;
    while(currentIndex!=0){
        let randomIndex=Math.floor(Math.random()*array.length);
        currentIndex-=1;
        let temp=array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temp;
    }
}

*/
/*
const x=function(y){
    return y*y;
}
console.log(x(3));
*/


//nested function = Functions inside other functions .Outer functions have access to inner function. Inner functions are "hidden" from outside the outer function.
//used in closure

/*
let username="Bro";
let inboxMessages=0;
login();
function login(){
    displayUserName();
    displayInboxMessage();

    function displayUserName(){
        console.log(`Hello ${username}`);
    }
    function displayInboxMessage(){
        console.log(`You have ${inboxMessages} new messages`);
    }
}
*/

//Map = object that holds key-value pair  of any data type
/*

const store=new Map([
    ["T-Shirt",20],
    ["Jeans",30],
    ["socks",10],
    ["underwear",50]
]);


let shoppingCart=0;
shoppingCart+=store.get("T-Shirt");
store.set("hat",40);
store.delete("hat");
console.log(store.has("hat"));
console.log(store.size);
console.log(shoppingCart);

store.forEach((value,key)=> console.log(`${key} $${value}`));
*/

//object = a group of properties and methods 
//          properties = what an object has
            // methods = what an object can do, use (.) to access properties / methods

/*
const car ={
    model:"Mustang",
    color:"red",
    year:2023,
    
    drive:function(){
        console.log("You drive the car");
    },
    brake:function(){
        console.log("You step on the brakes");
    }
}

console.log(car.model);
console.log(car.color);
car.drive();
car.brake();
*/


//this - reference to a particular object the object depends on the immediate context

/*
const car1={
    model:"Mustang",
    color:"red",
    year:2023,
    drive:function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car2={
    model:"Corvetter",
    color:"blue",
    year:2024,
    drive:function(){
        console.log(`You drive the ${this.model}`);
    }
}

console.log(car1.model);
console.log(car2.model);


this.name="MyCoolWindow";
console.log(this);
*/


//class
//A blueprint for creating objects, define what properties and methods they have, use a constructor for unique properties.

/*
class Player{
    score=0;
    pause(){
        console.log("You passed the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1=new Player();

player1.pause();
player1.exit();
*/

//constructor = a special method of a class, 
//accepts arguments and assigns properties

/*
class student{
    constructor(name,age,cgpa){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }

}   


const student1=new student("Iliyas",21,9.4);
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
student1.study();

const student2=new student("Maddy",22,9.6);
console.log(student2.name);
console.log(student2.age);
console.log(student2.cgpa);
student2.study();


*/

//static= belongs to the class, not the objects
//properties: useful for caches, fixed-configuration 
//methods: useful for utility functions

/*
class Car{
    static numberOfCar=0;
    constructor(model){
        this.model=model;
        Car.numberOfCar+=1;
    }
    static startRace(){
        console.log("3.2.1.Go!");
    }
}

const car1=new Car("Mustang");
const car2=new Car("Santafe");
const car3=new Car("Carens");
console.log(Car.numberOfCar);
Car.startRace();
*/


//Inheritance
/*
class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name="Rabbit";
    alive=false;
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Hawk extends Animal{
    name="Hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
const anm=new Animal();
console.log(anm.alive);
anm.sleep();

const rab=new Rabbit();
const hak=new Hawk();
rab.eat();
rab.sleep();
rab.run();
console.log(rab.alive);

hak.eat();
hak.fly();
console.log(hak.alive);
*/

//Super = refers to the parent class.
//commonly used to invoke constructor of a parent class
/*
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }
}

class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }
}

const rabbit =new Rabbit("rab",10,40);
console.log(rabbit.name,rabbit.age,rabbit.runspeed);

const fish=new Fish("fish",20,10);
console.log(fish.name,fish.age,fish.swimspeedspeed);
*/


//get = binds an object property to a function when that property is accessed
//get increases data security
//set=binds an object property to a function when that property is assigned to value
/*
class Car{
    constructor(power){
        this._gas=25;
        this._power=power;
          //_ is used to denote it as protected property
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas/50*100})%`;
    }
    set gas(value){
        if(value>50)
        value=50;
        else if(value<0)
        value=0;
        this._gas=value;
    }
}

const car=new Car(555);
car.gas=35;
console.log(car.power);
console.log(car.gas);
*/


//pass objects to function as arguments
/*
class Car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }
}

const car1=new Car("Ferrari",2022,"red");
const car2=new Car("Lamborghini",2018,"black");
const car3=new Car("Rolls Royce",2020,"Cream");

changeColor(car3,"Green");
displayInfo(car3);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}
function changeColor(car,color){
    car.color=color;
}
*/


//Array of Objects

/*
class Car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }
    drive(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1=new Car("Ferrari",2022,"red");
const car2=new Car("Lamborghini",2018,"black");
const car3=new Car("Rolls Royce",2020,"Cream");

const cars=[car1,car2,car3];
console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);



startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

*/

//anonymous objects
//objects without a name 
// not directy referenced 
//les syntax. No need for unique names

//traditional object creation
/*
class Card{
    constructor(value,suite){
        this.value=value;
        this.suite=suite;
    }
}

const card1=new Card("A","Hearts");
const card2=new Card("A","Spades");
const card3=new Card("A","Diamonds");
const card4=new Card("A","Clubs");
const card5=new Card("A","Hearts");
const card6=new Card("A","Spades");
const card7=new Card("A","Diamonds");
const card8=new Card("A","Clubs");

let cards=[card1,card2,card3,card4,card5,card6,card7,card8];
console.log(cards[0].value,cards[0].suite);
console.log(card1.value,card1.suite);
*/


//Anonymous
//Can't access directly
/*
class Card{
    constructor(value,suite){
        this.value=value;
        this.suite=suite;
    }
}

let cards=[
    new Card("A","Hearts"),
    new Card("A","Spades"),
    new Card("A","Diamonds"),
    new Card("A","Clubs")
];

console.log(cards[0].value,cards[0].suite);

cards.forEach(card=>console.log(`${card.value} ${card.suite}`));
*/

//Error = object with a description of something went wrong
//encountering error will halt execution of program

//can't open a file
//lose connection
//typeError
//user types incorrect input

//Handle Error with try catch block
//throw= executes a user-defined error
/*
try{
    console.lag(); //TypeError 
}
catch(error){
    console.log(error);
}
*/

/*
try{
    let x=window.prompt("Enter a Number");
    x=Number(x);

    if(isNaN(x)) throw "That wasn't a Number";
    else if(x=="")throw "That was Empty";

    console.log(`${x} is a Number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always execute");
}
*/


//setTimeout() = invokes a function after a number of miliseconds
//asynchronous function (doesn't pause the execution of program)

/*
let t1=setTimeout(firstMessage,3000);
let t2=setTimeout(secondMessage,10000);
let t3=setTimeout(thirdMessage,15000);

function firstMessage(){
    alert(`Buy This Course for $500`);
}

function secondMessage(){
    alert(`This is not a scam!`);
}

function thirdMessage(){
    alert(`Do It!`);
}

document.getElementById("buy").onclick=function(){
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    alert(`Thanks for buying`);
}

*/


//setInterval() = invoke a function repeatedly after a number of millisecond
//asynchronous function (doesn't pause execution)
/*
let count=0;

let max=window.prompt("Count Up to What Number?");
max=Number(max);

const myTimer=setInterval(countUp,1000);
function countUp(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(myTimer);
    }
}
*/

//The Date Object is used to work with dates and times

let date=new Date();
// let date=new Date(0);
// let date=new Date(1000000);
// let date=new Date(2023,0,1,2,3,4,5);
// let date=new Date("december 10 2023 00:00:00");

// let year=date.getFullYear();
// let dayOfMonth=date.getDate();
// let dayOfWeek=date.getDay();
// let month=date.getMonth();
// let hour=date.getHours();
// let minutes=date.getMinutes();
// let seconds=date.getSeconds();
// let ms=date.getMilliseconds();


// date=date.toLocaleDateString();
// console.log(year);
// console.log(dayOfMonth);
// console.log(dayOfWeek);
// console.log(month);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(ms);



// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(31);

// date=date.toLocaleString();
// console.log(date);


//CLOCK
/*
const clock=document.getElementById("clock");
update();
setInterval(update,1000);
function update(){
    let date=new Date();
    
    clock.innerHTML=formatTime();

    function formatTime(){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let amorpm= (hours>=12) ? "pm":"am";
        hours=(hours%12)||12;
        return `${hours}:${minutes}:${seconds} ${amorpm}`;
    }

}

*/

/*
synchronous code :
In ordered sequence. 
Step-by-step linear instructions
(start now,finish now);

asynchronous code:
Out of sequence 
Ex. Access a database
fetch a file 
tasks that take time
(start now, finish sometime later)
*/


/*
//Synchronous
console.log("Start");
console.log("This step is synchronous");
console.log("End");


//Asynchronous
console.log("Start");
setTimeout(()=> console.log("This step is asynchronous"),5000);
console.log("End");
*/


//console.time():
/*
starts a timer you can use to track how long an operation takes give each timer a unique name.
*/

/*
//start
console.time("Response time");

// alert("Click the ok button !");
setTimeout(()=>console.log("Hello"),3000);

console.timeEnd("Response time");
*/

//promise :
/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

//object that encapsulates the result of an asynchronous operation 
//let asynchronous methods return values like syncronous methods
//"I promise to return something in the future"


//the STATE  is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned 
//2 parts producing & consuming


//async makes a function return a promise
// await = makes an async function with wait for a promise
// we can only use await with async function


//with traditional function
/*
function loadFile(){
    let fileLoaded=false;
    if(fileLoaded)
    return Promise.resolve("File Loaded");
    else
    return Promise.reject("File Not Loaded");
}
loadFile().then(value=>console.log(value))
.catch(error=>console.log(error));

*/
//with async and await 
/*
async function loadFile(){
    let fileLoaded=false;
    if(fileLoaded)
    return "File Loaded";
    else
    throw "File Not Loaded";
}

async function startProcess(){
    try{
        let message=await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

startProcess();

*/

// loadFile().then(value=>console.log(value))
// .catch(error=>console.log(error));



//with async function
/*
async function loadFile(){
    let fileLoaded=false;
    if(fileLoaded)
    return "File Loaded";
    else
    throw "File Not Loaded";
}
loadFile().then(value=>console.log(value))
.catch(error=>console.log(error));

*/
// without async function direct promise
/*
const promise=new Promise((resolve,reject)=> {
    let fileLoaded=false;
    if(fileLoaded)
    resolve("File Loaded");
    else
    reject("File Not Loaded");
});

promise.then((value)=>{
console.log(value);
})
.catch((error)=>console.log(error));

*/







/*
const wait=(time)=> new Promise((resolve)=>{
    setTimeout(resolve,time);
});

wait(3000).then(()=> console.log("Thanks for waiting"));
*/


//MODULE
//The idea behind a module is that it's a file of reusable code
//We can import sections of pre-written code to use whenever required
//great for any general utility values and functions
//helps to make your code more reusable and maintainable
// think of modules as separate chapters of a book

/* without * 
// import{PI,getCircumference,getArea} from "./math_util.js"

console.log(PI);

let circumference=getCircumference(10);
console.log(circumference);

let area=getArea(20);
console.log(area);
*/


// with * 
/*
import * as MathUtil from "./math_util.js"
console.log(MathUtil.PI);

let circumference=MathUtil.getCircumference(10);
console.log(circumference);

let area=MathUtil.getArea(20);
console.log(area);
*/



//DOM 
//Document Object Model
//An interface for changing the content of a page
/*
console.dir(document);
console.log(document.title);
console.log(document.URL);

document.title="Title goes here!";
// document.location = "http://www.google.com";


document.body.style.backgroundColor="skyblue";
document.getElementById("clock").innerHTML="Hello";
*/
/*
document.getElementById("fruitbutton").onclick=function(){
    let fruits=document.getElementsByName("fruits");
    fruits.forEach(fruit=>{
        if(fruit.checked){
            console.log(fruit.value);
        }
    })
}
*/

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor="lightgreen";
/*
let desserts=document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor="brown";

let element=document.querySelector("#myTitle");
element.style.backgroundColor="lightblue";

let apple=document.querySelector("[for]");
apple.style.backgroundColor="lightgreen";


element=document.querySelectorAll("li");
element.forEach(element=>{
    element.style.backgroundColor="grey";
})

*/

