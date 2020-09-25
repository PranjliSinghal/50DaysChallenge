var square = document.querySelectorAll(".square");

var mode_btn = document.querySelectorAll(".mode");

var num_square = 6;
var colors = [];
var pickedColor;
function getColor(){
  var random = Math.floor(Math.random() *colors.length);
  return colors[random];
}

function rgb(){
  colors = [];
  for(i = 0;i< 6;i++)
  {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    colors.push("rgb(" + a +", " +b+", " +c+")");
  }

  applyColor();
}




function applyColor(){
  for (i = 0; i < square.length; i++)
  {
    square[i].style.backgroundColor = colors[i];
  }
    pickedColor = getColor();
    document.getElementById("rgbvalue").innerHTML = pickedColor;

}

for(i = 0; i< square.length; i++){


  square[i].addEventListener('click',function(){


    var chosenColor = this.style.backgroundColor;

    if(chosenColor == pickedColor)
    {

      document.getElementById("message").innerHTML = "You guessed it right!!";
      for(j = 0;j <square.length; j++)
      {
        square[j].style.backgroundColor = chosenColor;
      }
    }
    else
    {
document.getElementById("message").innerHTML = "Wrong Guess!!";
      this.style.backgroundColor = "white";
    }
  });
}



rgb();

document.getElementById("reset").addEventListener("click", rgb);
