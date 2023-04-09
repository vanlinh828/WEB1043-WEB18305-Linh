
var player = document.getElementById("myplayer");
    function playPause(){
        if (player.paused){player.play();}
        else {player.pause();}
    }
    function StopVideo(){
        player.pause();
        if(player.currentTime){player.currentTime=0;}
    }
    function replayVideo(){
        player.currentTime = 0;
        player.play();
    }
    function increaseVolum(){
        if(player.volume<1)
        player.volume = parseFloat(player.volume + 0.1).toFixed(1);
    }
    function decreaseVolum(){
        if(player.volume>0)
        player.volume= parseFloat(player.volume-0,1).toFixed(1);
    }
    function muteVolum(){
        if(player.muted){player.muted = false;}
        else {player.muted = true;}
    }