const Util = {};


/**
 * Matches leading or trailing whitespace.
 *
 * @type {!RegExp}
 * @constant
 */
const STRIP_REGEX = /^[\s\u00a0]+|[\s\u00a0]+$/g;


/**
 * Strip whitespace from the beginning and the end of the given string and
 * return the modified string.
 *
 * @param {string} s The string from which to strip whitespace.
 * @returns {string} The given string without whitespace at the beginning or
 *     end or empty string if input is not found.
 */
Util.strip = (s) => {
    if (s) {
        return s.replace(STRIP_REGEX, '');
    }
    return '';
};


/**
 * Returns all text within a given node and its children.
 *
 * @param {Node} e The node.
 * @returns {string} A string representing all of the text within the given node.
 */
Util.getAllText = function (e) {
    var tnc = [];
    if (e) {
        if (e.nodeType == 3) {
            tnc.push(e.nodeValue);
        } else {
            for (var chld = e.firstChild; chld; chld = chld.nextSibling) {
                if (chld.nodeType == 3) { // text node
                    tnc.push(chld.nodeValue);
                } else {
                    if (chld.nodeType == 1) { // element
                        tnc.push(this.getAllText(chld));
                    }
                }
            }
        }
    }
    return tnc.join('');
};


/**
 * Returns the text of a given node with leading/trailing whitespace stripped.
 *
 * @param {Node} e The node.
 * @returns {string} The stripped text within the given node or null if none could be found.
 */
Util.getText = (e) => {
    return Util.strip(Util.getAllText(e));
};

/**
 * Sets the text of a node, returning the node to allow for chaining.
 *
 * @param {!Node} e  The node.
 * @param {string} s  The string to be set as the text for the node.
 * @returns {!Node}  The node passed in.
 */
Util.setText = (e, s) => {
    e.textContent = s;
    return e;
};

export default Util;
