import Decimal from "decimal.js";


export function convertor(current: string, desired: string, Money: number) {
    const FixedUsdRate: Record<string, Decimal> = {
        'Riyal': new Decimal(0.27),
        'Usd': new Decimal(1),
        'Pounds': new Decimal(1.27),
        'Euro': new Decimal(0.27),
        'Pkr': new Decimal(0.0033),
        'Inr': new Decimal(0.012)
    };

    const FindCurrentCurrencyRate = FixedUsdRate[current];
    const IntoDollar = new Decimal(Money).times(FindCurrentCurrencyRate);
    const FindDesiredCurrencyRate = FixedUsdRate[desired];
    const IntoDesiredCurrency = IntoDollar.times(FindDesiredCurrencyRate);

    console.log(`${current} : ${Money} in ${desired} : ${IntoDesiredCurrency.toFixed(2)}`);
}
