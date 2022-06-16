var firebaseConfig = {
      apiKey: "AIzaSyDRy53Ampa2c_pFWJdpuULCuWbRLdEnXB4",
      authDomain: "vistagram-f1b7e.firebaseapp.com",
      databaseURL: "https://vistagram-f1b7e-default-rtdb.firebaseio.com",
      projectId: "vistagram-f1b7e",
      storageBucket: "vistagram-f1b7e.appspot.com",
      messagingSenderId: "56258999144",
      appId: "1:56258999144:web:6d12e3aeae52b1b9959cdd"
    };
    
    
    // Initialize Firebase
     firebase.app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
     Day: "Thursday"
  });
}
