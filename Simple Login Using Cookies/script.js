window.onload = function() {

    if(getCookieValue('logedIn')){
     
        document.getElementById('login').style.display="none";
        document.getElementById('logout').style.display="inline-block";
        document.getElementById('user').innerHTML = getCookieValue('LogInUsername');


        createCookie('logedIn',true, 2 );
        createCookie('LogInUsername',getCookieValue('LogInUsername'),2);

        var visits = parseInt(getCookieValue('visits'));
        visits++;
        createCookie('visits', visits, 2);

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
                console.log(cookieValue);
                return cookieValue;
            }
        };
        return undefined;
    }


    function createCookie(name,value,day){
        keyValue = name + "=" + value;
    
        var now = new Date();
        now.setTime(now.getTime() + day * 24 * 60 * 60 * 1000);
    
        var expiry = "expires=" + now.toUTCString();
     
    
        var cookieString = keyValue + ";" + expiry;
        document.cookie = cookieString;
      };
    
};
