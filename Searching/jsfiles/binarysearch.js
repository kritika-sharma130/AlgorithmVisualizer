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
  binarySearch();
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
  var arr = [];

  for (var i = 0; i < num; i++) {
    var val = Number(Math.ceil(Math.random() * 100) + 1);
    arr.push(val);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  subContainer.innerHTML = "";
  let widthOfOneBar = (getWidth() / 100) * 4;
  subContainer.style.width = `${widthOfOneBar * num}px`;
  for (let i = 0; i < num; i += 1) {
    const value = arr[i];
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
async function binarySearch() {
  disableButtons();
  var blocks = document.querySelectorAll(".bar");
  var output = document.getElementById("output");

  var num = document.getElementById("fname").value;
  output.innerText = "";

  var start = 0;
  var end = blocks.length - 1;
  var flag = 0;
  while (start <= end) {
    //Middle index
    var mid = Math.floor((start + end) / 2);
    blocks[mid].style.backgroundColor = darkBlue;

    var value = Number(blocks[mid].childNodes[0].innerHTML);

    await waitforme();

    if (value == num) {
      output.innerText = "Element Found";
      blocks[mid].style.backgroundColor = green;
      flag = 1;
      break;
    }

    if (value > num) {
      end = mid - 1;
      blocks[mid].style.backgroundColor = red;
    } else {
      start = mid + 1;
      blocks[mid].style.backgroundColor = red;
    }
  }
  if (flag === 0) {
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
  codeSnippet.innerText = `// C program to implement recursive Binary Search
  #include <stdio.h>
  
  // A recursive binary search function. It returns
  // location of x in given array arr[l..r] is present,
  // otherwise -1
  int binarySearch(int arr[], int l, int r, int x)
  {
    if (r >= l) {
      int mid = l + (r - l) / 2;
  
      // If the element is present at the middle
      // itself
      if (arr[mid] == x)
        return mid;
  
      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);
  
      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, mid + 1, r, x);
    }
  
    // We reach here when element is not
    // present in array
    return -1;
  }
  
  int main(void)
  {
    int arr[] = { 2, 3, 4, 10, 40 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1)
      ? printf("Element is not present in array")
      : printf("Element is present at index %d", result);
    return 0;
  }  
  `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ program to implement recursive Binary Search
  #include <bits/stdc++.h>
  using namespace std;
  
  // A recursive binary search function. It returns
  // location of x in given array arr[l..r] is present,
  // otherwise -1
  int binarySearch(int arr[], int l, int r, int x)
  {
    if (r >= l) {
      int mid = l + (r - l) / 2;
  
      // If the element is present at the middle
      // itself
      if (arr[mid] == x)
        return mid;
  
      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);
  
      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, mid + 1, r, x);
    }
  
    // We reach here when element is not
    // present in array
    return -1;
  }
  
  int main(void)
  {
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1)
      ? cout << "Element is not present in array"
      : cout << "Element is present at index " << result;
    return 0;
  }
  
  `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java implementation of recursive Binary Search
  class BinarySearch {
    // Returns index of x if it is present in arr[l..
    // r], else return -1
    int binarySearch(int arr[], int l, int r, int x)
    {
      if (r >= l) {
        int mid = l + (r - l) / 2;
  
        // If the element is present at the
        // middle itself
        if (arr[mid] == x)
          return mid;
  
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
          return binarySearch(arr, l, mid - 1, x);
  
        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
      }
  
      // We reach here when element is not present
      // in array
      return -1;
    }
  
    // Driver method to test above
    public static void main(String args[])
    {
      BinarySearch ob = new BinarySearch();
      int arr[] = { 2, 3, 4, 10, 40 };
      int n = arr.length;
      int x = 10;
      int result = ob.binarySearch(arr, 0, n - 1, x);
      if (result == -1)
        System.out.println("Element not present");
      else
        System.out.println("Element found at index "
                + result);
    }
  }
  /* This code is contributed by Rajat Mishra */
  
  `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python3 Program for recursive binary search.

  # Returns index of x in arr if present, else -1
  
  
  def binarySearch(arr, l, r, x):
  
    # Check base case
    if r >= l:
  
      mid = l + (r - l) // 2
  
      # If element is present at the middle itself
      if arr[mid] == x:
        return mid
  
      # If element is smaller than mid, then it
      # can only be present in left subarray
      elif arr[mid] > x:
        return binarySearch(arr, l, mid-1, x)
  
      # Else the element can only be present
      # in right subarray
      else:
        return binarySearch(arr, mid + 1, r, x)
  
    else:
      # Element is not present in the array
      return -1
  
  
  # Driver Code
  arr = [2, 3, 4, 10, 40]
  x = 10
  
  # Function call
  result = binarySearch(arr, 0, len(arr)-1, x)
  
  if result != -1:
    print("Element is present at index % d" % result)
  else:
    print("Element is not present in array")
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>
  // JavaScript program to implement recursive Binary Search
  
  // A recursive binary search function. It returns
  // location of x in given array arr[l..r] is present,
  // otherwise -1
  function binarySearch(arr, l, r, x){
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
  
      // If the element is present at the middle
      // itself
      if (arr[mid] == x)
        return mid;
  
      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);
  
      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, mid + 1, r, x);
    }
  
    // We reach here when element is not
    // present in array
    return -1;
  }
  
  let arr = [ 2, 3, 4, 10, 40 ];
  let x = 10;
  let n = arr.length
  let result = binarySearch(arr, 0, n - 1, x);
  (result == -1) ? document.write( "Element is not present in array")
          : document.write("Element is present at index " +result);
  </script>
   `;
};
