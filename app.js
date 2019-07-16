var firebaseConfig = {
    apiKey: "AIzaSyBepUKGc0iNynpJIT5x0D5TVQJDVayF_34",
    authDomain: "employee-timesheet-c7fc0.firebaseapp.com",
    databaseURL: "https://employee-timesheet-c7fc0.firebaseio.com",
    projectId: "employee-timesheet-c7fc0",
    storageBucket: "",
    messagingSenderId: "656988103506",
    appId: "1:656988103506:web:1000c076e9c9974b"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var destination = "";
var trainTime ="";
var frequency ="";




$("#data-add").on("click", function(){
    event.preventDefault();

    trainName = $("#name-input").val();
    destination = $("#des-input").val();
    trainTime = $("#time-input").val();
    frequency = $("#min-input").val();

    database.ref().push({
        trainName : trainName,
        destination : destination,
        trainTime : trainTime ,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
    
    database.ref().on("child_added", function (snapshot){
        var XZ = snapshot.val();
        console.log(snapshot.val());

        console.log(XZ.trainName)
        console.log(XZ.destination)
        console.log(XZ.trainTime )
        console.log(XZ.frequency)

        



    });
    
    
    
    
    
    console.log(trainName)
    console.log(destination)
    console.log(trainTime )
    console.log(frequency)



});