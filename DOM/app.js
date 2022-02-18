let btn1 = document.createElement("button");
btn1.appendChild(document.createTextNode("Click me!"));
let container1 = document.querySelector("#step-1-container");
container1.appendChild(btn1);
btn1.addEventListener("click", function () {
    alert("This is an alert!");
});

let btn2 = document.querySelector("#step-2-form > button");
btn2.addEventListener("click", function () {
    let textInput = document.querySelector("#step-2-form > input");
    alert(textInput.value);
});

let container3 = document.querySelector("#step-3-container");
container3.addEventListener("mouseover", function (event) {
    container3.style.backgroundColor = "aquamarine";
});
container3.addEventListener("mouseleave", function (event) {
    container3.style.backgroundColor = "white";
});

let container4 = document.querySelector("#step-4-container");
let newP = document.createElement("p");
newP.textContent = "Click on this text to change its color!";
newP.addEventListener("click", function () {
    //newP.style.color = "red";
    //generate a trio of random numbers representing a color
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    //Set the text color to the value generated using a template literal to construct the color string
    newP.style.color = `rgb(${r}, ${g}, ${b}`;
});
container4.appendChild(newP);

let container5 = document.querySelector("#step-5-container");
let btn3 = document.createElement("button");
btn3.textContent = "Click me!";
container5.appendChild(btn3);
let spanDiv = document.createElement("div");
btn3.addEventListener("click", function()
{
    let span = document.createElement("span");
    span.textContent = "My name is Andrew Beaudrie."
    spanDiv.appendChild(span);
});
container5.appendChild(spanDiv);

let friends = ["Reid", "Roderick", "Adam", "Aric", "Kurt", "ShadyParadox", "Zero-Control", "Spectre", "Veenasty", "EdgyGrandpa"];
let friendsAdded = 0;

let friendAddButton = document.getElementById("friend-add");
let friendList = document.getElementById("friend-list");

friendAddButton.addEventListener("click", function()
{
    if(friendsAdded < 10)
    {
        let listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(friends[friendsAdded]));
        friendList.appendChild(listItem);
        friendsAdded += 1;
    }
});
