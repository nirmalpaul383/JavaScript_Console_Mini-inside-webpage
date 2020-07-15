/** This project is originally made by me(N Paul).
 My github profile https://github.com/nirmalpaul383/
 My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
 This is an open source program . You are welcomed to modify it...
 If you want to support me please give a like to our facebook page 
 https://facebook.com/a.new.way.Technical/  **/

var code = document.getElementById('code');
var dis = document.getElementById('dis');
var obj = [];
var process;
dis.value = `Welcome to JavaScript Console Mini by N Paul... Current Version 1.0.0

`;


function ok() {
  dis.value = `${dis.value} User: ${code.value}
`;


  var i = 0;
  obj.push(code.value);
  console.log(obj.lenght);

  while (i < obj.length) {
    if (i != (obj.length - 1))
    {
      try {
        eval(obj[i]);
        throw "Error";
      }
      catch(err) {
        
      }
   }
    else
    {
      try {
        process = eval(obj[i]);
      }
      catch (err) {
        process = err.message;
      }
    };
    i++;
  };
  dis.value = `${dis.value} JavaScript Engine: ${process}

`;
  code.value = "";
}