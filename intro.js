/***
 Naotaka Kinoshita and Shakil Rafi
 SoftDev1 Pd7
 K16 - Sequential Progression
 2017-12-11
 ***/

// =================== PHASE III =================== \\

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

// =================== PHASE IV =================== \\

var body = document.getElementsByTagName("body")[0];

//adds list to body with a heading and button to add list items
var addList = function(header, func) {
    var seqHeader = document.createElement('h1');
    seqHeader.innerHTML = header;
    var seqList = document.createElement('ol');
    //setting an id allows for functions to reference list
    seqList.setAttribute("id", header + "List");
    var seqButton = document.createElement('button');
    seqButton.innerHTML = header;
    var seButtonFunction = function(e) {
        var listElement = document.createElement("li");
        listElement.innerHTML = func();
        seqList.appendChild(listElement);
    };
    seqButton.addEventListener("click", seButtonFunction);
    //put everything in body
    body.appendChild(seqHeader);
    body.appendChild(seqList);
    body.appendChild(seqButton);
};

var fibonacci = function() {
    var fibList = document.getElementById("FibonacciList");
    var length = fibList.children.length;
    if (length < 2) {
        return 1;
    } else {
        //use previoud two numbers to calculate the next number
        var num1 = parseInt(fibList.children[length - 2].innerHTML);
        var num2 = parseInt(fibList.children[length - 1].innerHTML);
        return num1 + num2;
    }
};
addList("Fibonacci", fibonacci);

var timesTwo = function() {
    var timesTwoList = document.getElementById("TimesTwoList");
    var length = timesTwoList.children.length;
    if (length < 1) {
        return 1;
    } else {
        return parseInt(timesTwoList.children[length - 1].innerHTML) * 2;
    }
}
addList("TimesTwo", timesTwo);

var addN = function() {
    var addNList = document.getElementById("AddNList");
    var length = addNList.children.length;
    if (length < 1) {
        return 1;
    } else {
        return parseInt(addNList.children[length - 1].innerHTML) + length;
    }
}
addList("AddN", addN);

/*
var list2 = document.createElement("ol");
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
    listElement.innerHTML = parseInt(list2.children[fibNum - 2].innerHTML) + parseInt(list2.children[fibNum - 3].innerHTML);
  }
  fibNum ++;
  list2.appendChild(listElement);
}

button2.addEventListener('click', butt2);

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
*/
