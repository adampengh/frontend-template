import Currency from './library/currency';
import Display from './library/display';
import Dom from './library/dom';
import Util from './library/util';

// Replace the current IKEA header logo with a new placeholder image
const logo = document.querySelector('.hnf-header__logo img');
if (logo) {
    Display.insertImage(logo, 'https://via.placeholder.com/100x40?text=LOGO', 'LOGO', 'NEW LOGO');
}


export {
    Currency,
    Display,
    Dom,
    Util
}
