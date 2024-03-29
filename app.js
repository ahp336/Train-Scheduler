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




$("#data-add").on("click", function(event){
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

    console.log(trainName)
    console.log(destination)
    console.log(trainTime )
    console.log(frequency)

    alert("Train Schedule Added")
    // Empty all the text-boxes
    $("#name-input").val("");
    $("#des-input").val("");
    $("#time-input").val("");
    $("#min-input").val("");
});


    
database.ref().on("child_added", function (childSnapshot){
   var snapshot = childSnapshot.val();
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name
    var destination = childSnapshot.val().des
    var trainTime = childSnapshot.val().time
    var frequency = childSnapshot.val().min

    console.log(snapshot.trainName)
    console.log(snapshot.destination)
    console.log(snapshot.trainTime )
    console.log(snapshot.frequency)

   
    
    
    var newRow = $("<tr>").append(
        $("<td>").text(snapshot.trainName),
        $("<td>").text(snapshot.destination),
        $("<td>").text(snapshot.trainTime),
        $("<td>").text(snapshot.minLeft),
        $("<td>").text(snapshot.frequency),
    );

        $("#time-schedule > tbody").append(newRow);
});