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
  codeSnippet.innerText = `// C# implementation of QuickSort
  // using Hoare's partition scheme
  using System;
  
  class GFG {
  
    /* This function takes first element as pivot, and
    places all the elements smaller than the pivot on the
    left side and all the elements greater than the pivot
    on the right side. It returns the index of the last
    element on the smaller side*/
    static int partition(int[] arr, int low, int high)
    {
      int pivot = arr[low];
      int i = low - 1, j = high + 1;
  
      while (true) {
        // Find leftmost element greater
        // than or equal to pivot
        do {
          i++;
        } while (arr[i] < pivot);
  
        // Find rightmost element smaller
        // than or equal to pivot
        do {
          j--;
        } while (arr[j] > pivot);
  
        // If two pointers met.
        if (i >= j)
          return j;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // swap(arr[i], arr[j]);
      }
    }
  
    /* The main function that
    implements QuickSort
    arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index */
    static void quickSort(int[] arr, int low, int high)
    {
      if (low < high) {
        /* pi is partitioning index,
        arr[p] is now at right place */
        int pi = partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi);
        quickSort(arr, pi + 1, high);
      }
    }
  
    /* Function to print an array */
    static void printArray(int[] arr, int n)
    {
      for (int i = 0; i < n; i++)
        Console.Write(" " + arr[i]);
      Console.WriteLine();
    }
  
    // Driver Code
    static public void Main()
    {
      int[] arr = { 10, 7, 8, 9, 1, 5 };
      int n = arr.Length;
      quickSort(arr, 0, n - 1);
      Console.WriteLine("Sorted array: ");
      printArray(arr, n);
    }
  }  
  `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `/* C++ implementation of QuickSort using Hoare's
  partition scheme. */
  #include <bits/stdc++.h>
  using namespace std;
  
  /* This function takes first element as pivot, and places
  all the elements smaller than the pivot on the left side
  and all the elements greater than the pivot on
  the right side. It returns the index of the last element
  on the smaller side*/
  int partition(int arr[], int low, int high)
  {
    int pivot = arr[low];
    int i = low - 1, j = high + 1;
  
    while (true) {
      // Find leftmost element greater than
      // or equal to pivot
      do {
        i++;
      } while (arr[i] < pivot);
  
      // Find rightmost element smaller than
      // or equal to pivot
      do {
        j--;
      } while (arr[j] > pivot);
  
      // If two pointers met.
      if (i >= j)
        return j;
  
      swap(arr[i], arr[j]);
    }
  }
  
  /* The main function that implements QuickSort
  arr[] --> Array to be sorted,
  low --> Starting index,
  high --> Ending index */
  void quickSort(int arr[], int low, int high)
  {
    if (low < high) {
      /* pi is partitioning index, arr[p] is now
      at right place */
      int pi = partition(arr, low, high);
  
      // Separately sort elements before
      // partition and after partition
      quickSort(arr, low, pi);
      quickSort(arr, pi + 1, high);
    }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int n)
  {
    for (int i = 0; i < n; i++)
      printf("%d ", arr[i]);
    printf("\n");
  }
  
  // Driver Code
  int main()
  {
    int arr[] = { 10, 7, 8, 9, 1, 5 };
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
  }  
      `;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java implementation of QuickSort
  // using Hoare's partition scheme
  import java.io.*;
  
  class GFG {
  
    /* This function takes first element as pivot, and
    places all the elements smaller than the pivot on the
    left side and all the elements greater than the pivot
    on the right side. It returns the index of the last
    element on the smaller side*/
    static int partition(int[] arr, int low, int high)
    {
      int pivot = arr[low];
      int i = low - 1, j = high + 1;
  
      while (true) {
        // Find leftmost element greater
        // than or equal to pivot
        do {
          i++;
        } while (arr[i] < pivot);
  
        // Find rightmost element smaller
        // than or equal to pivot
        do {
          j--;
        } while (arr[j] > pivot);
  
        // If two pointers met.
        if (i >= j)
          return j;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // swap(arr[i], arr[j]);
      }
    }
  
    /* The main function that
    implements QuickSort
    arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index */
    static void quickSort(int[] arr, int low, int high)
    {
      if (low < high) {
        /* pi is partitioning index,
        arr[p] is now at right place */
        int pi = partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi);
        quickSort(arr, pi + 1, high);
      }
    }
  
    /* Function to print an array */
    static void printArray(int[] arr, int n)
    {
      for (int i = 0; i < n; i++)
        System.out.print(" " + arr[i]);
      System.out.println();
    }
  
    // Driver Code
    static public void main(String[] args)
    {
      int[] arr = { 10, 7, 8, 9, 1, 5 };
      int n = arr.length;
      quickSort(arr, 0, n - 1);
      System.out.println("Sorted array: ");
      printArray(arr, n);
    }
  }
  
     `;
};

python.onclick = () => {
  codeSnippet.innerText = `''' Python implementation of QuickSort using Hoare's
  partition scheme. '''
  
  ''' This function takes first element as pivot, and places
    all the elements smaller than the pivot on the left side
    and all the elements greater than the pivot on
    the right side. It returns the index of the last element
    on the smaller side '''
  
  
  def partition(arr, low, high):
  
    pivot = arr[low]
    i = low - 1
    j = high + 1
  
    while (True):
  
      # Find leftmost element greater than
      # or equal to pivot
      i += 1
      while (arr[i] < pivot):
        i += 1
  
      # Find rightmost element smaller than
      # or equal to pivot
      j -= 1
      while (arr[j] > pivot):
        j -= 1
  
      # If two pointers met.
      if (i >= j):
        return j
  
      arr[i], arr[j] = arr[j], arr[i]
  
  
  ''' The main function that implements QuickSort
  arr --> Array to be sorted,
  low --> Starting index,
  high --> Ending index '''
  
  
  def quickSort(arr, low, high):
    ''' pi is partitioning index, arr[p] is now
    at right place '''
    if (low < high):
  
      pi = partition(arr, low, high)
  
      # Separately sort elements before
      # partition and after partition
      quickSort(arr, low, pi)
      quickSort(arr, pi + 1, high)
  
  
  ''' Function to pran array '''
  
  
  def printArray(arr, n):
    for i in range(n):
      print(arr[i], end=" ")
    print()
  
  
  # Driver code
  arr = [10, 7, 8, 9, 1, 5]
  n = len(arr)
  quickSort(arr, 0, n - 1)
  print("Sorted array:")
  printArray(arr, n)
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>
	// Javascript implementation of QuickSort
	// using Hoare's partition scheme
	
	/* This function takes first element as pivot, and
	places all the elements smaller than the pivot on the
	left side and all the elements greater than the pivot
	on the right side. It returns the index of the last
	element on the smaller side*/
	function partition(arr, low, high)
	{
		let pivot = arr[low];
		let i = low - 1, j = high + 1;

		while (true) {
			// Find leftmost element greater
			// than or equal to pivot
			do {
				i++;
			} while (arr[i] < pivot);

			// Find rightmost element smaller
			// than or equal to pivot
			do {
				j--;
			} while (arr[j] > pivot);

			// If two pointers met.
			if (i >= j)
				return j;
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			// swap(arr[i], arr[j]);
		}
	}

	/* The main function that
	implements QuickSort
	arr[] --> Array to be sorted,
	low --> Starting index,
	high --> Ending index */
	function quickSort(arr, low, high)
	{
		if (low < high) {
			/* pi is partitioning index,
			arr[p] is now at right place */
			let pi = partition(arr, low, high);

			// Separately sort elements before
			// partition and after partition
			quickSort(arr, low, pi);
			quickSort(arr, pi + 1, high);
		}
	}

	/* Function to print an array */
	function printArray(arr, n)
	{
		for (let i = 0; i < n; i++)
			document.write(" " + arr[i]);
		document.write("</br>");
	}
	
	let arr = [ 10, 7, 8, 9, 1, 5 ];
	let n = arr.length;
	quickSort(arr, 0, n - 1);
	document.write("Sorted array: " + "</br>");
	printArray(arr, n);
	
</script>
  `;
};
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
      if (i - 1 >= l) blocks[i - 1].style.backgroundColor = darkBlue;
      blocks[i].style.backgroundColor = lightBlue;
      //To wait for 700 milliseconds
      await waitforme();
    } while (Number(blocks[i].childNodes[0].innerHTML) < pivot);

    // Find rightmost element smaller than
    // or equal to pivot
    do {
      j--;
      if (j + 1 <= r) blocks[j + 1].style.backgroundColor = "#6b5b95";
      blocks[j].style.backgroundColor = lightBlue;
      //To wait for 700 milliseconds
      await waitforme();
    } while (Number(blocks[j].childNodes[0].innerHTML) > pivot);

    // If two pointers met.
    if (i >= j) {
      for (var k = 0; k < size; k++) blocks[k].style.backgroundColor = green;
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
