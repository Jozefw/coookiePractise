window.onload = function() {

  var username = 'Jericho';
  var password = 'password';


  // Handle Button Event
  document.getElementById('login-button').addEventListener('click',function(){
    var formUser = document.getElementById('formUsername').value;
    var formPassword = document.getElementById('formPassword').value;
    if(formUser === username && password === formPassword){
      createCookie('logedIn',true );
      createCookie('LogInUsername',username);
      createCookie('visits',1);
      window.location = 'index.html';
       
    } else if(formUser === "" || formPassword === ""){
      alert("You gotta fill this out !");
    } else {
      alert("Incorrect credentials You gotta fill this out C-o-r-r-e-c-t-l-y !");
    }
  });

  createCookie('updater','nope',1);


  function createCookie(name,value,day){
    keyValue = name + "=" + value;

    var now = new Date();
    now.setTime(now.getTime() + day * 24 * 60 * 60 * 1000);

    var expiry = "expires=" + now.toUTCString();
 

    var cookieString = keyValue + ";" + expiry;
    document.cookie = cookieString;
  };

  



};
