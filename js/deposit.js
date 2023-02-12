// step 1:
document.getElementById('btn-deposit').addEventListener('click',function () {
    // step 2:
    const depositField = document.getElementById('deposit-amount');
    // converted input value into float
    const newDepositAmount = parseFloat(depositField.value);

    // step 3:
    // for not input we will use innerText to get the value
    const totalDeposit = document.getElementById('total-deposit');
    // converted deposit amount into float
    const prevTotalDeposit = parseFloat(totalDeposit.innerText);
    // add new deposit amount with previous deposit amount
    const currentDepositTotal = prevTotalDeposit + newDepositAmount;
    // print total deposit amount
    totalDeposit.innerText = currentDepositTotal;

    // step 4:
    // set balance current total
    const balance = document.getElementById('balance');
    const prevBalance = parseFloat(balance.innerText);
    // set new balance
    const currentBalance = prevBalance + newDepositAmount;
    // print new balance
    balance.innerText = currentBalance;

    depositField.value='';
})