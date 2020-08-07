import pkg from '../../package.json';
import Currency from './library/util/currency';

// const logoNode = document.querySelector('.hnf-header__logo img');
// if (logoNode) {
//     logoNode.setAttribute('src', 'https://via.placeholder.com/100x40/ccc/333?text=LOGO');
// }

// const productsLink = document.querySelector('.hnf-header__nav > ul > li:first-child > a');
// productsLink.textContent = `Version: ${pkg.version}`;

// Assign modules to window.ikea global object
window.ikea = window.ikea || {};
window.ikea.frontend = {
    Currency
};

export default {
    Currency
}
