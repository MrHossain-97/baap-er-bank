document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-amount');
    const newWithDrawAmount = parseFloat(withDrawField.value);
    const totalWithdraw = document.getElementById('total-withdraw');
    const prevTotalWithdraw = parseFloat(totalWithdraw.innerText);
    const currentTotalWithdraw = prevTotalWithdraw + newWithDrawAmount;
    totalWithdraw.innerText = currentTotalWithdraw;
    const balance = document.getElementById('balance');
    const prevBalance = parseFloat(balance.innerText);
    const currentBalance = prevBalance - newWithDrawAmount;
    balance.innerText = currentBalance;

    withDrawField.value='';
})