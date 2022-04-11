function subtract() {
   let firstNumber = document.getElementById('firstNumber');
   let firstNumberToNum = Number(firstNumber.value);

   let secondNumber = document.getElementById('secondNumber');
   let secondNumberToNum = Number(secondNumber.value);

   let result = firstNumberToNum - secondNumberToNum;
   let resultTag = document.getElementById('result');
   resultTag.textContent = result;

}