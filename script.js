var i = 0;
var text = "Algorithm Visualiser";
type();
function type() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 200);
  } else {
    i = 0;
    document.getElementById("text").innerHTML = "";
    setTimeout(type, 50);
  }
}

var counter = 1;
setInterval(function () {
  document.getElementById ? (("radio" + counter).checked = true) : counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
