// Case Section...................................

document.getElementById('btn-plus-case').addEventListener('click', function () {
    const caseQuantity = increaseAndDecrease(true, 'case-input-field');
    updateCasePrice(caseQuantity);
    totalCalculation()

})

document.getElementById('btn-minus-case').addEventListener('click', function () {
    const caseQuantity = increaseAndDecrease(false, 'case-input-field');
    updateCasePrice(caseQuantity);
    totalCalculation()

})