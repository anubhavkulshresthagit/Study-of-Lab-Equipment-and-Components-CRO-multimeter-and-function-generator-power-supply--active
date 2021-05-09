/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which transistor is best suitable to achieve very fast switching in digital circuits?",  ///// Write the question inside double quotes
      answers: {
        a: "Lateral pnp transistor",                  ///// Write the option 1 inside double quotes
        b: "Schottky transistor",                  ///// Write the option 2 inside double quotes
        c: "Multi-emitter transistor",                  ///// Write the option 3 inside double quotes
        d: "NPN transistor"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "The input impedance of C.R.O. is",  ///// Write the question inside double quotes
      answers: {
        a: "Zero",                  ///// Write the option 1 inside double quotes
        b: "Around 100 ohms",                  ///// Write the option 2 inside double quotes
        c: "Around 1000 ohms",                  ///// Write the option 3 inside double quotes
        d: "Around one mega-ohms"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
      {
      question: "Electronic multimeter measures ________",  ///// Write the question inside double quotes
      answers: {
        a: "voltage, current and resistance",                  ///// Write the option 1 inside double quotes
        b: "voltage and current",                  ///// Write the option 2 inside double quotes
        c: "current and power",                  ///// Write the option 3 inside double quotes
        d: "energy and power"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }, 
      
      
      {
      question: "Typically oscilloscope represents __________",  ///// Write the question inside double quotes
      answers: {
        a: "current and time",                  ///// Write the option 1 inside double quotes
        b: "resistance and time",                  ///// Write the option 2 inside double quotes
        c: "voltage and time",                  ///// Write the option 3 inside double quotes
        d: "power and time"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }, 
      
      
      {
      question: "The output impedance of a transistor connected in _________ arrangement is the highest",  ///// Write the question inside double quotes
      answers: {
        a: "common emitter",                  ///// Write the option 1 inside double quotes
        b: "common collector",                  ///// Write the option 2 inside double quotes
        c: "common base",                  ///// Write the option 3 inside double quotes
        d: "none of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }, 

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////