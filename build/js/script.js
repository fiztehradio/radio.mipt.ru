function play(){player.volume=1,player.play(),yaCounter46493418.reachGoal("PLAY")}function pause(){player.pause(),yaCounter46493418.reachGoal("PAUSE")}try{Typekit.load({async:!0})}catch(a){}var player;$(document).ready(function(){var a=$("#play-button");a.click(function(){a.hasClass("play")?(a.removeClass("play"),a.addClass("pause"),play()):(a.removeClass("pause"),a.addClass("play"),pause())}),player=document.getElementById("player");var e=$("#current-track-info");e.load("php/icecast-current-track.php"),setInterval(function(){e.load("php/icecast-current-track.php")},5e3)});