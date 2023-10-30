"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertor = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
function convertor(current, desired, Money) {
    const FixedUsdRate = {
        'Riyal': new decimal_js_1.default(0.27),
        'Usd': new decimal_js_1.default(1),
        'Pounds': new decimal_js_1.default(1.27),
        'Euro': new decimal_js_1.default(0.27),
        'Pkr': new decimal_js_1.default(0.0033),
        'Inr': new decimal_js_1.default(0.012)
    };
    const FindCurrentCurrencyRate = FixedUsdRate[current];
    const IntoDollar = new decimal_js_1.default(Money).times(FindCurrentCurrencyRate);
    const FindDesiredCurrencyRate = FixedUsdRate[desired];
    const IntoDesiredCurrency = IntoDollar.times(FindDesiredCurrencyRate);
    console.log(`${current} : ${Money} in ${desired} : ${IntoDesiredCurrency.toFixed(2)}`);
}
exports.convertor = convertor;
