const input = document.getElementById('input');

const С = document.getElementById('btn-C');
const one = document.getElementById('btn-1');
const two = document.getElementById('btn-2');
const three = document.getElementById('btn-3');
const four = document.getElementById('btn-4');
const five = document.getElementById('btn-5');
const six = document.getElementById('btn-6');
const seven = document.getElementById('btn-7');
const eight = document.getElementById('btn-8');
const nine = document.getElementById('btn-9');
const zero = document.getElementById('btn-0');
const plus = document.getElementById('btn-plus');
const minus = document.getElementById('btn-minus');
const umn = document.getElementById('btn-umn');
const del = document.getElementById('btn-del');
const ravno = document.getElementById('btn-ravno');

let result = input.value;

function endsWithOperator(value) {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(value.slice(-1));
}

С.addEventListener('click', (e) => {
  input.value = ''; 
  result = true
});

one.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '1'; 
    result += '1';
  }
});

two.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '2'; 
    result += '2';
  }
});

three.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '3'; 
    result += '3';
  }
});

four.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '4'; 
    result += '4';
  }
});

five.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '5'; 
    result += '5';
  }
});

six.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '6'; 
    result += '6';
  }
});

seven.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '7'; 
    result += '7';
  }
});

eight.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '8'; 
    result += '8';
  }
});

nine.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '9'; 
    result += '9';
  }
});

zero.addEventListener('click', (e) => {
  if (input.value != 'Ошибка'){
    input.value += '0'; 
    result += '0';
  }
});

plus.addEventListener('click', (e) => {
  if (!endsWithOperator(input.value) && input.value != '' && input.value != 'Ошибка') {
    input.value += '+';
    result += '+';
  }
});

minus.addEventListener('click', (e) => {
  if (!endsWithOperator(input.value) && input.value != 'Ошибка') {
    input.value += '-';
    result += '-';
  }
});

umn.addEventListener('click', (e) => {
  if (!endsWithOperator(input.value) && input.value != '' && input.value != 'Ошибка') {
    input.value += '*';
    result += '*';
  }
});

del.addEventListener('click', (e) => {
  if (!endsWithOperator(input.value) && input.value != '' && input.value != 'Ошибка') {
    input.value += '/';
    result += '/';
  }
});

ravno.addEventListener('click', (e) => {
  if (eval(result) == Infinity){
    input.value = 'Ошибка';
  }
  else if (eval(result) != undefined){
    let endValue = eval(result);
    result = endValue;
    input.value = endValue;
  }
});
