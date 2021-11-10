const container = document.querySelector(".sub-container");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const reset = document.getElementById("reset-button");

menu.onclick = () => {
  about.style.left = "0px";
  overlay.style.display = "block";
};

overlay.onclick = () => {
  about.style.left = "-55%";
  overlay.style.display = "none";
};

function generatebars(num = 20) {
  const bar = document.querySelector(".sub-container");
  bar.innerHTML = "";
  container.style.width = `${(getWidth() / 100) * num * 4}px`;
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${(getWidth() / 100) * 3}px`;
    bar.style.transform = `translateX(${i * (getWidth() / 100) * 4}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

var delay = 300;
// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 100) {
  disableButtons();
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[i].style.backgroundColor = "#24315E";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "#4657CE";
      await waitforme();
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = "#aa1111";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = "#aa1111";
      }
    }
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await waitforme();
    bars[min_idx].style.backgroundColor = " #aa1111";
    bars[i].style.backgroundColor = "#00B589";
  }
  enableButtons();
}

var input = document.getElementById("array-size");

input.onchange = () => {
  generatebars(parseInt(input.value));
};

var speed = document.getElementById("speed");

speed.onchange = () => {
  delay = parseInt(speed.value);
};

function waitforme() {
  if (speed.value != "") {
    milisec = parseInt(speed.value);
  } else {
    milisec = 300;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

reset.onclick = () => {
  window.location.reload();
};

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate() {
  if (input.value != "") {
    generatebars(parseInt(input.value));
  } else {
    generatebars();
  }
}

// function to disable the buttons
function disableButtons() {
  document.getElementById("generate-button").disabled = true;
  document.getElementById("generate-button").style.opacity = "60%";
  document.getElementById("sort-button").disabled = true;
  document.getElementById("sort-button").style.opacity = "60%";
  //document.getElementById("reset-button").disabled = true;
  //document.getElementById("reset-button").style.opacity = "60%";
}

// function to enable the buttons
function enableButtons() {
  document.getElementById("generate-button").disabled = false;
  document.getElementById("generate-button").style.opacity = "100%";
  document.getElementById("sort-button").disabled = false;
  document.getElementById("sort-button").style.opacity = "100%";
  //document.getElementById("reset-button").disabled = false;
  //document.getElementById("reset-button").style.opacity = "100%";
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
