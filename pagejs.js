window.onload = function(){
    let player = document.getElementById("gameplay"),
        volume = document.getElementById("volume");
    var playerstate="pause";
    var firstplay="false"
    var volumestate="mute";
    player.addEventListener("mouseover",function(){
      if (playerstate=="pause" && firstplay=="false")
        {
          firstplay="true"
          player.play();
          playerstate="playing";
        }
        else if(playerstate=="pause"){
          player.currentTime='0';
          player.play();
          playerstate="playing";
        }
    });
    player.addEventListener("click",function(){
      if(playerstate=="playing")
        {player.pause();
          playerstate="pause";
        }
      else{
        player.play()
        playerstate="playing"
      }
    });
    volume.addEventListener("click",function(){
      player.muted = !player.muted;
      if(volumestate=='mute'){
        volume.src="./image/volume.png";
        volumestate='speak';
        player.volume=0.25;
      }
      else{
        volume.src="./image/volume-mute.png";
        volumestate='mute';
      }

    });
  }