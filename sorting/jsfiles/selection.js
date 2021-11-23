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
  codeSnippet.innerText = `// C program for implementation of selection sort
  #include <stdio.h>
  
  void swap(int *xp, int *yp)
  {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
  }
  
  void selectionSort(int arr[], int n)
  {
    int i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i+1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
  
      // Swap the found minimum element with the first element
      swap(&arr[min_idx], &arr[i]);
    }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int size)
  {
    int i;
    for (i=0; i < size; i++)
      printf("%d ", arr[i]);
    printf("\n");
  }
  
  // Driver program to test above functions
  int main()
  {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
  }`;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ program for implementation of selection sort
  #include <bits/stdc++.h>
  using namespace std;
  
  void swap(int *xp, int *yp)
  {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
  }
  
  void selectionSort(int arr[], int n)
  {
    int i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i+1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
  
      // Swap the found minimum element with the first element
      swap(&arr[min_idx], &arr[i]);
    }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int size)
  {
    int i;
    for (i=0; i < size; i++)
      cout << arr[i] << " ";
    cout << endl;
  }
  
  // Driver program to test above functions
  int main()
  {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    cout << "Sorted array: \n";
    printArray(arr, n);
    return 0;
  }
  
  // This is code is contributed by rathbhupendra
  `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java program for implementation of Selection Sort
  class SelectionSort
  {
    void sort(int arr[])
    {
      int n = arr.length;
  
      // One by one move boundary of unsorted subarray
      for (int i = 0; i < n-1; i++)
      {
        // Find the minimum element in unsorted array
        int min_idx = i;
        for (int j = i+1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
  
        // Swap the found minimum element with the first
        // element
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
      }
    }
  
    // Prints the array
    void printArray(int arr[])
    {
      int n = arr.length;
      for (int i=0; i<n; ++i)
        System.out.print(arr[i]+" ");
      System.out.println();
    }
  
    // Driver code to test above
    public static void main(String args[])
    {
      SelectionSort ob = new SelectionSort();
      int arr[] = {64,25,12,22,11};
      ob.sort(arr);
      System.out.println("Sorted array");
      ob.printArray(arr);
    }
  }
  /* This code is contributed by Rajat Mishra*/
  `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python program for implementation of Selection
  # Sort
  import sys
  A = [64, 25, 12, 22, 11]
  
  # Traverse through all array elements
  for i in range(len(A)):
    
    # Find the minimum element in remaining
    # unsorted array
    min_idx = i
    for j in range(i+1, len(A)):
      if A[min_idx] > A[j]:
        min_idx = j
        
    # Swap the found minimum element with
    # the first element	
    A[i], A[min_idx] = A[min_idx], A[i]
  
  # Driver code to test above
  print ("Sorted array")
  for i in range(len(A)):
    print("%d" %A[i]),
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>
  // Javascript program for implementation of selection sort
  function swap(arr,xp, yp)
  {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  
  function selectionSort(arr, n)
  {
    var i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
  
      // Swap the found minimum element with the first element
      swap(arr,min_idx, i);
    }
  }
  
  function printArray( arr, size)
  {
    var i;
    for (i = 0; i < size; i++)
      document.write(arr[i] + " ");
    document.write(" <br>");
  }
  
  var arr = [64, 25, 12, 22, 11];
    var n = 5;
    selectionSort(arr, n);
    document.write("Sorted array: <br>");
    printArray(arr, n);
  
  // This code is contributed by akshitsaxenaa09.
  </script>
  `;
};
const red = "#aa1111";
const lightBlue = "#4657CE";
const darkBlue = "#24315E";
const green = "#00B589";

var delay = 300;

generateButton.onclick = () => {
  generate();
};

sortButton.onclick = () => {
  selectionSort();
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
async function selectionSort() {
  disableButtons();
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[i].style.backgroundColor = darkBlue;
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = lightBlue;
      await waitforme();
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = red;
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = red;
      }
    }
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await waitforme();
    bars[min_idx].style.backgroundColor = red;
    bars[i].style.backgroundColor = green;
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
