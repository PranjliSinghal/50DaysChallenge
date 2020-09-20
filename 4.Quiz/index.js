const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const button = document.getElementById("submit-button");


const questions =[
  {
    question: "Where is Garampani sanctuary located?",
    answers: {
      a:'Gujarat' ,
      b:'Assam' ,
      c: 'Nagaland',
      d: 'Sikkim',
    },
    correctAns:'b'
  },

  {
    question: "What is Hitler Party which came into power in 1933 known as?",
    answers: {
      a:'Labour Party' ,
      b:'Nazi Party' ,
      c: 'Ku-Klux-Klan',
      d: 'Democratic Party',
    },
    correctAns:'b'
  },

  {
    question: "Golf Playes Vijay Singh belongs to which country?",
    answers: {
      a:'USA' ,
      b:'Fiji' ,
      c: 'India',
      d: 'UK',
    },
    correctAns:'b'
  },

  {
    question: "With which country first China War was fought?",
    answers: {
      a:'Britain' ,
      b:'France' ,
      c: 'Egypt',
      d: 'Greek',
    },
    correctAns:'a'
  }

];


function buildQuiz(questions, quiz, result, button){
  function generateQuestion(questions,quiz){

    var output = [];
    var answers;

    for(var i = 0; i < questions.length; i++){
      answers = [];

      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type ="radio" name ="question' + i+'" value ="'+letter+'">'
            + letter + ':'
            + questions[i].answers[letter]
            +'</label>'
        );
      }

      output.push(
        '<div class = "question">' + questions[i].question + '</div>'
        +'<div class = "answers">' + answers.join('') + '</div>'
      );
    }

    quiz.innerHTML = output.join('');

  }

  function getResult(questions, quiz, result){

    var ansContainer = quiz.querySelectorAll('.answers');

    var userAns = '';
    var correct = 0;

    for(var i = 0; i<questions.length; i++){
      userAns = (ansContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if(userAns == questions[i].correctAns){
        correct++;
        ansContainer[i].style.color = 'lightgreen';
      }

      else{
        ansContainer[i].style.color = 'red';
      }
    }

    result.innerHTML = correct+' out of '+questions.length;

  }

  generateQuestion(questions, quiz);

  button.onclick = function(){
    getResult(questions,quiz,result);
  }
}


buildQuiz(questions,quiz,result,button);
