function fizzBuzz(params) {
  if (!Array.isArray(params)) {
    return "Input tidak valid";
  }

  let result = "";
  
  for (let i = 0; i < params.length; i = i + 1) {
    if (params[i] % 14 === 0) {
      result = result + "FizzBuzz";
    } else if (params[i] % 2 === 0) {
      result = result + "Fizz";
    } else if (params[i] % 7 === 0) {
      result = result + "Buzz";
    } else {
      result = result + params[i];
    }
    
    if (i < params.length - 1) {
      result = result + " "; 
    }
  }
  
  return result;
}

module.exports = fizzBuzz;