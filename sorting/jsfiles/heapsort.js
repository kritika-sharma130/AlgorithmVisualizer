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
  codeSnippet.innerText = `// C# program for implementation of Heap Sort
  using System;
  
  public class HeapSort {
    public void sort(int[] arr)
    {
      int n = arr.Length;
  
      // Build heap (rearrange array)
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
  
      // One by one extract an element from heap
      for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
  
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
      }
    }
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    void heapify(int[] arr, int n, int i)
    {
      int largest = i; // Initialize largest as root
      int l = 2 * i + 1; // left = 2*i + 1
      int r = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (l < n && arr[l] > arr[largest])
        largest = l;
  
      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest])
        largest = r;
  
      // If largest is not root
      if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
  
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
      }
    }
  
    /* A utility function to print array of size n */
    static void printArray(int[] arr)
    {
      int n = arr.Length;
      for (int i = 0; i < n; ++i)
        Console.Write(arr[i] + " ");
      Console.Read();
    }
  
    // Driver code
    public static void Main()
    {
      int[] arr = { 12, 11, 13, 5, 6, 7 };
      int n = arr.Length;
  
      HeapSort ob = new HeapSort();
      ob.sort(arr);
  
      Console.WriteLine("Sorted array is");
      printArray(arr);
    }
  }
  
  // This code is contributed
  // by Akanksha Rai(Abby_akku)
  
  
 `;
};

cPlusPlus.onclick = () => {
  codeSnippet.innerText = `// C++ program for implementation of Heap Sort
  #include <iostream>
  
  using namespace std;
  
  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  void heapify(int arr[], int n, int i)
  {
    int largest = i; // Initialize largest as root
    int l = 2 * i + 1; // left = 2*i + 1
    int r = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
      largest = l;
  
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
      largest = r;
  
    // If largest is not root
    if (largest != i) {
      swap(arr[i], arr[largest]);
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  // main function to do heap sort
  void heapSort(int arr[], int n)
  {
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);
  
    // One by one extract an element from heap
    for (int i = n - 1; i > 0; i--) {
      // Move current root to end
      swap(arr[0], arr[i]);
  
      // call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  }
  
  /* A utility function to print array of size n */
  void printArray(int arr[], int n)
  {
    for (int i = 0; i < n; ++i)
      cout << arr[i] << " ";
    cout << "\n";
  }
  
  // Driver code
  int main()
  {
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    int n = sizeof(arr) / sizeof(arr[0]);
  
    heapSort(arr, n);
  
    cout << "Sorted array is \n";
    printArray(arr, n);
  }
  
  `;
};

java.onclick = () => {
  codeSnippet.innerText = `
  // Java program for implementation of Heap Sort
  public class HeapSort {
    public void sort(int arr[])
    {
      int n = arr.length;
  
      // Build heap (rearrange array)
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
  
      // One by one extract an element from heap
      for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
  
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
      }
    }
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    void heapify(int arr[], int n, int i)
    {
      int largest = i; // Initialize largest as root
      int l = 2 * i + 1; // left = 2*i + 1
      int r = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (l < n && arr[l] > arr[largest])
        largest = l;
  
      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest])
        largest = r;
  
      // If largest is not root
      if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
  
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
      }
    }
  
    /* A utility function to print array of size n */
    static void printArray(int arr[])
    {
      int n = arr.length;
      for (int i = 0; i < n; ++i)
        System.out.print(arr[i] + " ");
      System.out.println();
    }
  
    // Driver code
    public static void main(String args[])
    {
      int arr[] = { 12, 11, 13, 5, 6, 7 };
      int n = arr.length;
  
      HeapSort ob = new HeapSort();
      ob.sort(arr);
  
      System.out.println("Sorted array is");
      printArray(arr);
    }
  }
  
  `;
};

python.onclick = () => {
  codeSnippet.innerText = `# Python program for implementation of heap Sort

  # To heapify subtree rooted at index i.
  # n is size of heap
  
  
  def heapify(arr, n, i):
    largest = i # Initialize largest as root
    l = 2 * i + 1	 # left = 2*i + 1
    r = 2 * i + 2	 # right = 2*i + 2
  
    # See if left child of root exists and is
    # greater than root
    if l < n and arr[largest] < arr[l]:
      largest = l
  
    # See if right child of root exists and is
    # greater than root
    if r < n and arr[largest] < arr[r]:
      largest = r
  
    # Change root, if needed
    if largest != i:
      arr[i], arr[largest] = arr[largest], arr[i] # swap
  
      # Heapify the root.
      heapify(arr, n, largest)
  
  # The main function to sort an array of given size
  
  
  def heapSort(arr):
    n = len(arr)
  
    # Build a maxheap.
    for i in range(n//2 - 1, -1, -1):
      heapify(arr, n, i)
  
    # One by one extract elements
    for i in range(n-1, 0, -1):
      arr[i], arr[0] = arr[0], arr[i] # swap
      heapify(arr, i, 0)
  
  
  # Driver code
  arr = [12, 11, 13, 5, 6, 7]
  heapSort(arr)
  n = len(arr)
  print("Sorted array is")
  for i in range(n):
    print("%d" % arr[i]),
  # This code is contributed by Mohit Kumra
  
  `;
};

javascript.onclick = () => {
  codeSnippet.innerText = `<script>

  // JavaScript program for implementation
  // of Heap Sort
  
  function sort( arr)
    {
      var n = arr.length;
  
      // Build heap (rearrange array)
      for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);
  
      // One by one extract an element from heap
      for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
  
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
      }
    }
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i)
    {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (l < n && arr[l] > arr[largest])
        largest = l;
  
      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest])
        largest = r;
  
      // If largest is not root
      if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
  
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
      }
    }
  
    /* A utility function to print array of size n */
    function printArray(arr)
    {
      var n = arr.length;
      for (var i = 0; i < n; ++i)
        document.write(arr[i] + " ");
      
    }
  
  
    var arr = [ 5, 12, 11, 13, 4, 6, 7 ];
    var n = arr.length;
  
    sort(arr);
  
    document.write( "Sorted array is <br>");
    printArray(arr, n);
  
  
  // This code is contributed by SoumikMondal
  
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
  HeapSort();
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
function generateBars(num=20) {
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
async function Heapify(n, i) {
  var blocks = document.querySelectorAll(".bar");
  var largest = i; 
  var l = 2 * i + 1; 
  var r = 2 * i + 2; 
  if (
    l < n &&
    Number(blocks[l].childNodes[0].innerHTML) >
    Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = l;
  if (
    r < n &&
    Number(blocks[r].childNodes[0].innerHTML) >
    Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = r;
  if (largest != i) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[largest].style.height;
    blocks[largest].style.height = temp1;
    blocks[largest].style.backgroundColor="#24315E";
    await waitforme();
    blocks[l].style.backgroundColor="#4657CE";
    blocks[i].childNodes[0].innerText =
    blocks[largest].childNodes[0].innerText;
    blocks[largest].childNodes[0].innerText = temp2;
  
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 250)
    );
    await Heapify(n, largest);
  }
  }
  async function HeapSort(n=20) {
    disableButtons();
  var blocks = document.querySelectorAll(".bar");
  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }
  for (var i = n - 1; i > 0; i--) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[0].style.height;
    blocks[i].style.backgroundColor="#00b589";
    await waitforme();
    blocks[0].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[0].childNodes[0].innerText;
    blocks[0].childNodes[0].innerText = temp2;
    blocks[i].style.backgroundColor="#00b589";
    await waitforme();

  
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 250)
    );

    await Heapify(i, 0);
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

function changecolor(){
  const code=document.querySelector(".code");
  code.innerHTML="";
}
function changecode(){
  const btn=document.getElementById("#btn");
  const code1=document.querySelector(".code");
  btn.addEventListener('click',() => {
    if(code1.style.display=='none'){
      code1.style.display='block';
    }

  })
}

