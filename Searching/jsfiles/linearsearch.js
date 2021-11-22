var container = document.getElementById("array");
const subContainer = document.querySelector(".sub-container");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const resetButton = document.getElementById("reset-button");
const input = document.getElementById("array-size");
var searchButton = document.getElementById("search-button");
var generateButton = document.getElementById("generate-button");
const speed = document.getElementById("speed");
var delay = 300;
const red = "#aa1111";
const lightBlue = "#4657CE";
const darkBlue = "#24315E";
const green = "#00B589";

// function to be executed on click of hamburger icon
menu.onclick = () => {
  about.style.left = "0px";
  overlay.style.display = "block";
};

// function to be executed on click on overlay
overlay.onclick = () => {
  about.style.left = "-55%";
  overlay.style.display = "none";
};

generateButton.onclick = () => {
  generate();
};
searchButton.onclick = () => {
  LinearSearch();
};
input.onchange = () => {
  generatearray(parseInt(input.value));
  enableButtons();
};

speed.onchange = () => {
  delay = parseInt(speed.value);
};

// Function to generate the array of blocks
function generatearray() {
  subContainer.innerHTML = "";
  for (var i = 0; i < 20; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}
resetButton.onclick = () => {
  window.location.reload();
};

// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
  disableButtons();
  var blocks = document.querySelectorAll(".block");
  var output = document.getElementById("text");

  //Extracting the value entered by the user
  var num = document.getElementById("fname").value;

  //Changing the color of all the blocks to red
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#aa1111";
  }

  output.innerText = "";

  var flag = 0;
  // LinearSearch Algorithum
  for (var i = 0; i < blocks.length; i += 1) {
    //Changing the color of current block to blue
    blocks[i].style.backgroundColor = "#4657CE";

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    //Extracting the value of current block
    var value = Number(blocks[i].childNodes[0].innerHTML);

    // To compare block value with entered value
    if (value == num) {
      flag = 1;
      output.innerText = "Element Found";
      blocks[i].style.backgroundColor = "#00B589";
      break;
    } else {
      // Changing the color to the previous one
      blocks[i].style.backgroundColor = "#24315E";
    }
  }
  //When element is not found in the array
  if (flag == 0) {
    output.innerText = "Element Not Found";
  }
  enableButtons();
}

// Calling generatearray function
generatearray();

function generate() {
  if (input.value != "") {
    generatearray(parseInt(input.value));
  } else {
    generatearray();
  }
}
function disableButtons() {
  generateButton.disabled = true;
  generateButton.style.opacity = "60%";
  searchButton.disabled = true;
  searchButton.style.opacity = "60%";
}

// // function to enable the buttons
function enableButtons() {
  generateButton.disabled = false;
  generateButton.style.opacity = "100%";
  searchButton.disabled = false;
  searchButton.style.opacity = "100%";
}
