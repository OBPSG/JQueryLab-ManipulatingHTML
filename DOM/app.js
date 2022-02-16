let btn1 = document.createElement("button");
btn1.appendChild(document.createTextNode("Click me!"));
let container1 = document.querySelector("#step-1-container");
container1.appendChild(btn1);
btn1.addEventListener("click", function() {
    alert("This is an alert!");
});

let btn2 = document.querySelector("#step-2-form > button");
btn2.addEventListener("click", function(){
    let textInput = document.querySelector("#step-2-form > input");
    alert(textInput.value);
});