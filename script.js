var easyWord = ["orange","life","meme"];
var mediumWord= ["teacher", "extreme","episode"];
var hardWord= ["Rhinoceros","hippopotamus", "mathematics"];
var allLetters = ["a","b", "c", "d", "e" ,"f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var word = "";
var lives = 6;
var graveyard = [];
var picked = [];

var og= "";

function giveWord(d) {
    var d = document.getElementById("difficulty").value;
    console.log(d);
    d = parseInt(d);
    if(d==1){
        word = easyWord[Math.floor(Math.random() * easyWord.length)];
    }
    if(d==2){
        word = mediumWord[Math.floor(Math.random() * mediumWord.length)];
    }
    if(d==3){
        word = hardWord[Math.floor(Math.random() * hardWord.length)];
    }
    console.log(word);
    clearGame();
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("graveyard").innerHTML = graveyard;
    document.getElementById("blank").innerHTML = displayWord(word);
}

function makeButtons(){
    var output ="";
    console.log(picked);
    for(var i =0; i<allLetters.length; i++){
        if(picked.indexOf(allLetters[i] ) > -1){
            output+= "<button value='" + allLetters[i] + "' id='" + allLetters[i]
                + "' onclick='guessLetter(this.id)' disabled='true'>" + allLetters[i] + "</button>";
            //console.log(output);
        } else {
            output+= "<button value='" + allLetters[i] + "' id='" + allLetters[i]
                + "' onclick='guessLetter(this.id)'>" + allLetters[i] + "</button>";
        }
    }
    document.getElementById("myDiv").innerHTML = output;
}

function guessLetter(letter) {
    var livesNow = lives;
    picked.push(letter);
    makeButtons();
    document.getElementById("blank").innerHTML = displayWord(word);
    //did I win, did I lose?
    document.getElementById("lives").innerHTML = lives;
    if(livesNow != lives){
        graveyard.push(letter);
    }
    livesNow = lives;
    document.getElementById("man").innerHTML = images();
    document.getElementById("graveyard").innerHTML = graveyard;
}


function displayWord(){
    var answer = "";
    if(lives>0) {
        for (var i = 0; i < word.length; i++) {
            if (picked.indexOf(word[i]) > -1) {
                answer += word[i];
            } else {
                answer += "_ ";
            }
        }
        if (answer == og && picked != []) {
            lives -= 1;
        }
        console.log(lives);
        og = answer;
        if(answer == word){
            return " You won! Click play to restart."
        }
        if(lives == 0) {
            return "You lost, click play to restart.";
        }
        return answer;

    }

}
function clearGame(){
    picked = [];
    lives = 6;
    console.log(picked);
    graveyard = [];
    makeButtons();
    document.getElementById("man").innerHTML = images();
}

function images() {
    if(lives == 6){
        return "<img src= 'img/Hangmanhang.png' />";
    }
    if (lives == 5) {
        return "<img src= 'img/hangmanhang2.png' />";
    }
    if (lives == 4) {
        return "<img src= 'img/hangmanhang3.png' />";
    }
    if (lives == 3) {
        return "<img src= 'img/hangmanhang4.png' />";
    }
    if (lives == 2) {
        return "<img src= 'img/hangmanhang5.png' />";
    }
    if (lives == 1) {
        return "<img src= 'img/hangmanhang6.png' />";
    }
    if (lives == 0) {
        return "<img src= 'img/hangmanhang7.png' />";
    }

}
