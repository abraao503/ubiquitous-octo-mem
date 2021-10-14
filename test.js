var config = {
  apiKey: "AIzaSyB-v5RM1mXMJBxJcpnYANB3TH6diKDqx5E",
  authDomain: "autoescolaparis-8a6cd.firebaseapp.com",
  databaseURL: "https://autoescolaparis-8a6cd.firebaseio.com",
  projectId: "autoescolaparis-8a6cd",
  storageBucket: "autoescolaparis-8a6cd.appspot.com",
  messagingSenderId: "33899998458",
  appId: "1:33899998458:web:33153848dddf309eb36d43",
  measurementId: "G-6WKLPE4Y4G"
};
firebase.initializeApp(config);
 
var var_lista = document.getElementById("div_lista");
var dados = "";
 
var db = firebaseRef = firebase.database().ref().child("Users");
db.on('child_added',function(snapshot){
    var adicionado = snapshot.val();
 
    dados = "<table>" + "<tr><td>" + adicionado + "</td></tr>" + dados;
    var_lista.innerHTML = dados;
})
