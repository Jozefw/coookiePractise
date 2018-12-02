

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

  function createCookie(name,value){
    keyValue = name + "=" + value;

    var now = new Date();
    now.setTime(now.getTime()+ 24 * 60 * 60 + 1000);
    var expiry = "expires=" + now.toUTCString();
    console.log(expiry);

    var cookieString = keyValue + ";" + expiry;
    document.cookie = cookieString;
    console.log(document.cookie);
  };

  



};
