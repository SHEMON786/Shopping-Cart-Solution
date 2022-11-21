// Phone Section..........................

document.getElementById('btn-plus-phone').addEventListener('click', function () {
    const phoneQuantity = increaseAndDecrease(true, 'phone-input-field');
    updatePhonePrice(phoneQuantity);
    totalCalculation()

})

document.getElementById('btn-minus-phone').addEventListener('click', function () {
    const phoneQuantity = increaseAndDecrease(false, 'phone-input-field');
    updatePhonePrice(phoneQuantity);
    totalCalculation()

})

