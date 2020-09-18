function Time(){
  let date = new Date();
  let hour = format(date.getHours());
  let minute = format(date.getMinutes());
  let second =format(date.getSeconds());
  document.getElementById("main").innerHTML = hour +" : "+minute + " : " + second;

  let t = setTimeout(function(){ Time() }, 1000);
}

function format(x)
{
  if(x<10){
    return "0"+x;
  }
  else{
    return x;
  }
}

Time();
