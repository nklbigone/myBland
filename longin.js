
  var firebaseConfig = {
    apiKey: "AIzaSyDvpBlt88XjHwUMxeO31JIwcNgLsqynuII",
    authDomain: "mybrandalex.firebaseapp.com",
    databaseURL: "https://mybrandalex.firebaseio.com",
    projectId: "mybrandalex",
    storageBucket: "mybrandalex.appspot.com",
    messagingSenderId: "940185402055",
    appId: "1:940185402055:web:53d67248eb56941040dce2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      // User is signed in.
      alert("User is signed in.");
    } else {
      // No user is signed in.
      alert("No user is signed in.");
      
    }
  });


function login(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("error"+ errorMessage);
      });
}
