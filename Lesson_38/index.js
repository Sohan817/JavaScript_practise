var heading3 = document.createElement("h1");
var text = document.createTextNode("This is Heading 2");

heading3.appendChild(text);

var My_div = document.getElementById("my_div");

My_div.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[1];

My_div.removeChild(heading2);

var heading1 = document.getElementsByTagName("h1")[0];

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is Heading 0");

heading0.appendChild(text0);

My_div.insertBefore(heading0 , heading1);

