const quotes=[
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Everything you've ever wanted is on the other side of fear.",
  "A difference of opinion is what makes horse racing and missionaries.",
  "The final forming of a person's charater lies in their own hands. ",
  "Be kind whenever possible. It is always possible."

]


const button = document.getElementById("submit-btn");
const quoteContainer = document.getElementById("quote");




  function show(){

    var n = quotes.length;
    var i = Math.floor(Math.random()*n);
    quoteContainer.innerHTML = quotes[i];
  }
