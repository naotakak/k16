/***
 Naotaka Kinoshita and Shakil Rafi
 SoftDev1 Pd7
 K16 - Sequential Progression
 2017-12-11
 ***/

// add list items on button click
var listNum = 8;
var list = document.getElementById("thelist");
var addListItem = function () {
    var newListItem = document.createElement("li");
    newListItem.innerHTML = "item " + listNum;
    // add event listeners for later as well
    newListItem.addEventListener("mouseover", changeHeading);
    newListItem.addEventListener("click", removeListItem);
    list.appendChild(newListItem);
    listNum++;
}
document.getElementById("b").addEventListener("click", addListItem);

// change heading on hover
var heading = document.getElementById("h");
var changeHeading = function () {
    heading.innerHTML = this.innerHTML;
}

// reset heading to Hello World! on mouseout
var resetHeading = function () {
    heading.innerHTML = "Hello World!";
}
list.addEventListener("mouseout", resetHeading);

// remove list item on click
var removeListItem = function () {
    this.remove();
}

// add event listeners to all list items
var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", changeHeading);
    listItems[i].addEventListener("click", removeListItem);
}
