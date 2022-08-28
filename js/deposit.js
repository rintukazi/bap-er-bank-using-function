document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositTotal =getInputElementValueById('deposit-field');
    const previousDepositTotal =getTextElementValueById('deposit-total');
    const currentDepositTotal = newDepositTotal + previousDepositTotal;
    //set deposit total
    setTextElementValue('deposit-total',currentDepositTotal);
})