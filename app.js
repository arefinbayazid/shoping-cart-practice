
// increase or derease update
function increaseOrDecrease(type, price, isUpade){
    const inputField = document.getElementById(type + '_input');
    let InputFieldValue = inputField.value;
    
    if(isUpade==true){
        InputFieldValue = parseInt(InputFieldValue) + 1;
        inputField.value = InputFieldValue;       
    }
    else if(InputFieldValue>0){
        InputFieldValue = parseInt(InputFieldValue) - 1;
        inputField.value = InputFieldValue;
    }

    // product total price update
    let porductTotal = document.getElementById(type +'_total');
    let totalValue = inputField.value * price;
    porductTotal.innerText = totalValue;

    getCalculate()
}

// get input value
function getInputValue(typess){
    const inputField = document.getElementById(typess + '_input');
    let inputFieldValue = inputField.value;
    return inputFieldValue;
}
// get calulate subtotal tax and total
function getCalculate(){
    const phonePrice = getInputValue('phone')*1200;
    const casePrice = getInputValue('case')*50;
    const buttryPrice = getInputValue('buttry')*100;

    // subtotal price upadate
    const subtotalPrice = phonePrice+casePrice+buttryPrice;
    document.getElementById('subtotal_price').innerText = subtotalPrice;

    // tax update
    const tax = parseInt((subtotalPrice/100)*10);
    document.getElementById('total_tax').innerText = tax;

    // total price update
    document.getElementById('total_pice').innerText = subtotalPrice + tax;
}



document.getElementById('phone_plus').addEventListener('click', function(){
    increaseOrDecrease('phone', 1200, true)
})
document.getElementById('phone_mainus').addEventListener('click', function(){
    increaseOrDecrease('phone', 1200, false)
})
document.getElementById('case_plus').addEventListener('click', function(){
    increaseOrDecrease('case', 50, true)
})
document.getElementById('case_mainus').addEventListener('click', function(){
    increaseOrDecrease('case', 50, false)
})
document.getElementById('buttry_plus').addEventListener('click', function(){
    increaseOrDecrease('buttry', 100, true)
})
document.getElementById('buttry_mainus').addEventListener('click', function(){
    increaseOrDecrease('buttry', 100, false)
})


// remove items form selected items
function removeItem(num, types){
    document.getElementById(types + '_input').value=0;
    document.getElementById('cart_item_' + num).style.display= 'none';
    let phoneTotalPrice = document.getElementById(types + '_total').innerText;
    let subtotal = document.getElementById('subtotal_price').innerText;
    subtotal1 = parseInt(subtotal) - parseInt(phoneTotalPrice);
    document.getElementById('subtotal_price').innerText = subtotal1;
    // tax section
    const TotalTaxString = document.getElementById('total_tax');
    const totalTax = parseInt((subtotal1 /100) * 10);
    TotalTaxString.innerText =totalTax;

    // total section
    document.getElementById('total_pice').innerText = subtotal1+ totalTax;
}

// input value clear
function inputClear(){
    const buttryInput = document.getElementById('buttry_input');
    buttryInput.value=0;
    const buttryTotal = document.getElementById('buttry_total');
    const buttryTotalNum = buttryTotal.innerText;
    let subtotal = document.getElementById('subtotal_price');
    let subtotalNum = subtotal.innerText;
    console.log(subtotalNum)
    subtotalNum = parseInt(subtotalNum) - parseInt(buttryTotalNum);
    subtotal.innerText=subtotalNum;
    buttryTotal.innerText = 0;

    // tax section
    let TotalTaxString = document.getElementById('total_tax');
    const totalTax = parseInt((subtotalNum /100) * 10);
    // let mainusTax = parseInt(TotalTaxString.innerText)-parseInt(totalTax);
    // TotalTaxString.innerText =totalTax;
    TotalTaxString.innerText=totalTax;

    // total
    document.getElementById('total_pice').innerText = subtotalNum+ totalTax;
}


document.getElementById('remove_product_1').addEventListener('click', function(){
    removeItem('1', 'phone')
})
document.getElementById('remove_product_2').addEventListener('click', function(){
    removeItem('2', 'case')
})
document.getElementById('remove_product_3').addEventListener('click', function(){
    inputClear()
})