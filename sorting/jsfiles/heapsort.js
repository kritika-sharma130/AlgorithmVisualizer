const subContainer = document.querySelector(".sub-container");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const resetButton = document.getElementById("reset-button");
const input = document.getElementById("array-size");
var sortButton = document.getElementById("sort-button");
var generateButton = document.getElementById("generate-button");
const speed = document.getElementById("speed");

const red = "#aa1111";
const lightBlue = "#4657CE";
const darkBlue = "#24315E";
const green = "#00B589";

var delay = 300;

generateButton.onclick = () => {
  generate();
};

sortButton.onclick = () => {
  HeapSort();
};

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

// function to be executed on click of resetButton
resetButton.onclick = () => {
  window.location.reload();
  
};

input.onchange = () => {
  generateBars(parseInt(input.value));
  enableButtons();
};

speed.onchange = () => {
  delay = parseInt(speed.value);
};

//function which return promise of delay
function waitforme() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay);
  });
}

// function to generateBars of random value heights
function generateBars(num=20) {
  subContainer.innerHTML = "";
  let widthOfOneBar = (getWidth() / 100) * 4;
  subContainer.style.width = `${widthOfOneBar * num}px`;
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${(widthOfOneBar / 4) * 3}px`;
    bar.style.transform = `translateX(${widthOfOneBar * i}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar-id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    subContainer.appendChild(bar);
  }
}

// asynchronous function to perform "Selection Sort"
async function Heapify(n, i) {
  var blocks = document.querySelectorAll(".bar");
  var largest = i; 
  var l = 2 * i + 1; 
  var r = 2 * i + 2; 
  if (
    l < n &&
    Number(blocks[l].childNodes[0].innerHTML) >
    Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = l;
  if (
    r < n &&
    Number(blocks[r].childNodes[0].innerHTML) >
    Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = r;
  if (largest != i) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[largest].style.height;
    blocks[largest].style.height = temp1;
    blocks[largest].style.backgroundColor="#24315E";
    await waitforme();
    blocks[l].style.backgroundColor="#4657CE";
    blocks[i].childNodes[0].innerText =
    blocks[largest].childNodes[0].innerText;
    blocks[largest].childNodes[0].innerText = temp2;
  
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 250)
    );
    await Heapify(n, largest);
  }
  }
  async function HeapSort(n=20) {
    disableButtons();
  var blocks = document.querySelectorAll(".bar");
  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }
  for (var i = n - 1; i > 0; i--) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[0].style.height;
    blocks[i].style.backgroundColor="#00b589";
    await waitforme();
    blocks[0].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[0].childNodes[0].innerText;
    blocks[0].childNodes[0].innerText = temp2;
    blocks[i].style.backgroundColor="#00b589";
    await waitforme();
  
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 250)
    );
    await Heapify(i, 0);
  }
  enableButtons();
  }
// Call "generateBars" function
generateBars();

// function to generate new random array
function generate() {
  if (input.value != "") {
    generateBars(parseInt(input.value));
  } else {
    generateBars();
  }
}

// function to disable the buttons
function disableButtons() {
  generateButton.disabled = true;
  generateButton.style.opacity = "60%";
  sortButton.disabled = true;
  sortButton.style.opacity = "60%";
}

// // function to enable the buttons
function enableButtons() {
  generateButton.disabled = false;
  generateButton.style.opacity = "100%";
  sortButton.disabled = false;
  sortButton.style.opacity = "100%";
}

//function to get width of scren
function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }
  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }
  if (document.body) {
    return document.body.clientWidth;
  }
}

function changecolor(){
  const code=document.querySelector(".code");
  code.innerHTML="";
}
function changecode(){
  const btn=document.getElementById("#btn");
  const code1=document.querySelector(".code");
  btn.addEventListener('click',() => {
    if(code1.style.display=='none'){
      code1.style.display='block';
    }

  })
}

