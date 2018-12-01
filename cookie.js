window.onload = function(){
console.log(getCookie('names_11'));

    function getCookie(cookieName){
    // key value
    var keyval = "names=things ";

    // expiration
    var now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    var expires = 'expires=' + now.toUTCString();

    // cookie string
    var cookie = keyval + ';' + expires;
    
    document.cookie = cookie;
    
    var cookiesList = document.cookie.split(';').map(function(cooky){
        return cooky.trim();
    });
    console.log(cookiesList);
    for(var i=0; i < cookiesList.length; i++){
        var cookie = cookiesList[i].split('=');
        var cookieKey = cookie[0];
        var cookieValue = cookie[1];
        if(cookieKey === cookieName){
            return cookieValue;
        }
    };
    return undefined;
    };
    
};