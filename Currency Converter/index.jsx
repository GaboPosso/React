const { useState, useMemo, useCallback } = React;

const currencyValues = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {
    return (
        <div>
            <input type="number" name="" id="" />
            <select name="currency" id="currency">
                {currencyValues.map((currency) => {
                    <option value={currency}>{currency}</option>
                })}
            </select>
            <select name="currencyValue" id="currency-value">
                {currencyValues.map((currencyValue) => {
                    <option value={currencyValue}>{currencyValue.value}</option>
                })}
            </select>
        </div>
    )
}