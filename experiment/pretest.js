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
      question: "Active devices can also be used as_________",  ///// Write the question inside double quotes
      answers: {
        a: "Amplifiers",                  ///// Write the option 1 inside double quotes
        b: "Choppers",                  ///// Write the option 2 inside double quotes
        c: "Converters",                  ///// Write the option 3 inside double quotes
        d: "Inverters"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "An Electronic Components which can process the signals are called",  ///// Write the question inside double quotes
      answers: {
        a: "Active Components",                  ///// Write the option 1 inside double quotes
        b: "Passive Components",                  ///// Write the option 2 inside double quotes
        c: "None of these",                  ///// Write the option 3 inside double quotes
        d: "Both A and Both"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
    {
     question: "The conductive metal strips on a breadboard",  ///// Write the question inside double quotes
      answers: {
        a: "Contain buss strips commonly used for power connections",                  ///// Write the option 1 inside double quotes
        b: "Provide socket strips in the build area to hold components",                  ///// Write the option 2 inside double quotes
        c: "Are conductive with low resistance",                  ///// Write the option 3 inside double quotes
        d: "All the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },     
      
      {
     question: "In Breadboard when connecting buss or socket strips the jumper wires should be",  ///// Write the question inside double quotes
      answers: {
        a: "Long enough to make the connection yet short enough to prevent complications",                  ///// Write the option 1 inside double quotes
        b: "Wrapped in a coil to prevent interferencing with the other components",                  ///// Write the option 2 inside double quotes
        c: "As long at the test instrument's leads to decrease resistance",                  ///// Write the option 3 inside double quotes
        d: "Soldered to the components to ensure conductivity"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },     
      
      {
     question: "For display of signal pattern ......... voltage is applied to the horizontal plates of a CRO",  ///// Write the question inside double quotes
      answers: {
        a: "sinusoidal",                  ///// Write the option 1 inside double quotes
        b: "rectangular",                  ///// Write the option 2 inside double quotes
        c: "sawtooth",                  ///// Write the option 3 inside double quotes
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