
function increaseAndDecrease(isIncrease, inputField) {
    if (isIncrease === true) {
        const phoneInputField = document.getElementById(inputField);
        const phoneInputPreviousValue = parseInt(phoneInputField.value);
        const phoneInputCurrentValue = phoneInputPreviousValue + 1;
        phoneInputField.value = phoneInputCurrentValue;

        return phoneInputCurrentValue;
    }
    else {
        const phoneInputField = document.getElementById(inputField);
        const phoneInputPreviousValue = parseInt(phoneInputField.value);
        const phoneInputCurrentValue = phoneInputPreviousValue - 1;
        phoneInputField.value = phoneInputCurrentValue;

        return phoneInputCurrentValue;
    }
}
function updatePhonePrice(phoneQuantity) {
    const phonePrice = document.getElementById('phone-total-price');
    const phoneTotalPrice = phoneQuantity * 1219;
    phonePrice.innerText = phoneTotalPrice;

    return phoneTotalPrice;
}
function updateCasePrice(caseQuantity) {
    const casePrice = document.getElementById('case-total-price');
    const caseTotalPrice = caseQuantity * 59;
    casePrice.innerText = caseTotalPrice;

    return caseTotalPrice;
}

function totalCalculation() {
    const phonePrice = document.getElementById('phone-total-price');
    const phoneTotalPrice = parseInt(phonePrice.innerText);
    const casePrice = document.getElementById('case-total-price');
    const caseTotalPrice = parseInt(casePrice.innerText);

    const subTotal = phoneTotalPrice + caseTotalPrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = subTotal;

    const taxElement = document.getElementById('tax-total');
    const totalTax = parseFloat((subTotal * 0.1).toFixed(2));
    taxElement.innerText = totalTax;

    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = subTotal + totalTax;
    totalPriceElement.innerText = totalPrice;
}