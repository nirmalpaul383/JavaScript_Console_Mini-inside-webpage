/** This project is originally made by me(N Paul).
 My github profile https://github.com/nirmalpaul383/
 My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
 This is an open source program . You are welcomed to modify it...
 If you want to support me please give a like to our facebook page 
 https://facebook.com/a.new.way.Technical/  **/


//Declaration of all essential global variables
let outputDisplay = document.getElementById('outputDisplay'); //Display
let inputCode = document.getElementById('inputCode'); //Input



//Set opening/welcome value to the display
outputDisplay.value = `Welcome to JavaScript Console Mini by N Paul... Current Version 1.1.0

`;

//Declaration of main function
function acceptThisCode() {

  let processTemp = '' //Process Temp
 
  outputDisplay.value = `${outputDisplay.value} user: ${inputCode.value}
`; /* User input code will be displayed on the display log */

  {
    try {
      processTemp = window.eval(inputCode.value); /* Try to evaluate user's input and record its output. 'window.eval()' is used 
      because 'eval()' has local scope but 'window.eval()' has global scope*/
    }
    catch (errorMsg) {
      processTemp = errorMsg; /* If an error occurred while evaluating. It will record the error message */
    }
  };

  inputCode.value = ''; /* It will clear user input panel */

  outputDisplay.value = `${outputDisplay.value} JavaScript Engine: ${processTemp}

`; /* It will show the final output to the display(by Creating a log) */

};
