window.onload = function() {

    if(getCookieValue('logedIn')){
     
        document.getElementById('login').style.display="none";
        document.getElementById('logout').style.display="inline-block";
        document.getElementById('user').innerHTML = getCookieValue('LogInUsername');

    }else{
        console.log('Hello Guest');
        document.getElementById('login').style.display="inline-bock";
        document.getElementById('logout').style.display="none";
        document.getElementById('user').innerHTML = "Guest !";
    }

    function getCookieValue(cookieName){
        var cookiesList = document.cookie.split(';').map(function(cooky){
            return cooky.trim();
        });
    
        for(var i=0; i < cookiesList.length; i++){
            var cookie = cookiesList[i].split('=');
            var cookieKey = cookie[0];
            var cookieValue = cookie[1];
            if(cookieKey === cookieName){
                return cookieValue;
            }
        };
        return undefined;
    }

};
