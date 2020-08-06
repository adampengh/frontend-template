import Currency from './src/util/currency';

const number = 1234.56;
const price = Currency.formatCurrency(number);
console.log('Price:', price);

const logoNode = document.querySelector('.hnf-header__logo img');
logoNode.setAttribute('src', 'https://via.placeholder.com/100x40/ccc/333?text=Hello');

window.ikea = window.ikea || {};
window.ikea.frontend = {
    Currency
};

export default {
    Currency
}
