//set environment variable that is required
require("dotenv").config();
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require(`node-spotify-api`);
var Spotify = new Spotify(keys.spotify);
var userOption = process.argv[2];
var inputParameter = process.argv[3];



// read command line
var input = process.argv
var operation = input[2]
var topic = input.slice(3).join(" ")
// api,s to get info base on operation command


// switch or you can do if/else call the funcion base on the opration
function UserInputs (userOption, inputParameter){
switch(userOption){

    case "this-song": 
            findSong();
            break;
    case "this-concert": 
            findConcert();
            break;
    case "this-do-what-it-says": 
            find-do-what-it-says();
            break;
        default;
        console.log("a little nonsense now and then, is cherished by the wisest men"
        )
    

}
}
//node liri.js concert-this <artist/band name here>`
function findSong(){
"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"



// query 


// axios call
 
// get the info and

// console log 

}


//node liri.js spotify-this-song '<song name here>'