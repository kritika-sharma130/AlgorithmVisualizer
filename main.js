import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
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

document.getElementById("registerid").addEventListener("click", register);
document.getElementById("loginid").addEventListener("click", login);

function register() {
  console.log("register");
  let emailId = document.getElementById("emailId").value;
  let password = document.getElementById("password").value;
  let full_name = document.getElementById("full_name").value;
  if (
    validate_email(emailId) == false ||
    validate_password(password) == false
  ) {
    alert("Please enter correct fields!!");
    return;
  }
  if (validate_field(full_name) == false) {
    alert("Please enter the fields!!");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailId, password)
    .then(function () {
      let user = firebase.auth().currentUser;
      firebase
        .database()
        .ref("users/" + user.uid)
        .set({
          name: full_name,
          email: emailId,
        })
        .then(function () {
          window.location.href = "./home.html";
        });
    })
    .catch((e) => {
      console.log(e);
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
  }
});

function login() {
  let email = document.getElementById("emailId").value;
  let password = document.getElementById("password").value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please enter correct fields!!");
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      console.log("hello");
    })
    .then(function () {
      window.location.href = "./home.html";
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

function validate_email(email) {
  return true;
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }
  if (field.length <= 0) {
    alert("Please enter fields");
    return false;
  } else {
    return true;
  }
}
