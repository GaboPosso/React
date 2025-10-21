const { useState, useMemo, useCallback } = React;

const currencyValues = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [amount, setAmount] = useState(0);
    const [toCurrency, setToCurrency] = useState('EUR');
    const currencies = useMemo(() => Object.keys(currencyValues), []);

    const convertedAmount = useMemo(() => {
        const fromValue = currencyValues[fromCurrency];
        const toValue = currencyValues[toCurrency];
        return (amount / fromValue) * toValue;
    }, [amount, fromCurrency, toCurrency]);

    const handleFromCurrencyChange = useCallback((e) => {
        setFromCurrency(e.target.value);
    }, []);

    const handleToCurrencyChange = useCallback((e) => {
        setToCurrency(e.target.value);
    }, []);

    return (
        <div>
            <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} />
            <select name="currency" id="currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <select name="currencyValue" id="currency-value" value={toCurrency} onChange={handleToCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency} ({currencyValues[currency]})
                    </option>
                ))}
            </select>

            <div>
                {amount} {fromCurrency} =  {convertedAmount.toFixed(2)} {toCurrency}
            </div>
        </div>
    )
}