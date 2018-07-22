var clickMeButton = document.querySelector("button");
//var isWhite = true;

// clickMeButton.addEventListener("click", function() {
//     if(isWhite) {
//         document.body.style.background = "purple";   
//     }
//     else {
//         document.body.style.background = "white";
//     }
//     isWhite = !isWhite;
//});

//Another option - toggle style class
clickMeButton.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});