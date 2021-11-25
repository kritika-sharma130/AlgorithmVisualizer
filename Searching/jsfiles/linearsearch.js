const subContainer = document.querySelector(".sub-container");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const resetButton = document.getElementById("reset-button");
const input = document.getElementById("array-size");
var sortButton = document.getElementById("sort-button");
var generateButton = document.getElementById("generate-button");
const speed = document.getElementById("speed");

const c = document.getElementById("C");
const cPlusPlus = document.getElementById("C++");
const java = document.getElementById("java");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");
const codeSnippet = document.getElementById("code-snippet");

const red = "#aa1111";
const lightBlue = "#4657CE";
const darkBlue = "#24315E";
const green = "#00B589";

var delay = 300;

generateButton.onclick = () => {
  generate();
};

sortButton.onclick = () => {
  linearSearch();
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

// asynchronous function to perform "Linear Search"
async function linearSearch() {
  disableButtons();
  var blocks = document.querySelectorAll(".bar");
  var output = document.getElementById("output");

  //Extracting the value entered by the user
  var num = document.getElementById("fname").value;

  //Changing the color of all the blocks to voilet
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = red;
  }

  output.innerText = "";

  var flag = 0;
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = darkBlue;

    await waitforme();

    var value = Number(blocks[i].childNodes[0].innerHTML);

    if (value == num) {
      flag = 1;
      output.innerText = "Element Found";
      blocks[i].style.backgroundColor = green;
      break;
    } else {
      blocks[i].style.backgroundColor = red;
    }
  }
  if (flag == 0) {
    output.innerText = "Element Not Found";
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

c.onclick = () => {
  console.log("c clicked");
  console.log(codeSnippet.text);
  codeSnippet.innerText = `// C code to linearly search x in arr[]. If x
  // is present then return its location, otherwise
  // return -1
  
  #include <stdio.h>
  
  int search(int arr[], int n, int x)
  {
    int i;
    for (i = 0; i < n; i++)
      if (arr[i] == x)
        return i;
    return -1;
  }
  
  // Driver code
  int main(void)
  {
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
  
    // Function call
    int result = search(arr, n, x);
    (result == -1)
      ? printf("Element is not present in array")
      : printf("Element is present at index %d", result);
    return 0;
  }
  `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ code to linearly search x in arr[]. If x
  // is present then return its location, otherwise
  // return -1
  
  #include <iostream>
  using namespace std;
  
  int search(int arr[], int n, int x)
  {
    int i;
    for (i = 0; i < n; i++)
      if (arr[i] == x)
        return i;
    return -1;
  }
  
  // Driver code
  int main(void)
  {
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
  
    // Function call
    int result = search(arr, n, x);
    (result == -1)
      ? cout << "Element is not present in array"
      : cout << "Element is present at index " << result;
    return 0;
  }
  `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java code for linearly searching x in arr[]. If x
  // is present then return its location, otherwise
  // return -1
  
  class GFG
  {
    public static int search(int arr[], int x)
    {
      int n = arr.length;
      for (int i = 0; i < n; i++)
      {
        if (arr[i] == x)
          return i;
      }
      return -1;
    }
  
    // Driver code
    public static void main(String args[])
    {
      int arr[] = { 2, 3, 4, 10, 40 };
      int x = 10;
  
      // Function call
      int result = search(arr, x);
      if (result == -1)
        System.out.print(
          "Element is not present in array");
      else
        System.out.print("Element is present at index "
                + result);
    }
  }
  
  `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python3 code to linearly search x in arr[].
  # If x is present then return its location,
  # otherwise return -1
  
  
  def search(arr, n, x):
  
    for i in range(0, n):
      if (arr[i] == x):
        return i
    return -1
  
  
  # Driver Code
  arr = [2, 3, 4, 10, 40]
  x = 10
  n = len(arr)
  
  # Function call
  result = search(arr, n, x)
  if(result == -1):
    print("Element is not present in array")
  else:
    print("Element is present at index", result)
  
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `
<script>

// Javascript code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

function search(arr, n, x)
{
	let i;
	for (i = 0; i < n; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver code

	let arr = [ 2, 3, 4, 10, 40 ];
	let x = 10;
	let n = arr.length;

	// Function call
	let result = search(arr, n, x);
	(result == -1)
		? document.write("Element is not present in array")
		: document.write("Element is present at index " + result);

// This code is contributed by Manoj

</script>

  `;
};
