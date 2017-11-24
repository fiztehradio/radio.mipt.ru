function play(){player.volume=1,player.play(),yaCounter46493418.reachGoal("PLAY")}function pause(){player.pause(),yaCounter46493418.reachGoal("PAUSE")}function swapElementClasses(t,e,n){t.removeClass(e),t.addClass(n)}function startPlanetRotation(){var t=$("#mipt-planet");t.css("animation-duration","30s"),t.css("-webkit-animation-duration","30s"),t.css("-moz-animation-duration","30s"),t.css("-o-animation-duration","30s"),t.css("animation-iteration-count","infinite"),t.css("-webkit-animation-iteration-count","infinite"),t.css("-moz-animation-iteration-count","infinite"),t.css("-o-animation-iteration-count","infinite"),t.css("animation-timing-function","linear"),t.css("-webkit-animation-timing-function","linear"),t.css("-mox-animation-timing-function","linear"),t.css("-o-animation-timing-function","linear"),t.css("animation-name","rotation-"+Math.floor(angle))}function stopPlanetRotation(){var t=$("#mipt-planet");angle=getCurrentRotationFixed("mipt-planet"),t.css("transform","rotate("+angle+"deg) translate(-50%, -50%)"),t.css("-webkit-transform","rotate("+angle+"deg) translate(-50%, -50%)"),t.css("-mox-transform","rotate("+angle+"deg) translate(-50%, -50%)"),t.css("-o-transform","rotate("+angle+"deg) translate(-50%, -50%)"),t.css("animation","none"),t.css("-webkit-animation","none"),t.css("-mox-animation","none"),t.css("-o-animation","none")}function updateUtcTime(){var t=(new Date).getTime();utcTime=moment(t).utc().format("HH:mm:ss")}function setColorScheme(t){"day"==t?$(".night-color-scheme").each(function(){$(this).removeClass("night-color-scheme"),$(this).addClass("day-color-scheme"),$("#circles-day").css("opacity",1),$("#color-scheme-switch").attr("checked",!0),$("#color-scheme-switch").val(!0)}):"night"==t&&$(".day-color-scheme").each(function(){$(this).removeClass("day-color-scheme"),$(this).addClass("night-color-scheme"),$("#circles-day").css("opacity",0),$("#color-scheme-switch").attr("checked",!1),$("#color-scheme-switch").val(!1)})}function setColorSchemeByTime(){console.log("UTC: "+utcTime+", sunrise: "+sunriseTime+", sunset: "+sunsetTime);var t;utcTime>sunriseTime&&utcTime<sunsetTime?(console.log("Switching to day color scheme"),$("#temp").css("color","blue"),setColorScheme("day"),t=moment.utc(moment(sunsetTime,"HH:mm:ss").diff(moment(utcTime,"HH:mm:ss"))).format("HH:mm:ss")):(console.log("Switching to night color scheme"),$("#temp").css("color","red"),setColorScheme("night"),t=moment.utc(moment(sunriseTime,"HH:mm:ss").diff(moment(utcTime,"HH:mm:ss"))).format("HH:mm:ss"));var e=moment.duration(t).as("seconds");console.log("Color scheme will automatically change in "+e+"s"),setTimeout(function(){updateUtcTime(),setColorSchemeByLocation()},1e3*e)}function setColorSchemeByLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(positionReceived,setColorSchemeByTime):setColorSchemeByTime()}function positionReceived(t){var e="https://api.sunrise-sunset.org/json?lat="+t.coords.latitude+"&lng="+t.coords.longitude;$.getJSON(e,function(t){setColorSchemeByTime()})}function getCurrentRotationFixed(t){var e=document.getElementById(t),n=window.getComputedStyle(e,null),o=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("-moz-transform")||n.getPropertyValue("-ms-transform")||n.getPropertyValue("-o-transform")||n.getPropertyValue("transform")||"fail...";if("none"!==o){var a=o.split("(")[1];a=a.split(")")[0],a=a.split(",");var i=a[0],s=a[1],c=(a[2],a[3],Math.sqrt(i*i+s*s),Math.atan2(s,i));return c<0&&(c+=2*Math.PI),Math.round(c*(180/Math.PI))}return 0}try{Typekit.load({async:!0})}catch(t){}var player,angle=0,countDownDate=new Date("Nov 25, 2017 12:00:00").getTime(),countdown=setInterval(function(){var t=(new Date).getTime(),e=countDownDate-t,n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);document.getElementById("timer").innerHTML="До начала Эфира Века: "+n+" дня "+o+"ч "+a+"м "+i+"с",e<0&&(clearInterval(countdown),document.getElementById("timer").innerHTML="Мы несесм Аш Ню!")},1e3);$(document).ready(function(){updateUtcTime(),sunriseTime="05:15:00",sunsetTime="13:15:00";var t=$("#mipt-planet"),e=$("#play-button");t.css("animation-timing-function","linear"),t.css("transform","translate(-50%, -50%)"),e.click(function(){e.hasClass("play")?(swapElementClasses(e,"play","pause"),startPlanetRotation(),play()):(swapElementClasses(e,"pause","play"),stopPlanetRotation(),pause())}),player=document.getElementById("player");var n=$("#current-track-info");n.load("php/icecast-current-track.php"),setInterval(function(){n.load("php/icecast-current-track.php")},5e3),setColorSchemeByLocation(),$("#color-scheme-switch").change(function(){setColorScheme(this.checked?"day":"night")})});var utcTime,sunriseTime,sunsetTime;