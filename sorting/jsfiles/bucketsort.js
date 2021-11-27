var container = document.getElementById("array");
var sortButton = document.getElementById("sort-button");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const overlay = document.getElementById("overlay");
const c = document.getElementById("C");
const cPlusPlus = document.getElementById("C++");
const java = document.getElementById("java");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");
const codeSnippet = document.getElementById("code-snippet");
c.onclick = () => {
	console.log("c clicked");
	console.log(codeSnippet.text);
	codeSnippet.innerText = `// C# program to sort an array
	// using bucket sort
	using System;
	using System.Collections;
	using System.Collections.Generic;
	class GFG {
	
	// Function to sort arr[] of size n
	// using bucket sort
	static void bucketSort(float []arr, int n)
	{
		if (n <= 0)
		return;
	
		// 1) Create n empty buckets
		List<float>[] buckets = new List<float>[n];
	
		for (int i = 0; i < n; i++) {
		buckets[i] = new List<float>();
		}
	
		// 2) Put array elements in different buckets
		for (int i = 0; i < n; i++) {
		float idx = arr[i] * n;
		buckets[(int)idx].Add(arr[i]);
		}
	
		// 3) Sort individual buckets
		for (int i = 0; i < n; i++) {
		buckets[i].Sort();
		}
	
		// 4) Concatenate all buckets into arr[]
		int index = 0;
		for (int i = 0; i < n; i++) {
		for (int j = 0; j < buckets[i].Count; j++) {
			arr[index++] = buckets[i][j];
		}
		}
	}
	
	// Driver code
	public static void Main()
	{
		float []arr = { (float)0.897, (float)0.565,
					(float)0.656, (float)0.1234,
					(float)0.665, (float)0.3434 };
	
		int n = arr.Length;
		bucketSort(arr, n);
	
		Console.WriteLine("Sorted array is ");
		foreach(float el in arr) {
		Console.Write(el + " ");
		}
	}
	}
	
	// This code is contributed by rutvik_56
	
	
   `;
  };
  
  cPlusPlus.onclick = () => {
	codeSnippet.innerText = `// C++ program to sort an
	// array using bucket sort
	#include <algorithm>
	#include <iostream>
	#include <vector>
	using namespace std;
	
	// Function to sort arr[] of
	// size n using bucket sort
	void bucketSort(float arr[], int n)
	{
		
		// 1) Create n empty buckets
		vector<float> b[n];
	
		// 2) Put array elements
		// in different buckets
		for (int i = 0; i < n; i++) {
			int bi = n * arr[i]; // Index in bucket
			b[bi].push_back(arr[i]);
		}
	
		// 3) Sort individual buckets
		for (int i = 0; i < n; i++)
			sort(b[i].begin(), b[i].end());
	
		// 4) Concatenate all buckets into arr[]
		int index = 0;
		for (int i = 0; i < n; i++)
			for (int j = 0; j < b[i].size(); j++)
				arr[index++] = b[i][j];
	}
	
	/* Driver program to test above function */
	int main()
	{
		float arr[]
			= { 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 };
		int n = sizeof(arr) / sizeof(arr[0]);
		bucketSort(arr, n);
	
		cout << "Sorted array is \n";
		for (int i = 0; i < n; i++)
			cout << arr[i] << " ";
		return 0;
	}
	
	
	`;
  };
  
  java.onclick = () => {
	codeSnippet.innerText = `
	// Java program to sort an array
// using bucket sort
import java.util.*;
import java.util.Collections;

class GFG {

	// Function to sort arr[] of size n
	// using bucket sort
	static void bucketSort(float arr[], int n)
	{
		if (n <= 0)
			return;

		// 1) Create n empty buckets
		@SuppressWarnings("unchecked")
		Vector<Float>[] buckets = new Vector[n];

		for (int i = 0; i < n; i++) {
			buckets[i] = new Vector<Float>();
		}

		// 2) Put array elements in different buckets
		for (int i = 0; i < n; i++) {
			float idx = arr[i] * n;
			buckets[(int)idx].add(arr[i]);
		}

		// 3) Sort individual buckets
		for (int i = 0; i < n; i++) {
			Collections.sort(buckets[i]);
		}

		// 4) Concatenate all buckets into arr[]
		int index = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < buckets[i].size(); j++) {
				arr[index++] = buckets[i].get(j);
			}
		}
	}

	// Driver code
	public static void main(String args[])
	{
		float arr[] = { (float)0.897, (float)0.565,
						(float)0.656, (float)0.1234,
						(float)0.665, (float)0.3434 };

		int n = arr.length;
		bucketSort(arr, n);

		System.out.println("Sorted array is ");
		for (float el : arr) {
			System.out.print(el + " ");
		}
	}
}

// This code is contributed by Himangshu Shekhar Jha

	
	`;
  };
  
  python.onclick = () => {
	codeSnippet.innerText = `# Python3 program to sort an array
	# using bucket sort
	def insertionSort(b):
		for i in range(1, len(b)):
			up = b[i]
			j = i - 1
			while j >= 0 and b[j] > up:
				b[j + 1] = b[j]
				j -= 1
			b[j + 1] = up	
		return b	
				
	def bucketSort(x):
		arr = []
		slot_num = 10 # 10 means 10 slots, each
					# slot's size is 0.1
		for i in range(slot_num):
			arr.append([])
			
		# Put array elements in different buckets
		for j in x:
			index_b = int(slot_num * j)
			arr[index_b].append(j)
		
		# Sort individual buckets
		for i in range(slot_num):
			arr[i] = insertionSort(arr[i])
			
		# concatenate the result
		k = 0
		for i in range(slot_num):
			for j in range(len(arr[i])):
				x[k] = arr[i][j]
				k += 1
		return x
	
	# Driver Code
	x = [0.897, 0.565, 0.656,
		0.1234, 0.665, 0.3434]
	print("Sorted Array is")
	print(bucketSort(x))
	
	# This code is contributed by
	# Oneil Hsiao
	
	`;
  };
  
  javascript.onclick = () => {
	codeSnippet.innerText = `<script>
	// Javascript program to sort an array
	// using bucket sort
	
	// Function to sort arr[] of size n
	// using bucket sort
	function bucketSort(arr,n)
	{
		if (n <= 0)
				return;
	
			// 1) Create n empty buckets	
			let buckets = new Array(n);
	
			for (let i = 0; i < n; i++)
			{
				buckets[i] = [];
			}
	
			// 2) Put array elements in different buckets
			for (let i = 0; i < n; i++) {
				let idx = arr[i] * n;
				buckets[Math.floor(idx)].push(arr[i]);
			}
	
			// 3) Sort individual buckets
			for (let i = 0; i < n; i++) {
				buckets[i].sort(function(a,b){return a-b;});
			}
	
			// 4) Concatenate all buckets into arr[]
			let index = 0;
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < buckets[i].length; j++) {
					arr[index++] = buckets[i][j];
				}
			}
	}
	
	// Driver code
	let arr = [0.897, 0.565,
			0.656, 0.1234,
			0.665, 0.3434];
	let n = arr.length;
	bucketSort(arr, n);
	
	document.write("Sorted array is <br>");
	for (let el of arr.values()) {
		document.write(el + " ");
	}
	
	// This code is contributed by unknown2108
	</script>
	
	
	`;
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

// Function to randomly shuffle the array
function shuffle(arr) {
for (var i = arr.length - 1; i > 0; i--) {

	// Generate random number
	var j = Math.floor(Math.random() * (i + 1));
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
}

sortButton.onclick = () => {
	InsertionSort();
  };

function generatearray() {

// Creating an array
var arr = [];

// Filling array with values from 1 to 20
for (var i = 0; i < 20; i++) {
	arr.push(i + 1);
}

// Shuffling the array
shuffle(arr);
for (var i = 0; i < 20; i++) {
	var value = arr[i];

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 13}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

async function InsertionSort(clsnam, delay = 600) {
let blocks = document.getElementsByClassName(clsnam);
blocks[0].style.backgroundColor = "red";

for (var i = 1; i < blocks.length; i += 1) {
	var j = i - 1;

	// To store the integer value of ith block to key
	var key = parseInt(blocks[i].childNodes[0].innerHTML);

	// To store the ith block height to height
	var height = blocks[i].style.height;

	// Provide darkblue color to the ith block
	blocks[i].style.backgroundColor = "blue";

	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 600)
	);

	// For placing selected element at its correct position
	while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

	// Provide darkblue color to the jth block
	blocks[j].style.backgroundColor = "blue";

	// For placing jth element over (j+1)th element
	blocks[j + 1].style.height = blocks[j].style.height;
	blocks[j + 1].childNodes[0].innerText =
	blocks[j].childNodes[0].innerText;
	j = j - 1;

	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);

	// Provide lightgreen color to the sorted part
	for (var k = i; k >= 0; k--) {
		blocks[k].style.backgroundColor = "#00B589";
	}
	}

	// Placing the selected element to its correct position
	blocks[j + 1].style.height = height;
	blocks[j + 1].childNodes[0].innerHTML = key;

	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	// Provide light green color to the ith block
	blocks[i].style.backgroundColor ="#00B589"
}
}

// Asynchronous CountingSort function
async function CountingSort(delay = 250) {
var blocks = document.querySelectorAll(".block");

var block1 = 0,
	block2 = 0,
	block3 = 0,
	block4 = 0;

// CountingSort Algorithm
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#4657CE";
	var value =
	Number(blocks[i].childNodes[0].innerHTML);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding style to div
	array_ele.style.height = `${value * 13}px`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	array_ele.appendChild(array_ele_label);

	// Addding block to first bucket
	if (value >= 1 && value <= 5) {
	array_ele.classList.add("firstbucket");
	var container = document.getElementById("one");
	array_ele.style.transform =
	`translate(${block1 * 30}px)`;
	container.appendChild(array_ele);
	block1++;
	}

	// Addding block to second bucket
	if (value >= 6 && value <= 10) {
	array_ele.classList.add("secondbucket");
	var container = document.getElementById("two");
	array_ele.style.transform =
	`translate(${block2 * 30}px)`;
	container.appendChild(array_ele);
	block2++;
	}

	// Addding block to third bucket
	if (value >= 11 && value <= 15) {
	array_ele.classList.add("thirdbucket");
	var container = document.getElementById("three");
	array_ele.style.transform = `translate(${block3 * 30}px)`;
	container.appendChild(array_ele);
	block3++;
	}

	// Addding block to fourth bucket
	if (value >= 16 && value <= 20) {
	array_ele.classList.add("fourthbucket");
	var container = document.getElementById("four");
	array_ele.style.transform =
	`translate(${block4 * 30}px)`;
	container.appendChild(array_ele);
	block4++;
	}

	// To wait for 250 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	blocks[i].style.backgroundColor = "#00B589";
}

// Performing insertion sort on every bucket
await InsertionSort("firstbucket");
await InsertionSort("secondbucket");
await InsertionSort("thirdbucket");
await InsertionSort("fourthbucket");

// Copying elements from buckets to main array
for (var i = 0; i < 4; i++) {
	var bucket_idx = 0;
	var block_idx;
	if (i == 0) block_idx =
	document.getElementsByClassName("firstbucket");
	if (i == 1) block_idx =
	document.getElementsByClassName("secondbucket");
	if (i == 2) block_idx =
	document.getElementsByClassName("thirdbucket");
	if (i == 3) block_idx =
	document.getElementsByClassName("fourthbucket");
	for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
	block_idx[bucket_idx].style.backgroundColor = "#de9443";

	// To wait for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	blocks[j].style.height =
	block_idx[bucket_idx].style.height;
	blocks[j].childNodes[0].innerText =
		block_idx[bucket_idx].childNodes[0].innerText;
	blocks[j].style.backgroundColor =red;

	// To wait for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	block_idx[bucket_idx]
	.style.backgroundColor = red;
	}
}
}

// Calling generatearray function
generatearray();

// Calling CountingSort function
CountingSort();
