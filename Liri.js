require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);


// read command line
var input = process.argv
// console.log(input)
var operation = input[2]
var topic = input.slice(3).join(" ")
console.log(operation)
console.log(topic)

// api,s to get info base on operation command


// switch or you can do if/else call the funcion base on the opration

switch(operation){

    case "this-song": 
            findSong();
            break;
    case "this-song": 
            findSong();
            break;
    case "this-song": 
            findSong();
            break;
    

}
//node liri.js concert-this <artist/band name here>`
function findSong(){
"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp

// query 

// axios call

// get the info and

// console log 

}


//node liri.js spotify-this-song '<song name here>'