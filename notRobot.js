var newImg = Math.floor(Math.random() * (5) + 1);
var img = document.createElement("img");
img.setAttribute("data-ns-test", "img" + newImg);
img.setAttribute("id", "6");
img.setAttribute("src", document.getElementById(newImg).src);


document.getElementById("main").appendChild(img);

for (var i = 1; i < 7; i++) {
    document.getElementById(i).addEventListener("click", handleImageClick);
}

var countClick = 0;
var firstClick = null;
var secondClick = null;
var firstClickId, secondClickId;

function handleImageClick(event) {
    var imgClicked = parseInt(event.target.getAttribute("id"));
    countClick++;
    if (countClick == 1) {
        firstClick = event.target.getAttribute("data-ns-test");
        firstClickId = event.target.getAttribute("id");
        var reset_button = document.createElement("button");
        reset_button.setAttribute("id", "reset");
        reset_button.addEventListener("click", handleResetClick);
        reset_button.innerHTML = "Reset";
        document.getElementById(firstClickId).removeEventListener("click", handleImageClick);
        document.getElementById("button").appendChild(reset_button);
        console.log(firstClick);
    }
    else if (countClick == 2) {
        secondClick = event.target.getAttribute("data-ns-test");
        //if (secondClick != firstClick) {
        console.log("verify function");
        var verify_button = document.createElement("button");
        secondClickId = event.target.getAttribute("id");
        verify_button.setAttribute("id", "btn");
        verify_button.addEventListener("click", handleVerifyClick);
        verify_button.innerHTML = "Verify";
        document.getElementById("button").appendChild(verify_button);
        //}



    }
    else {
        if (document.getElementById("btn") !== null) {
            document.getElementById("button").removeChild(document.getElementById("btn"));
        }

    }
}

function handleVerifyClick() {
    if (firstClick == secondClick && firstClickId !== secondClickId) {
        document.getElementById("para").innerHTML = "You are a human. Congratulations!"
    }
    else {
        document.getElementById("para").innerHTML = "We can't verify you as a human. You selected the non-identical tiles."
    }

    document.getElementById("button").removeChild(document.getElementById("reset"));
    document.getElementById("button").removeChild(document.getElementById("btn"));
}

function handleResetClick() {
    document.getElementById("main").removeChild(img);
    newImg = Math.floor(Math.random() * (5) + 1);
    img = document.createElement("img");
    img.setAttribute("data-ns-test", "img" + newImg);
    img.setAttribute("id", "6");
    img.setAttribute("src", document.getElementById(newImg).src);
    img.addEventListener("click", handleImageClick);
    document.getElementById("main").appendChild(img);
    countClick = 0;
    firstClick = "";
    secondClick = "";
    firstClickId = "";
    secondClickId = "";
    document.getElementById("button").removeChild(document.getElementById("reset"));
    if (document.getElementById("btn") !== null) {
        document.getElementById("button").removeChild(document.getElementById("btn"));
    }

}

