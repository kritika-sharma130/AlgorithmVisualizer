
var firebaseConfig = {
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

const auth = firebase.auth();
const database = firebase.database();

function register() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please enter correct fields!!");
    return;
  
  }
  if (validate_field(full_name) == false) {
    alert("Please enter the fields!!");
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        email: email,
        full_name: full_name,
        last_login: Date.now(),
      };
      database_ref.child("users/" + user.uid).set(user_data);
      alert("User Created!!");
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}
function login() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please enter correct fields!!");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        last_login: Date.now(),
      };

      database_ref.child("users/" + user.uid).update(user_data);
      alert("User Logged In!!");
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
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
    return false;
    alert("Please enter fields");
  } else {
    return true;
  }
}
