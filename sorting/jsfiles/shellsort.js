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
  ShellSort();
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

// asynchronous function to perform "Selection Sort"
async function ShellSort(delay = 200) {
	disableButtons();
	let bars = document.querySelectorAll(".bar");

	for (var i = 10; i > 0; i = Math.floor(i / 2)) {

		// To pause the execution of code
		// for 300 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);

		for (var j = i; j < 20; j++) {
			var temp = parseInt(
				bars[j].childNodes[0].innerHTML);
			var k;

			var temp1 = bars[j].style.height;
			var temp2 = bars[j].childNodes[0].innerText;

			for (
				k = j;
				k >= i && parseInt(bars[k - i]
					.childNodes[0].innerHTML) > temp;
				k -= i
			) {
				bars[k].style.height
						= bars[k - i].style.height;

				bars[k].childNodes[0].innerText =
					bars[k - i].childNodes[0].innerText;

				// To pause the execution of code
				// for 300 milliseconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 300)
				);
			}

			// Provide darkblue color to the jth bar
			bars[j].style.backgroundColor = "#24315e";

			// Provide darkblue color to the kth bar
			bars[k].style.backgroundColor = "#4657ce";
			bars[k].style.height = temp1;
			bars[k].childNodes[0].innerText = temp2;

			// To pause the execution of code for
			// 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);

			// Provide skyblue color to the jth bar
bars[j].style.backgroundColor = "#00B589";

			// Provide skyblue color to the kth bar
			bars[k].style.backgroundColor = "#24315E";

			// To pause the execution of code for
			// 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
		}
	}
	for (var x = 0; x < 20; x++) {
		bars[x].style.backgroundColor
			= "#00b589";
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
