
document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const conversionResult = document.getElementById('conversionResult');

    convertButton.addEventListener('click', function () {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        const conversionRates = {
            'EUR': 0.85,
            'GBP': 0.75,
            'INR': 75.00,
        };

        let convertedAmount;
        if (fromCurrency === 'USD') {
            convertedAmount = amount * conversionRates[toCurrency];
        } else if (toCurrency === 'USD') {
            convertedAmount = amount / conversionRates[fromCurrency];
        } else {
            convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
        }

        conversionResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});
