function fibonacci() {
  let fib = document.getElementById("fibnum").value;
  let a = 0;
  let b = 1;
  let c = 0;

  if (fib=="") {
    document.getElementById('yikes').innerHTML = "Error enter a number";
    return false;
  }
  else if (fib === 0) {
    document.getElementById('fibonacci').innerHTML = "The Fibonacci number is 0";
    return false;
  }
  else { 
    for (let n = 2; n < fib; n++) {
      c = a + b;
      a = b;
      b = c; 
    }
    alert("The Fibonacci number is " + c);
    return false;
  }
  return true;
}

function reset_yikes() {
  document.getElementById('yikes').innerHTML = '';
}

function solve() {
  let opchoice = document.getElementsByName("operators");
  let firstnum = document.getElementById("num1").value;
  let secondnum = document.getElementById("num2").value; 

  if (firstnum=="") {
    document.getElementById('Error').innerHTML = "Error enter first number";
    return false;
  }
  else if (secondnum=="") {
    document.getElementById('Error').innerHTML = "Error enter second number";
    return false;
  }
  if (opchoice[0].checked == true) {
    sum = parseInt(firstnum) + parseInt(secondnum);							
    alert("The answer is " + sum);
    return false;
  } 
  else if (opchoice[1].checked == true) {
    diff = parseInt(firstnum) - parseInt(secondnum);					
    alert("The answer is " + diff);
    return false;
  } 
  else if (opchoice[2].checked == true) {
    prod = parseInt(firstnum) * parseInt(secondnum);					
    alert("The answer is " + prod);
    return false;
  } 
  else if (opchoice[3].checked == true) {
    if (secondnum == 0) {
      document.getElementById('Error').innerHTML = "Error! Division by zero";
      return false;
    }
    else{ 
      quot = parseInt(firstnum) / parseInt(secondnum);
      alert("The answer is " + quot);
      return false;
    }
  } 
  else {
    document.getElementById('Error').innerHTML = "Error select operator";
    return false;
  }
  return true;
}

function reset_Error() {
  document.getElementById('Error').innerHTML = '';
}

function factorial() {
  let factnum = document.getElementById("numf").value;
  if (factnum=="") {
    document.getElementById('Oops').innerHTML = "Error enter a number";
    return false;
  }
  else if (factnum < 0) {
    document.getElementById('Oops').innerHTML = "Error enter a positive number";
    return false;
  }
  else if (factnum === 0) {
    document.getElementById('factorial').innerHTML = "The factorial is 1.";
    return false;
  }
  else {
    let ans = 1;
    for (i = 1; i <= factnum; i++) {
        ans = ans * i;
    }
    document.getElementById('factorial').innerHTML = "The factorial is " + ans;
    return false;
  }
  return true;
}

function reset_Oops() {
  document.getElementById('Oops').innerHTML = '';
}

function range() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  let z = document.getElementById("z").value;
  
  if (x=="") {
    document.getElementById('nope').innerHTML = "Error enter first number";
    return false;
  }
  else if (y=="") {
    document.getElementById('nope').innerHTML = "Error enter second number";
    return false;
  }
  else if (z=="") {
    document.getElementById('nope').innerHTML = "Error enter third number";
    return false;
  }
  else {
    let numx = parseInt(x);
    let numy = parseInt(y);
    let numz = parseInt(z);
    let max = Math.max(numx, numy, numz);
    let min = Math.min(numx, numy, numz);
    let range = max - min;
    alert("The maximum number is " + max + " The minimum number is " + min + " The range between the two is " + range);
    return false;
  }
  return true;
}

function reset_nope() {
  document.getElementById('nope').innerHTML = '';
}

function process() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let zip = document.getElementById("zip").value;
  let all = document.getElementsByName("list");

  let listf = document.createElement('li');
    listf.textContent = fname;
  let listl = document.createElement('li');
    listl.textContent = lname;
  let liste = document.createElement('li');
    liste.textContent = email;
  let listz = document.createElement('li');
    listz.textContent = zip;
  document.getElementById('ListF').appendChild(listf);
  document.getElementById('ListL').appendChild(listl);
  document.getElementById('ListE').appendChild(liste);
  document.getElementById('ListZ').appendChild(listz);
}
  