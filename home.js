const firebaseConfig = {
  apiKey: "AIzaSyDeDISV1UnhG8ltcQbr8yMwvvY2HKiBEQE",
  authDomain: "algovisualizer-3df04.firebaseapp.com",
  databaseURL: "https://algovisualizer-3df04-default-rtdb.firebaseio.com",
  projectId: "algovisualizer-3df04",
  storageBucket: "algovisualizer-3df04.appspot.com",
  messagingSenderId: "97030323115",
  appId: "1:97030323115:web:348bec1f618f37bd6130ee",
  measurementId: "G-TPXDN3ZGEG",
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    window.location.href = "./index.html";
  }
});

var i = 0;
var text = "Algorithm Visualiser";
type();
function type() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 200);
  } else {
    i = 0;
    document.getElementById("text").innerHTML = "";
    setTimeout(type, 50);
  }
}

var counter = 1;
setInterval(function () {
  document.getElementById ? (("radio" + counter).checked = true) : counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
var logout = document.getElementById("logout");
logout.onclick = () => {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
};
