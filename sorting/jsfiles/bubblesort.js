function swap(el1, el2) {
  return new Promise((resolve) => {
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}
async function BubbleSort() {
  var blocks = document.querySelectorAll(".bar");
  for (var i = 0; i < blocks.length; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      blocks[j].style.backgroundColor = "#24315E";
      blocks[j + 1].style.backgroundColor = "#4657CE";
      await waitforme();

      console.log("run");
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".bar");
      }
      blocks[j].style.backgroundColor = "#aa1111";
      blocks[j + 1].style.backgroundColor = "#00B589";
    }
    blocks[blocks.length - i - 1].style.backgroundColor = "00b589";
  }
}

const container = document.querySelector(".sub-container");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const reset = document.getElementById("reset-button");
const Ccode = document.querySelector(".buttonC");

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
function changecolor() {
  const code = document.querySelector(".code");
  code.innerHTML = "";
}
function changecode() {
  const btn = document.getElementById("#btn");
  const code1 = document.querySelector(".code");
  btn.addEventListener("click", () => {
    if (code1.style.display == "none") {
      code1.style.display = "block";
    }
  });
}

const c = document.getElementById("C");
const cPlusPlus = document.getElementById("C++");
const java = document.getElementById("java");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");
const codeSnippet = document.getElementById("code-snippet");

c.onclick = () => {
  console.log("c clicked");
  console.log(codeSnippet.text);
  codeSnippet.innerText = `// Optimized implementation of Bubble sort
  #include <stdio.h>
  #include <stdbool.h>
  
  void swap(int *xp, int *yp)
  {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
  }
  
  // An optimized version of Bubble Sort
  void bubbleSort(int arr[], int n)
  {
  int i, j;
  bool swapped;
  for (i = 0; i < n-1; i++)
  {
    swapped = false;
    for (j = 0; j < n-i-1; j++)
    {
      if (arr[j] > arr[j+1])
      {
      swap(&arr[j], &arr[j+1]);
      swapped = true;
      }
    }
  
    // IF no two elements were swapped by inner loop, then break
    if (swapped == false)
      break;
  }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int size)
  {
    int i;
    for (i=0; i < size; i++)
      printf("%d ", arr[i]);
    printf("n");
  }
  
  // Driver program to test above functions
  int main()
  {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
  }
  `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// Optimized implementation of Bubble sort
  #include <bits/stdc++.h>
  using namespace std;
  void swap(int *xp, int *yp)
  {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
  }
  
  // An optimized version of Bubble Sort
  void bubbleSort(int arr[], int n)
  {
  int i, j;
  bool swapped;
  for (i = 0; i < n-1; i++)
  {
    swapped = false;
    for (j = 0; j < n-i-1; j++)
    {
      if (arr[j] > arr[j+1])
      {
      swap(&arr[j], &arr[j+1]);
      swapped = true;
      }
    }
  
    // IF no two elements were swapped by inner loop, then break
    if (swapped == false)
      break;
  }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int size)
  {
    int i;
    for (i = 0; i < size; i++)
      cout <<" "<< arr[i];
    cout <<" n";
  }
  
  // Driver program to test above functions
  int main()
  {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    cout <<"Sorted array: \n";
    printArray(arr, n);
    return 0;
  }
  
  
  `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Optimized java implementation
  // of Bubble sort
  import java.io.*;
  
  class GFG
  {
    // An optimized version of Bubble Sort
    static void bubbleSort(int arr[], int n)
    {
      int i, j, temp;
      boolean swapped;
      for (i = 0; i < n - 1; i++)
      {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
          if (arr[j] > arr[j + 1])
          {
            // swap arr[j] and arr[j+1]
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }
  
        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
          break;
      }
    }
  
    // Function to print an array
    static void printArray(int arr[], int size)
    {
      int i;
      for (i = 0; i < size; i++)
        System.out.print(arr[i] + " ");
      System.out.println();
    }
  
    // Driver program
    public static void main(String args[])
    {
      int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
      int n = arr.length;
      bubbleSort(arr, n);
      System.out.println("Sorted array: ");
      printArray(arr, n);
    }
  }
  `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python3 Optimized implementation
  # of Bubble sort
  
  # An optimized version of Bubble Sort
  def bubbleSort(arr):
    n = len(arr)
  
    # Traverse through all array elements
    for i in range(n):
      swapped = False
  
      # Last i elements are already
      # in place
      for j in range(0, n-i-1):
  
        # traverse the array from 0 to
        # n-i-1. Swap if the element
        # found is greater than the
        # next element
        if arr[j] > arr[j+1] :
          arr[j], arr[j+1] = arr[j+1], arr[j]
          swapped = True
  
      # IF no two elements were swapped
      # by inner loop, then break
      if swapped == False:
        break
      
  # Driver code to test above
  arr = [64, 34, 25, 12, 22, 11, 90]
  
  bubbleSort(arr)
  
  print ("Sorted array :")
  for i in range(len(arr)):
    print ("%d" %arr[i],end=" ")
  
  
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>

  // Optimized javaScript implementation
  // of Bubble sort
  // An optimized version of Bubble Sort
  function bubbleSort(arr, n)
    {
      var i, j, temp;
      var swapped;
      for (i = 0; i < n - 1; i++)
      {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
          if (arr[j] > arr[j + 1])
          {
            // swap arr[j] and arr[j+1]
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }
  
        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
          break;
      }
    }
  
    // Function to print an array
    function printArray(arr, size)
    {
      var i;
      for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
      document.writeln();
    }
  
    // Driver program
      var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
      var n = arr.length;
      bubbleSort(arr, n);
      document.write("Sorted array: ");
      printArray(arr, n);
  </script>
  
  `;
};
