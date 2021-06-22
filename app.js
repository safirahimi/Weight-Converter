const inputBtn = document.querySelector('#input-btn');
const gram = document.querySelector('#display-gram');
const kilogram = document.querySelector('#display-kilogram');
const ounce = document.querySelector('#display-ounce');
const pound = document.querySelector('#display-pound');

const resultBox = document.querySelector('#display-section');

const s_gr = document.querySelector('#s-gr');
const s_kg = document.querySelector('#s-kg');
const s_lb = document.querySelector('#s-lb');
const s_oun = document.querySelector('#s-oun');


s_gr.addEventListener('click', grValue);
s_kg.addEventListener('click', kgValue);
s_lb.addEventListener('click', lbValue);
s_oun.addEventListener('click', ounValue);


// storing the input value
let inputNum = 0;
function inputValue(e) {
  inputNum = e.target.value;
}

// changing weight to gram
function grValue() {
  let inputNum = 0;
  inputBtn.addEventListener('input', function (e) {
    inputNum = e.target.value;
    resultBox.style.display = 'block';
    kilogram.innerHTML = inputNum / 1000;
    ounce.innerHTML = inputNum * 0.03527;
    pound.innerHTML = inputNum * 0.002205;
  })
  pound.parentElement.style.display = 'block';
  gram.parentElement.style.display = 'none';
  kilogram.parentElement.style.display = 'block';
  ounce.parentElement.style.display = 'block';
}

// changing weight to kilogram
function kgValue() {
  let inputNum = 0;
  inputBtn.addEventListener('input', function (e) {
    inputNum = e.target.value;
    resultBox.style.display = 'block';
    gram.innerHTML = inputNum * 1000;
    ounce.innerHTML = inputNum * 35.274;
    pound.innerHTML = inputNum * 2.2046;
  });
  pound.parentElement.style.display = 'block';
  gram.parentElement.style.display = 'block';
  kilogram.parentElement.style.display = 'none';
  ounce.parentElement.style.display = 'block';

}

// changing weight to pound
function lbValue() {
  let inputNum = 0;
  inputBtn.addEventListener('input', function (e) {
    inputNum = e.target.value;
    resultBox.style.display = 'block';
    gram.innerHTML = inputNum / 0.0022046;
    kilogram.innerHTML = inputNum / 2.2046;
    ounce.innerHTML = inputNum * 16;
  });
  pound.parentElement.style.display = 'none';
  gram.parentElement.style.display = 'block';
  kilogram.parentElement.style.display = 'block';
  ounce.parentElement.style.display = 'block';

}

// changing weight to ounces
function ounValue() {
  let inputNum = 0;
  inputBtn.addEventListener('input', function (e) {
    inputNum = e.target.value;
    resultBox.style.display = 'block';
    gram.innerHTML = inputNum * 28.35;
    kilogram.innerHTML = inputNum * 0.0283;
    pound.innerHTML = inputNum * 0.0625;
  });
  pound.parentElement.style.display = 'block';
  gram.parentElement.style.display = 'block';
  kilogram.parentElement.style.display = 'block';
  ounce.parentElement.style.display = 'none';
}




// function optionAndValue(e) {
//   // document.querySelector('#display-section').style.display = 'block';
//   const listOption = e.target.value;
//   console.log(listOption);

//   switch (listOption) {
//     case 'Pound':
//       pound.parentElement.style.display = 'none';
//       gram.innerHTML = inputValue / 0.0022046;
//       kilogram.innerHTML = inputValue / 2.2046;
//       ounce.innerHTML = inputValue * 16;
//       break;
//     case 'Gram':
//       gram.parentElement.style.display = 'none';
//       kilogram.innerHTML = inputValue / 1000;
//       ounce.innerHTML = inputValue * 0.03527;
//       pound.innerHTML = inputValue * 0.002205;
//       break;
//     case 'Kilogram':
//       kilogram.parentElement.style.display = 'none';
//       gram.innerHTML = inputValue * 1000;
//       ounce.innerHTML = inputValue * 35.274;
//       pound.innerHTML = inputValue * 2.2046;
//       break;
//     case 'Ounce':
//       ounce.parentElement.style.display = 'none';
//       gram.innerHTML = inputValue * 28.35;
//       kilogram.innerHTML = inputValue * 0.0283;
//       pound.innerHTML = inputValue * 0.0625;
//   }
// }