import Currency from './src/util/currency';

const number = 1234.56;
const string = Currency.formatCurrency(number);
console.log('Price:', string);

export {
    Currency
}
