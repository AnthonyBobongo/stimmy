

const incomeInput = document.getElementById('incomeInput');
const dependentsInput = document.getElementById('dependentsInput');
const estimateLabel = document.getElementById('estimateLabel');
const recalculateButton = document.getElementById('recalculateButton');

recalculateButton.onclick = function() {

  let selectedValue = 0;
  const radioButtons = document.querySelectorAll('input[name="filingStatus"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
    }

  }
  const headcount = [1, 2, 1];
  const limit = [75000, 150000, 112500];
  let income = Number(incomeInput.value);
  let dependents = Number(dependentsInput.value);
  let estimate = 600 * (headcount[selectedValue] + dependents);
  let amountOverLimit = Math.max(0, income - limit[selectedValue]);
  let reductionAmount = amountOverLimit * .05;
  let finalEstimate = Math.max(0, estimate - reductionAmount);
  estimateLabel.innerText = "You are likely to receive: " + finalEstimate;
};