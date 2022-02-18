$(function () {
    //Add a button to the container div for the first step
    let $container1 = $("#step-1-container");
    let $btn1 = $("<button>Click me!</button>");
    $container1.append($btn1);
    $btn1.on("click", function () {
        alert("This is an alert message from jQuery!");
    });

    let $step2FormInput = $("#step-2-form input");
    let $step2FormButton = $("#step-2-form button");
    $step2FormButton.on("click", function (event) {
        event.preventDefault();
        alert($step2FormInput.val());
    });

    let $container3 = $("#step-3-container");
    $container3.on("mouseenter", function () {
        $container3.css("background", "aquamarine");
    });
    $container3.on("mouseleave", function () {
        $container3.css("background", "white");
    });

    let $container4 = $("#step-4-container");
    let $paragraph = $("<p></p>");
    $paragraph.append("Click on this text to change its color!");
    $paragraph.on("click", function () {
        //generate a trio of random numbers representing a color
        let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
        //Set the text color to the value generated using a template literal to construct the color string
        $paragraph.css("color", `rgb(${r}, ${g}, ${b}`);
    });
    $container4.append($paragraph);

    let $container5 = $("#step-5-container");
    let $btn2 = $("<button>Click me!</button>");
    let $spanDiv = $("<div></div>");
    $container5.append($btn2);
    $container5.append($spanDiv);
    $btn2.on("click", function () {
        let $span = $("<span>My name is Andrew Beaudrie, or OBP Super Gamer, or Leftover Sundriez Man <span>");
        $spanDiv.append($span);
    }
    );

    let friends = ["Reid", "Roderick", "Adam", "Aric", "Kurt", "ShadyParadox", "Zero-Control", "Spectre", "Veenasty", "EdgyGrandpa"];
    let friendsAdded = 0;
    let friendList = $("#friend-list");
    let $btn3 = $("#friend-add");
    console.log($btn3);
    $btn3.on("click", function () {
        if (friendsAdded < 10) {
            let listItem = $("<li></li>");
            listItem.append(friends[friendsAdded]);
            friendList.append(listItem);
            friendsAdded += 1;
        }
    });
});
