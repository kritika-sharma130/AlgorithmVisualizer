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
var size = 20;
generateButton.onclick = () => {
  generate();
};

sortButton.onclick = () => {
  if (input.value != "") {
    QuickSort(0, parseInt(input.value) - 1);
    size = parseInt(input.value);
  } else {
    QuickSort(0, 19);
  }
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
function generateBars(num = 20) {
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

async function hoare_partition(l, r, delay = 700) {
  var blocks = document.querySelectorAll(".bar");
  var pivot = Number(blocks[l].childNodes[0].innerHTML);

  var i = l - 1;
  var j = r + 1;

  while (true) {
    // Find leftmost element greater than
    // or equal to pivot
    do {
      i++;
      if (i - 1 >= l) blocks[i - 1].style.backgroundColor = "red";
      blocks[i].style.backgroundColor = "yellow";
      //To wait for 700 milliseconds
      await waitforme();
    } while (Number(blocks[i].childNodes[0].innerHTML) < pivot);

    // Find rightmost element smaller than
    // or equal to pivot
    do {
      j--;
      if (j + 1 <= r) blocks[j + 1].style.backgroundColor = "green";
      blocks[j].style.backgroundColor = "yellow";
      //To wait for 700 milliseconds
      await waitforme();
    } while (Number(blocks[j].childNodes[0].innerHTML) > pivot);

    // If two pointers met.
    if (i >= j) {
      for (var k = 0; k < size; k++)
        blocks[k].style.backgroundColor = "#6b5b95";
      return j;
    }

    //swapping ith and jth element
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[j].style.height;
    blocks[j].style.height = temp1;
    blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
    blocks[j].childNodes[0].innerText = temp2;
    //To wait for 700 milliseconds
    await waitforme();
  }
}

// Asynchronous QuickSort function
async function QuickSort(l, r) {
  // QuickSort Algorithm
  disableButtons();
  if (l < r) {
    //Storing the index of pivot element after partition
    var pivot_idx = await hoare_partition(l, r);
    //Recursively calling quicksort for left partition
    await QuickSort(l, pivot_idx);
    //Recursively calling quicksort for right partition
    await QuickSort(pivot_idx + 1, r);
  } else {
    enableButtons();
  }
}
