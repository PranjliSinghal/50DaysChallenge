const inputs = document.getElementById("inputs");
const result = document.getElementById("result");
var op = "";
var click = 0;
var perform = 0;
var val2 = 0;
var val = "0";


inputs.addEventListener("click", function(){

  const type = event.target.value;

  const display = result.textContent;

  if(type == "number" || type ==".")
  {
    perform =1;
    val = event.target.textContent;
    if(val =="." && display.includes("."))
    {}
    else if(display == 0 || click ==1)
    result.innerHTML = val;
    else
    result.innerHTML = display + val;
  }

  if(type =="clear")
  {
    val = 0;
    val2 = 0;
    perform = 0;
    click = 0;
    op = "";
    result.innerHTML = 0;
  }


  if(type == "operator" && perform ==1)
  {
    op = event.target.textContent;
    click = 1;
    val2 = Number(result.innerHTML);
    console.log(val2);
  }

  if(type == "=" && click == 1)
  {
    var c;
    val = Number(result.innerHTML);
    if(op == "+")
    {
      c = val+val2;
    }

    if(op == "*")
    {
      c = val*val2;
    }

    if(op == "-")
    {
      c = val2-val;
    }

    if(op == "/")
    {
      c = val2/val;
    }
    result.innerHTML = c;
  }
})
