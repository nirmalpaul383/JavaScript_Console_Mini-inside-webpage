/** 
About House Calc (Web Ported): House Calc (Web Ported) is the web ported of House Calc(android application made by N Paul (https://github.com/nirmalpaul383)). Original House Calc sources files can be found on https://github.com/nirmalpaul383/Project-House-Calc . House Calc is an open source "income from house property calculator" based on the Indian income tax law. Note: This calculator is made just only for publicly and quickly calculate the 'basic' taxation under 'income from house property head' in India. This is not the professional nor official tax consultant application. Users are requested to verify the result before using them on any official statement(s).
  This project is originally made by me(N Paul).My github profile https: //github.com/nirmalpaul383/ My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
    This is an open source program.You are welcomed to modify it...If you want to support me please give a like to our facebook page https: //facebook.com/a.new.way.Technical/
**/

//Variables Declearing for all inputs:
var personName = document.getElementById('personName');
var type = document.getElementById('calculation types');
var ay = document.getElementById('ay');
var py = document.getElementById('py');

var municipalValue = document.getElementById('municipal value');
var standardRent = document.getElementById('standard Rent');
var fairRent = document.getElementById('fair Rent');

var annualRent = document.getElementById('annual rent');
var unrealizedRent = document.getElementById('unrealized rent');

var loss = document.getElementById('loss');
var tax = document.getElementById('tax');
var interest = document.getElementById('interest');

//Variables Declearing for calculation purpose:
var step1, step2, step3, step4, navValue, stdDed;


//Declearing main function
function Calculate() {
  if ((type.value) == 'Let Out') {
    {
      //For step1:
      //Calculating--

      let step1Temp = Math.max(Number(municipalValue.value), Number(fairRent.value));

      if (step1Temp > (Number(standardRent.value))) {
        step1 = Number(standardRent.value);
      }
      else if (step1Temp <= Number(standardRent.value)) {
        step1 = step1Temp;
      };
      //Showing--

      document.getElementById('step1').innerHTML = step1;
    };
    {
      //for step2:
      //Calculating--

      step2 = (Number(annualRent.value) - Number(unrealizedRent.value));
      //Showing--

      document.getElementById('step2').innerHTML = step2;
    };
    {
      //for step3:
      //Calculating--

      step3 = Math.max(step1, step2);
      //Showing--

      document.getElementById('step3').innerHTML = step3;
    };
    {
      //for step4:
      //Calculating--
      step4 = step3 - Number(loss.value);
      //Showing--

      document.getElementById('step4').innerHTML = step4;
    };
    {
      //for gross annual value
      //Showing--
      document.getElementById('gav').innerHTML += step4;

    };
    {
      //for displaying municipal tax on the cell
      document.getElementById('gavLess').innerHTML += " " + "(" + Number(tax.value) + ")";
    };
    {
      //for Net Annual Value
      //Calculation--
      navValue = step4 - Number(tax.value);
      //Showing--

      document.getElementById('nav').innerHTML += navValue;
    };
    {
      //for Standard Deduction
      //Calculating--
      stdDed = (navValue * 30 / 100);
      //Showing--

      document.getElementById('us24a').innerHTML = stdDed;
    };
    {
      //for Interest on loan
      document.getElementById('us24b').innerHTML = interest.value;
    };
    {
      //for total Deduction
      document.getElementById('totalDeduction').innerHTML = "(" + Number(stdDed + Number(interest.value)) + ")";
    };
    {
      //for income from House Property
      document.getElementById('income').innerHTML += navValue - (stdDed + Number(interest.value));
    };
  }


  else if ((type.value) == 'Self Occupied') {
    {
      //for step1 to standard deduction
      //Showing--
      document.getElementById('step1').innerHTML = "Nill";
      document.getElementById('step2').innerHTML = "Nill";
      document.getElementById('step3').innerHTML = "Nill";
      document.getElementById('step4').innerHTML = "Nill";

      document.getElementById('gav').innerHTML += "Nill";
      document.getElementById('gavLess').innerHTML += "Nill";
      document.getElementById('nav').innerHTML += "Nill";
      document.getElementById('us24a').innerHTML = "Nill";
    };
    {
      //for showing interest on loan and total deduction
      document.getElementById('us24b').innerHTML = interest.value;
      document.getElementById('totalDeduction').innerHTML = "(" + Number(interest.value) + ")";
    };
    {
      //for showing income from house Property
      document.getElementById('income').innerHTML += "-" + Number(interest.value);
    }

  };
  {
    //for displaying name of the person
    document.getElementById('inTheBooksOf').innerHTML = `Name: ${personName.value} , Assessment Year: ${ay.value} , Previous Year: ${py.value} , House Type: ${type.value}`;
  };
  {
    //For hiding input page and showing result page
    document.getElementById('inputPage').style.display = "none";
    document.getElementById('resultPage').style.display = "block";
  };
}