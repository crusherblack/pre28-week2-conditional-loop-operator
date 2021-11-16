const operandInput1 = document.getElementById("input-operand-1");
const operandInput2 = document.getElementById("input-operand-2");
const resultOutput = document.getElementById("show-result");

function addition() {
  //   console.log(typeof parseInt(operandInput1.value)); //pars-in
  const result = parseInt(operandInput1.value) + parseInt(operandInput2.value);

  const element = `<p class="text-center">${result}</p>`; // backtic

  resultOutput.innerHTML = element;
}
