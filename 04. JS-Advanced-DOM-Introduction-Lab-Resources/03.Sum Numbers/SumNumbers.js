function calc() {
   let num1Element = document.getElementById('num1');
    num1Element = Number(num1Element.value);
    let num2Element = document.getElementById('num2');
    num2Element = Number(num2Element.value);
    let sumElement = document.getElementById('sum')
    sumElement.value = num1Element+num2Element;

   
   
    
}
