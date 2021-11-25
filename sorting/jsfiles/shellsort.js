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

// asynchronous function to perform "Shell Sort"
async function ShellSort() {
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
      var temp = parseInt(bars[j].childNodes[0].innerHTML);
      var k;

      var temp1 = bars[j].style.height;
      var temp2 = bars[j].childNodes[0].innerText;

      for (
        k = j;
        k >= i && parseInt(bars[k - i].childNodes[0].innerHTML) > temp;
        k -= i
      ) {
        bars[k].style.height = bars[k - i].style.height;

        bars[k].childNodes[0].innerText = bars[k - i].childNodes[0].innerText;

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
    bars[x].style.backgroundColor = "#00b589";
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
  codeSnippet.innerText = `// C# implementation of ShellSort
	using System;
	
	class ShellSort
	{
		/* An utility function to
		print array of size n*/
		static void printArray(int []arr)
		{
			int n = arr.Length;
			for (int i=0; i<n; ++i)
			Console.Write(arr[i] + " ");
			Console.WriteLine();
		}
	
		/* function to sort arr using shellSort */
		int sort(int []arr)
		{
			int n = arr.Length;
	
			// Start with a big gap,
			// then reduce the gap
			for (int gap = n/2; gap > 0; gap /= 2)
			{
				// Do a gapped insertion sort for this gap size.
				// The first gap elements a[0..gap-1] are already
				// in gapped order keep adding one more element
				// until the entire array is gap sorted
				for (int i = gap; i < n; i += 1)
				{
					// add a[i] to the elements that have
					// been gap sorted save a[i] in temp and
					// make a hole at position i
					int temp = arr[i];
	
					// shift earlier gap-sorted elements up until
					// the correct location for a[i] is found
					int j;
					for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
						arr[j] = arr[j - gap];
	
					// put temp (the original a[i])
					// in its correct location
					arr[j] = temp;
				}
			}
			return 0;
		}
	
		// Driver method
		public static void Main()
		{
			int []arr = {12, 34, 54, 2, 3};
			Console.Write("Array before sorting :\n");
			printArray(arr);
	
			ShellSort ob = new ShellSort();
			ob.sort(arr);
	
			Console.Write("Array after sorting :\n");
			printArray(arr);
		}
	}	
	`;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ implementation of Shell Sort
#include <iostream>
using namespace std;

/* function to sort arr using shellSort */
int shellSort(int arr[], int n)
{
	// Start with a big gap, then reduce the gap
	for (int gap = n/2; gap > 0; gap /= 2)
	{
		// Do a gapped insertion sort for this gap size.
		// The first gap elements a[0..gap-1] are already in gapped order
		// keep adding one more element until the entire array is
		// gap sorted
		for (int i = gap; i < n; i += 1)
		{
			// add a[i] to the elements that have been gap sorted
			// save a[i] in temp and make a hole at position i
			int temp = arr[i];

			// shift earlier gap-sorted elements up until the correct
			// location for a[i] is found
			int j;		
			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
				arr[j] = arr[j - gap];
			
			// put temp (the original a[i]) in its correct location
			arr[j] = temp;
		}
	}
	return 0;
}

void printArray(int arr[], int n)
{
	for (int i=0; i<n; i++)
		cout << arr[i] << " ";
}

int main()
{
	int arr[] = {12, 34, 54, 2, 3}, i;
	int n = sizeof(arr)/sizeof(arr[0]);

	cout << "Array before sorting: \n";
	printArray(arr, n);

	shellSort(arr, n);

	cout << "\nArray after sorting: \n";
	printArray(arr, n);

	return 0;
}  
	`;
};

java.onclick = () => {
  codeSnippet.innerText = `// Java implementation of ShellSort
class ShellSort
{
	/* An utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	/* function to sort arr using shellSort */
	int sort(int arr[])
	{
		int n = arr.length;

		// Start with a big gap, then reduce the gap
		for (int gap = n/2; gap > 0; gap /= 2)
		{
			// Do a gapped insertion sort for this gap size.
			// The first gap elements a[0..gap-1] are already
			// in gapped order keep adding one more element
			// until the entire array is gap sorted
			for (int i = gap; i < n; i += 1)
			{
				// add a[i] to the elements that have been gap
				// sorted save a[i] in temp and make a hole at
				// position i
				int temp = arr[i];

				// shift earlier gap-sorted elements up until
				// the correct location for a[i] is found
				int j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
					arr[j] = arr[j - gap];

				// put temp (the original a[i]) in its correct
				// location
				arr[j] = temp;
			}
		}
		return 0;
	}
  
	  // Driver method
	  public static void main(String args[])
	  {
		  int arr[] = {12, 34, 54, 2, 3};
		  System.out.println("Array before sorting");
		  printArray(arr);
  
		  ShellSort ob = new ShellSort();
		  ob.sort(arr);
  
		  System.out.println("Array after sorting");
		  printArray(arr);
	  }
  }  
	`;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python3 program for implementation of Shell Sort

def shellSort(arr):
	gap = len(arr) // 2 # initialize the gap

	while gap > 0:
		i = 0
		j = gap
		
		# check the array in from left to right
		# till the last possible index of j
		while j < len(arr):
	
			if arr[i] >arr[j]:
				arr[i],arr[j] = arr[j],arr[i]
			
			i += 1
			j += 1
		
			# now, we look back from ith index to the left
			# we swap the values which are not in the right order.
			k = i
			while k - gap > -1:

				if arr[k - gap] > arr[k]:
					arr[k-gap],arr[k] = arr[k],arr[k-gap]
				k -= 1

		gap //= 2
  
  
  # driver to check the code
  arr2 = [12, 34, 54, 2, 3]
  print("input array:",arr2)
  
  shellSort(arr2)
  print("sorted array",arr2)  
	`;
};

javascript.onclick = () => {
  codeSnippet.innerText = `
<script>
// Javascript implementation of ShellSort

/* An utility function to print array of size n*/
function printArray(arr){
	let n = arr.length;
	for (let i = 0; i < n; ++i)
	document.write(arr[i] + " ");
	document.write("<br>");
}

/* function to sort arr using shellSort */
function sort(arr){
	let n = arr.length;

	// Start with a big gap, then reduce the gap
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
	{

		// Do a gapped insertion sort for this gap size.
		// The first gap elements a[0..gap-1] are already
		// in gapped order keep adding one more element
		// until the entire array is gap sorted
		for (let i = gap; i < n; i += 1)
		{

			// add a[i] to the elements that have been gap
			// sorted save a[i] in temp and make a hole at
			// position i
			let temp = arr[i];

			// shift earlier gap-sorted elements up until
			// the correct location for a[i] is found
			let j;
			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
			arr[j] = arr[j - gap];

			// put temp (the original a[i]) in its correct
			// location
			arr[j] = temp;
		}
	}	
	return arr;
}

// Driver method
let arr = [12, 34, 54, 2, 3];
document.write("Array before sorting<br>");
printArray(arr);

arr = sort(arr);
document.write("Array after sorting<br>");
printArray(arr);
</script>
	`;
};
