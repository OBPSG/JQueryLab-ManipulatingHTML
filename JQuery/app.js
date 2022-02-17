//Add a button to the container div for the first step
$(function (){
    let $container1 = $("#step-1-container");
    let $btn1 = $("<button>Click me!</button>");
    $container1.append($btn1);
    $btn1.on("click", function(){
        alert("This is an alert message from jQuery!");
    })
});
