
//play audio with out html audio tag
let  myAudio = new Audio("Football_Crowd-GoGo-1730947850.mp3");
let myaudio2 = new Audio("boooo.mp3") 
let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamonenumgoals= document.querySelector("#teamone-numgoals");





function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }


teamoneshootbutton.addEventListener("click", function() {
    let newshotcount = Number(teamonenumshots.innerHTML) +1;
    teamonenumshots.innerHTML= newshotcount

    
    // console.log(Math.random())
    if (Math.random() > .5){
       let newteamonenumgoals = Number(teamonenumgoals.innerHTML) +1;
        teamonenumgoals.innerHTML= newteamonenumgoals
        myAudio.play();
        
    }
}) 
        
    
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamtwonumgoals= document.querySelector("#teamtwo-numgoals");

teamtwoshootbutton.addEventListener("click", function() {
    let newshotcount = Number(teamtwonumshots.innerHTML) +1;
    teamtwonumshots.innerHTML= newshotcount
    if (Math.random() > .5){
        console.log("hey")
        let newteamtwonumgoals = Number(teamtwonumgoals.innerHTML) +1;
        teamtwonumgoals.innerHTML= newteamtwonumgoals
        myaudio2.play()
    }

})





let resetbutton = document.querySelector("#reset-button");
let numberOfResets = document.querySelector("#num-resets");


resetbutton.addEventListener("click", function() { 
    let currentResets = numberOfResets.innerHTML;
    let newResets = Number(numberOfResets.innerHTML) + 1;
    numberOfResets.innerHTML = newResets;
    teamonenumshots.innerHTML = 0;
    teamtwonumshots.innerHTML = 0;
    teamonenumgoals.innerHTML = 0;
    teamtwonumgoals.innerHTML = 0;
})
