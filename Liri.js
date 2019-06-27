
require("dotenv").config();
var keys = require("./keys.js");
var input = process.argv
var operation = input[2]
var topic = input.slice(3).join(" ")

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

function findSong(){
//node liri.js concert-this <artist/band name here>`
//  call api `"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp

// query // axios call// get the info and console log 

}


//node liri.js spotify-this-song '<song name here>'