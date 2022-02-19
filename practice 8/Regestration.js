function toggleButton(){
  var un=document.getElementById("username").value;
  var ps = document.getElementById("password").value;
  var cps = document.getElementById("confirmPassword").value;
  if(un && ps && cps){
    document.getElementById('btn01').disabled = false;
  }
  else{
    document.getElementById('btn01').disabled = true;
  }
}
function regestration(){
  var un = document.getElementById("username").value;
  var ps = document.getElementById("password").value;
  var cps = document.getElementById("confirmPassword").value;
  var a=0;
  if(un.length==0){
    document.getElementById("result").innerHTML='Fill the username blank';
  }
  else if(ps.length==0){
    document.getElementById("result").innerHTML='Fill the password blank';
  }
  else if (cps.length==0){
    document.getElementById("result").innerHTML='Fill the confirm password blank';
  }
  else if(ps!=cps){
    document.getElementById("result").innerHTML='Password and Confirm password not equal';
  }
  else{
    window.alert("Regestration succesfull");
  }
}
