
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvRkfjXFn-6_32BfoRMf7WiEG-CLcixxA",
      authDomain: "class-test-17b1a.firebaseapp.com",
      projectId: "class-test-17b1a",
      storageBucket: "class-test-17b1a.appspot.com",
      messagingSenderId: "322863929829",
      appId: "1:322863929829:web:c0790dd98347df1073f70c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      // Start code
       
     // End code
      });});}
getData();


