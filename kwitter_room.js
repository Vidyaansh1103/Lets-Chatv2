

var firebaseConfig = {
      apiKey: "AIzaSyAwaopOR4AWHxdwuzhC0VQcthyiFm5umHo",
      authDomain: "kwitter-b4372.firebaseapp.com",
      databaseURL: "https://kwitter-b4372.firebaseio.com",
      projectId: "kwitter-b4372",
      storageBucket: "kwitter-b4372.appspot.com",
      messagingSenderId: "614813464395",
      appId: "1:614813464395:web:bcac176aec5d757f575ace"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_names", name);
      window.location = "kwitter_page.html";
}

function addroom()
{
      Room_names = document.getElementById("room_names").value;

      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_names", Room_names);

      window.location = "kwitter_page.html"
}
