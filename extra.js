
getCalculate()



// get input value
function getInputValue(type){
    const inputField = document.getElementById(type + '_input');
    let inputFieldValue = inputField.value;
    return inputFieldValue;
}
// get calulate subtotal tax and total
function getCalculate(){
    const phonePrice = getInputValue('phone')*1219;
    const casePrice = getInputValue('case')*59;

    // subtotal price upadate
    const subtotalPrice = phonePrice+casePrice;
    document.getElementById('subtotal_price').innerText = subtotalPrice;

    // tax update
    const tax = parseInt((subtotalPrice/100)*10);
    document.getElementById('total_tax').innerText = tax;

    // total price update
    document.getElementById('total_pice').innerText = subtotalPrice + tax;
}








// // subtotal price update
    // const phoneTotalPrice = document.getElementById('phone_total').innerText;
    // console.log(phoneTotalPrice);
    // const caseTotalPrce = document.getElementById('case_total').innerText;
    // const subtotal = parseInt(phoneTotalPrice) + parseInt(caseTotalPrce);
    // document.getElementById('subtotal_price').innerText = subtotal;

    // // tax upadate
    // const TotalTaxString = document.getElementById('total_tax');
    // const totalTax = parseInt((subtotal /100) * 10);
    // TotalTaxString.innerText = totalTax;

    // // total price update
    // document.getElementById('total_pice').innerText = subtotal + totalTax;