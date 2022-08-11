function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
} 

function logShout(shoutLog){
    console.log(shoutLog.toUpperCase());
}

function logWhisper(whisperLog){
    console.log(whisperLog.toLowerCase());
}

function sayHiToHeadphonedRoommate (string){
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!"
    var lovAnswer = "I would love to!"
    if (string.toLowerCase(string)===string) {
      return cantAnswer;
      }
    else if (string.toUpperCase(string)=== string) {
      return yesAnswer;
    }  
    else if ("Let's have dinner together!" === string) {
      return lovAnswer;
    }
}
  

  

   