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

var list2 = document.createElement("ol");
var body = document.getElementsByTagName("body")[0];
body.appendChild(list2);

var button2 = document.createElement("button");
button2.innerHTML = "button2";
body.appendChild(button2);

var fibNum = 1;
var fibonacci = function(n) {
  if (n == 0) {
    return 0;
  }
  if ((n == 1)||(n == 2)) {
    return 1;
  }
  else {
    return (fibonacci(n - 1) + fibonacci(n - 2));
  }
}

var timesNum = 1;
var times2 = function(n) {
  return Math.pow(2, n);
}

var butt2 = function() {
  var listElement = document.createElement("li");
  if (fibNum < 2) {
    listElement.innerHTML = fibonacci(fibNum);
  }
  else {
    console.log(list2[fibNum]);
    listElement.innerHTML = parseInt(list2.children[fibNum - 1].innerHTML) + parseInt(list2.children[fibNum - 2].innerHTML);
  }
  fibNum ++;
  list2.appendChild(listElement);
}

var list3 = document.createElement("ol");
body.appendChild(list3);

var button3 = document.createElement("button");
button3.innerHTML = "button3";
body.appendChild(button3);

var butt3 = function() {
  var listElement = document.createElement("li");
  listElement.innerHTML = times2(timesNum);
  timesNum ++;
  list3.appendChild(listElement);
}

button2.addEventListener('click', butt2);
button3.addEventListener('click', butt3);

var hexNum = 1;
var hexagon = function(n) {
  return 2 * n * n - n;
}

var list4 = document.createElement("ol");
body.appendChild(list4);

var button4 = document.createElement("button");
button4.innerHTML = "button4";
body.appendChild(button4);

var butt4 = function() {
  var listElement = document.createElement("li");
  listElement.innerHTML = hexNum(hexNum);
  hexNum ++;
  list4.appendChild(listElement);
}
