// Initialize Firebase
var config = {
        apiKey: "AIzaSyD2z9S5risXs8SUC8-PKVkdnxrZPzAVktU",
        authDomain: "inclass-firebase1.firebaseapp.com",
        databaseURL: "https://inclass-firebase1.firebaseio.com",
        projectId: "inclass-firebase1",
        storageBucket: "inclass-firebase1.appspot.com",
        messagingSenderId: "87680051169"
};
firebase.initializeApp(config);

var database = firebase.database();
// creating a variable for my firebase DB

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// scripting for moment.js potentially

// variables to store in my FIREBASE DB


// initial values
var trainName = "";
var destination = "";
var frequency = "";
// in minutes
var nextArrival = "";
// dont know if i need to set this var or not
var minutesAway = "";
// dont know if i need to set this var either

// capture button clicks
$("#add-train").on("click", function (event) {
        event.preventDefault();

        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        trainTime = $("#trainTime-input").val().trim();
        frequency = $("#frequency-input").val().trim();

        database.ref().push({
                trainName: trainName,
                destination: destination,
                trainTime: trainTime,
                frequency: frequency,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

});



// train name
// destination
// frequency (min)
// Next Arrival im going to have to calculate that using MOMENT.JS 
// Minutes away

// ADD train container
// train name
// destination
// first train time
// frequency