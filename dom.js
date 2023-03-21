var itemlist = document.querySelector("#items");

//%%%%%%%%%%%%%%%% parent %%%%%%%%%%%%%%%%
//~~~~~~~~~~~parent node
// var itemlist = document.querySelector("#items");
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "pink";
// console.log(itemlist.parentNode.parentNode.parentNode);

//*******~~~~~~~parent node and parent element one of the same */

//~~~~~~~~parentElement
// var itemlist = document.querySelector("#items");
// console.log(itemlist.parentElement);

//%%%%%%%%%%%%%%% children %%%%%%%%%%%%%%%%%%%%%
//~~~~~~~childnodes
// console.log(itemlist.childNodes);

//*******~~~~~~child node and children are different
// child takes entire elements like text new lines etc
//but children takes only specific children like li

// ~~~~~children
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor = "yellow";

//~~~~~~~~firstChild
//it is not like children its like child so it will give text node than li

//~~~~~~~*****firstChild and firstElment are differently work

//~~~~~~first element child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor = "orange";

//~~~~~~~~~last child
// console.log(itemlist.lastChild);

//~~~~~last element child
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.style.backgroundColor = "purple";

// %%%%%%%%%%%%%%%%%%%%%%% sibling %%%%%%%%%%%%%%%%%%%%%%%%%
//next sibling
// const form = document.querySelector("form");
// console.log(form.nextSibling);

//next element sibling
// console.log(form.nextElementSibling);
// form.nextElementSibling.innerHTML = "hello";

//previous sibling
// const form = document.querySelector("form");
// console.log(form.previousSibling);

//previous element sibling
// console.log(form.nextElementSibling);
// form.previousElementSibling.style.color = "red";

// %%%%%%%%%%%%%% create elements %%%%%%%%%%%%%%%%%%%
// ~~~~~create div

// var newDiv = document.createElement("div");
// //~~~~add class
// newDiv.className = "divclass";

// //~~~~~~addid
// newDiv.id = "divid";

// //~~~~~~~~addAttr
// newDiv.setAttribute("title", "hellodiv");

// newDiv.innerHTML = "<h1>hello</h1>";
// console.log(newDiv);

//~~~~~~*************createTextNode
//it will act like console.log
// var newDivText = document.createTextNode("hello world");

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector ("header h1");

// console.log(newDiv);

// container.insertBefore(newDiv);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% assignment 1%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var newDiv = document.createElement("div");

var newDivText = document.createTextNode("hello world");

// console.log(newDivText);

newDiv.appendChild(newDivText);

// console.log(newDiv);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

// console.log(newDiv);

container.insertBefore(newDiv, h1);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% assignment 2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var newDiv = document.createElement("div");

var newDivText = document.createTextNode("hello world");

newDiv.appendChild(newDivText);
var additems = document.querySelector("div #main");

var li = document.querySelector("li #item1");

additems.insertBefore(newDiv, li);
