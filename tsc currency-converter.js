"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CurrencyConverter {
    constructor() {
        this.exchangeRates = {};
    }
    fetchExchangeRates() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiKey = 'YOUR_API_KEY'; // Replace with your API key
            const apiUrl = `https://api.openexchangerates.org/latest.json?app_id=${apiKey}`;
            try {
                const response = yield fetch(apiUrl);
                const data = yield response.json();
                if (data.rates) {
                    this.exchangeRates = data.rates;
                }
            }
            catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        });
    }
    convert(amount, sourceCurrency, targetCurrency) {
        if (!this.exchangeRates[sourceCurrency] || !this.exchangeRates[targetCurrency]) {
            throw new Error('Invalid currency codes');
        }
        const sourceRate = this.exchangeRates[sourceCurrency];
        const targetRate = this.exchangeRates[targetCurrency];
        return (amount / sourceRate) * targetRate;
    }
}
// Example usage:
const converter = new CurrencyConverter();
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        yield converter.fetchExchangeRates();
        // Now, you can use the `converter` object to convert currencies.
        const amountToConvert = 100;
        const sourceCurrency = 'USD';
        const targetCurrency = 'EUR';
        const convertedAmount = converter.convert(amountToConvert, sourceCurrency, targetCurrency);
        console.log(`Converted ${amountToConvert} ${sourceCurrency} to ${targetCurrency}: ${convertedAmount}`);
    });
}
initialize();
