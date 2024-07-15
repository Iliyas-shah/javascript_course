console.log("hello");


// let element=document.body;
// let child=element.firstElementChild;
// let child=element.parentElement;
// child.style.backgroundColor="lightgreen";

// let element=document.querySelector("#vegetables");
// let sibling=element.nextElementSibling;
// let sibling=element.previousElementSibling;
// sibling.style.backgroundColor="lightgreen";

// let element=document.querySelector("#fruits");
// let child=element.firstElementChild;
// child.style.backgroundColor="lightgreen";


// let element=document.querySelector("#fruits");
// let child=element.lastElementChild;
// child.style.backgroundColor="lightgreen";


// let element=document.querySelector("#fruits");
// let children=element.children[0];
// children.style.backgroundColor="lightgreen";

// let element=document.querySelector("#fruits");
// let children=Array.from(element.children);
// children.forEach(child=>child.style.backgroundColor="lightgreen");

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.chilren[]
//Array.from(.children)


//add/change HTML element
//.innerHTML (vulnerable to XSS attacks)
//.textContent (more secure)


/*
const nameTag=document.createElement("h1");
nameTag.innerHTML=window.prompt("Enter Your Name");
document.body.append(nameTag);
*/ // vulnerable to XSS attacks with innerHTML

// const nameTag=document.createElement("h1");
// nameTag.textContent=window.prompt("Enter Your Name");
// document.body.append(nameTag); // more secure with textcontent

/*
const myList=document.querySelector("#nfruit");
const listItem=document.createElement("li");
listItem.textContent="mango";
*/
// myList.prepend(listItem);
// myList.apppend(listItem);
// myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);


// const title=document.getElementById("myTitle");
// title.style.backgroundColor="lightblue";
// title.style.color="rgb(50,200,250)";
// title.style.fontFamily="consolas";
// title.style.textAlign="center";
// title.style.border="2px solid";
// title.style.display="block";



//EVENT 
/*
const element=document.getElementById("mybutton");
element.onclick=dosomething;
function dosomething(){
    alert("You did something!");
}
*/


/*
const element=document.body;
element.onload=dosomething;
function dosomething(){
    alert("Window Loaded!");
}
*/

/*
const element=document.getElementById("myText");
element.onchange=dosomething;
function dosomething(){
    alert("Element Changed");
}

*/
/*
const element=document.getElementById("mydiv");
// element.onmouseover=dosomething;
// element.onmouseout=dosomethingelse;
element.onmousedown=dosomething;
element.onmouseup=dosomethingelse;
function dosomething(){
    element.style.backgroundColor="red";
}

function dosomethingelse(){
    element.style.backgroundColor="lightgreen";
}
*/


//.addEventListener (event,function,useCapture)
//You can add many event handlers to one element.
//Even the same event that invokes different functions

/*
const innerDiv=document.getElementById("innerDiv");
const outerDiv=document.getElementById("outerDiv");

innerDiv.addEventListener("click",changeColor);
outerDiv.addEventListener("click",changeColor,true);

function changeColor(){
    alert(`this is ${this.id}`);
    this.style.backgroundColor="lightblue";
}
*/

/*
const myButton=document.getElementById("imgButton");
const myImg=document.getElementById("myImg");

myButton.addEventListener("click",()=>{
    if(myImg.style.visibility=="hidden")
    myImg.style.visibility="visible";
    else
    myImg.style.visibility="hidden";
})
*/

/*
const myDiv=document.getElementById("myndiv");
window.addEventListener("keydown",move);
let x=0;
let y=0;
function move(event){
    switch(event.key){
        case "ArrowDown":
        y+=5;
        myDiv.style.top=y+"px";
        break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left=x+"px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top=y+"px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left=x+"px";
            break;
        default:
            break;

    }
}

*/

//Animation
/*
let myAnimation=document.getElementById("ndiv");
let mybutton=document.getElementById("nbutton");

mybutton.addEventListener("click",begin);

function begin(){
    let timerId=null;
    let degree=0;
    let x=0;
    let y=0;

    timerId=setInterval(frame,5);
    function frame(){
        if(x>200 || y>200){
            clearInterval(timerId);
        }
        else{
            degree+=10;
            x+=1;
            y+=1;
            myAnimation.style.left=x+"px";
            myAnimation.style.top=y+"px";
            myAnimation.style.transform="rotateZ("+degree+"deg)";

            //for scaling
            //myAnimation.style.transform="scale("+scaleX+","+scaleY+")";
        }
    }
    
}
*/


//canvas API = a means for drawing graphics used for animations, games, data visualization

let canvas=document.getElementById("mycanvas");
let context=canvas.getContext("2d");

//Draw lines
/*
context.strokeStyle="purple";
context.lineWidth=10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();
*/


//Draw Triangle
/*
context.strokeStyle="purple";
context.fillStyle="yellow";
context.lineWidth=10;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.fill();
context.stroke();

*/


//rectangle
/*
context.fillStyle='black';
context.fillRect(0,0,250,250);
context.strokeStyle="black";
context.strokeRect(0,0,250,250);


context.fillStyle='red';
context.fillRect(0,250,250,250);
context.strokeStyle="black";
context.strokeRect(0,250,250,250);


context.fillStyle='green';
context.fillRect(250,250,250,250);
context.strokeStyle="black";
context.strokeRect(250,250,250,250);


context.fillStyle='blue';
context.fillRect(250,0,250,250);
context.strokeStyle="black";
context.strokeRect(250,0,250,250);


*/


//Circle
/*
context.fillStyle="lightblue";
context.strokeStyle="darkblue";
context.lineWidth=10;
context.beginPath();
context.arc(250,250,200,0,2*Math.PI);
context.stroke();
context.fill();
*/

//Draw Text
/*
context.font="50px MV Boli";
context.fillStyle="grey";
context.textAlign="center";
context.fillText("YOU WIN!",canvas.width/2,canvas.height/2);

*/


//window :
// interface used t talk to the web browser 
//the DOM is a property of the window

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight)

// console.log(window.scrollX);;
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href="https://www.google.com/";


// console.log(window.location.hostname);
// console.log(window.location.pathname);

// let newbtn=document.querySelector("#openwindowbtn");
// newbtn.addEventListener("click",()=> window.open("https://google.com"));
// newbtn.addEventListener("click",()=> window.close());
// newbtn.addEventListener("click",()=> window.print());

// window.alert("hello");
// window.confirm("press ok to continue");
// let age=window.prompt("ENter your age");
// if(age<18){
// window.alert("You must be 18+");
// window.close();
// }



//cookies 
//a small text file stored on your computer used to remember information about the user saved in name=value pairs

/*
document.cookie="firstName=SpongeBob; expires=Tue,12 December 2023 12:00:00 UTC; path=/";

document.cookie="lastName=squarepants; expires=Tue,12 December 2023 12:00:00 UTC; path=/";

console.log(document.cookie);

*/
setCookie("email","sponge@gmail.com",365);
console.log(document.cookie);
deleteCookie("email");
console.log(document.cookie);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
function setCookie(name,value,daysToLive){
    const date=new Date();
    date.setTime(date.getTime()+daysToLive*24*60);
    let expires="expires="+date.toUTCString();
    document.cookie=`${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name,null,null);
}

function getCookie(name){
    const cDecoded=decodeURIComponent(document.cookie);
    const cArray=cDecoded.split("; ");
    let result=null;
    console.log("cArray");
    console.log(cArray);
    cArray.forEach(element=>{
        if(element.indexOf(name)==0){
            result=element.substring(name.length+1);
        }
    })
    return result;
}
