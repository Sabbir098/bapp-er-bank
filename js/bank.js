function getInputValue(inputId){
    const depositAndWithdrawInput = document.getElementById(inputId);
    const depositAndWithdrawAmountText = depositAndWithdrawInput.value;
    const newDepositAndWithdrawAmount = parseFloat(depositAndWithdrawAmountText);
    
    depositAndWithdrawInput.value = '';
    return newDepositAndWithdrawAmount;
}


function updateDepositAndWithdrawBalance(totalFieldId, newDepositAmount){
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
}


function updateBalance(newDepositAmount, isAdd){
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const previousCurrentBalanceAmount = parseFloat(currentBalanceText);
    if(isAdd == true){
        const totalCurrentBalance = previousCurrentBalanceAmount + newDepositAmount;
    currentBalance.innerText = totalCurrentBalance;
    }
    else{
        const totalCurrentBalance = previousCurrentBalanceAmount - newDepositAmount;
    currentBalance.innerText = totalCurrentBalance;
    }
     
}


// handle deposit button even;
document.getElementById('deposit-btn').addEventListener('click', function(){
   /*
    get value from deposit input;
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);
    console.log(newDepositAmount);
    */
    
    /*
    get value from deposit total;
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    */
    
    /*
    update of current Balance 
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const previousCurrentBalanceAmount = parseFloat(currentBalanceText);
    const totalCurrentBalance = previousCurrentBalanceAmount + newDepositAmount;
    currentBalance.innerText = totalCurrentBalance; 
    */
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateDepositAndWithdrawBalance('deposit-total', newDepositAmount)
        updateBalance(newDepositAmount, true)
    }
    

    //  depositInput.value = '';
    
    
}) 


document.getElementById('withdraw-btn').addEventListener('click', function(){
   /*
     get value from withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    */
    
    /*
    get value from withdraw input and set a goted value on withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat( withdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    */
    


    // withdraw total value substraction from current Balance;
    /*
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const previousCurrentBalanceAmount = parseFloat(currentBalanceText);

    const totalCurrentBalance = previousCurrentBalanceAmount - newWithdrawAmount;
    currentBalance.innerText = totalCurrentBalance;
    */
    const newWithdrawAmount = getInputValue('withdraw-input');
    if(newWithdrawAmount > 0 && newWithdrawAmount < totalCurrentBalance){
        updateDepositAndWithdrawBalance('withdraw-total', newWithdrawAmount)
    updateBalance(newWithdrawAmount, false);
    }
    

    // withdrawInput.value = '';








})