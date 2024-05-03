
const currencyRates = {
    BRL: 1,
    USD: 0.19, 
    EUR: 0.16, 
    GBP: 0.14, 
    JPY: 22.78, 
    CNY: 1.34 
};


function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    // Check if amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, coloque um numero válido.');
        return;
    }

   
    if (fromCurrency === toCurrency) {
        alert('Por favor, selecione moedas diferentes.');
        return;
    }

    
    const convertedAmount = amount * currencyRates[toCurrency] / currencyRates[fromCurrency];
    const result = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;


    document.getElementById('result').innerText = result;
}
