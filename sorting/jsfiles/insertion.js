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

c.onclick = () => {
  console.log("c clicked");
  console.log(codeSnippet.text);
  codeSnippet.innerText = `// C program for insertion sort
  #include <math.h>
  #include <stdio.h>
  
  /* Function to sort an array using insertion sort*/
  void insertionSort(int arr[], int n)
  {
    int i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
  
      /* Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position */
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // A utility function to print an array of size n
  void printArray(int arr[], int n)
  {
    int i;
    for (i = 0; i < n; i++)
      printf("%d ", arr[i]);
    printf("\n");
  }
  
  /* Driver program to test insertion sort */
  int main()
  {
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);
  
    insertionSort(arr, n);
    printArray(arr, n);
  
    return 0;
  }
  `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ program for insertion sort
  #include <bits/stdc++.h>
  using namespace std;
  
  /* Function to sort an array using insertion sort*/
  void insertionSort(int arr[], int n)
  {
    int i, key, j;
    for (i = 1; i < n; i++)
    {
      key = arr[i];
      j = i - 1;
  
      /* Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position */
      while (j >= 0 && arr[j] > key)
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // A utility function to print an array of size n
  void printArray(int arr[], int n)
  {
    int i;
    for (i = 0; i < n; i++)
      cout << arr[i] << " ";
    cout << endl;
  }
  
  /* Driver code */
  int main()
  {
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);
  
    insertionSort(arr, n);
    printArray(arr, n);
  
    return 0;
  }
      `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java program for implementation of Insertion Sort
  class InsertionSort {
    /*Function to sort array using insertion sort*/
    void sort(int arr[])
    {
      int n = arr.length;
      for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
  
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
    }
  
    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
      int n = arr.length;
      for (int i = 0; i < n; ++i)
        System.out.print(arr[i] + " ");
  
      System.out.println();
    }
  
    // Driver method
    public static void main(String args[])
    {
      int arr[] = { 12, 11, 13, 5, 6 };
  
      InsertionSort ob = new InsertionSort();
      ob.sort(arr);
  
      printArray(arr);
    }
  } /* This code is contributed by Rajat Mishra. */
  
     `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python program for implementation of Insertion Sort

  # Function to do insertion sort
  def insertionSort(arr):
  
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
  
      key = arr[i]
  
      # Move elements of arr[0..i-1], that are
      # greater than key, to one position ahead
      # of their current position
      j = i-1
      while j >= 0 and key < arr[j] :
          arr[j + 1] = arr[j]
          j -= 1
      arr[j + 1] = key
  
  
  # Driver code to test above
  arr = [12, 11, 13, 5, 6]
  insertionSort(arr)
  for i in range(len(arr)):
    print ("% d" % arr[i])
    `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>
  // Javascript program for insertion sort
  
  // Function to sort an array using insertion sort
  function insertionSort(arr, n)
  {
    let i, key, j;
    for (i = 1; i < n; i++)
    {
      key = arr[i];
      j = i - 1;
  
      /* Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position */
      while (j >= 0 && arr[j] > key)
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // A utility function to print an array of size n
  function printArray(arr, n)
  {
    let i;
    for (i = 0; i < n; i++)
      document.write(arr[i] + " ");
    document.write("<br>");
  }
  
  // Driver code
    let arr = [12, 11, 13, 5, 6 ];
    let n = arr.length;
  
    insertionSort(arr, n);
    printArray(arr, n);  
  </script>
  
  `;
};
const red = "#aa1111";
const lightBlue = "#4657CE";
const green = "#00B589";

var delay = 300;

generateButton.onclick = () => {
  generate();
};

sortButton.onclick = () => {
  insertionSort();
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

// Asynchronous function to perform "Insertion Sort"
async function insertionSort(delay = 600) {
  disableButtons();
  let bars = document.querySelectorAll(".bar");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = green;
  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    // For selecting section having id "ele"
    var selectedBarValue = document.getElementById("element");

    // For dynamically Updating the selected element
    selectedBarValue.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    //Provide lightBlue color to the ith bar
    bars[i].style.backgroundColor = lightBlue;

    // To pause the execution of code for 600 milliseconds
    await waitforme();

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      // Provide lightBlue color to the jth bar
      bars[j].style.backgroundColor = lightBlue;

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await waitforme();

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = green;
      }
    }

    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await waitforme();

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = green;
  }

  selectedBarValue.innerHTML = "<h3>Sorted!!!</h3>";

  enableButtons();
}
