interface ExchangeRates {
    [currencyCode: string]: number;
  }
  
  class CurrencyConverter {
    private exchangeRates: ExchangeRates = {};
  
    async fetchExchangeRates(): Promise<void> {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const apiUrl = `https://api.openexchangerates.org/latest.json?app_id=${apiKey}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (data.rates) {
          this.exchangeRates = data.rates;
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    }
  
    convert(amount: number, sourceCurrency: string, targetCurrency: string): number {
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
  
  async function initialize() {
    await converter.fetchExchangeRates();
    // Now, you can use the `converter` object to convert currencies.
    const amountToConvert = 100;
    const sourceCurrency = 'USD';
    const targetCurrency = 'EUR';
    const convertedAmount = converter.convert(amountToConvert, sourceCurrency, targetCurrency);
    console.log(`Converted ${amountToConvert} ${sourceCurrency} to ${targetCurrency}: ${convertedAmount}`);
  }
  
  initialize();
  