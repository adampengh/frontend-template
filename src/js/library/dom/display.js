const Display = {};


/**
 * Hides a selected element
 * @param {HTMLElement} target Node we want to hide
 */
Display.hideNode = (target) => {
    if (target.style) {
        target.style.display = 'none';
    }
};

/**
 * Show a hidden element
 * @param {HTMLElement} target
 */
Display.showNode = (target) => {
    if (target.style.display === 'none') {
        target.style.display = '';
    }
}

/**
 * Toggle visibility of an element
 * @param {HTMLElement} target The element to target visiblity on
 */
Display.toggleVisibility = (target) => {
    if (target.style.visibility === 'hidden') {
        target.style.visibility = 'visible';
    } else {
        target.style.visibility = 'hidden';
    }
};

/**
 * Inserts a node after a target node
 * @param {!HTMLElement} target Node we want to insert after.
 * @param {!Node} element Node to insert.
 */
Display.insertAfter = (target, element) => {
    let nextSibling = target.nextSibling;
    let nextValidSibling;
    while (nextSibling) {
        if (nextSibling.nodeType === 1 || nextSibling.nodeType === 3) {
            nextValidSibling = nextSibling;
            break;
        }
        nextSibling = nextSibling.nextSibling;
    }

    if (nextValidSibling) {
        target.parentNode.insertBefore(element, nextValidSibling);
    } else {
        target.parentNode.appendChild(element);
    }
};


/**
 * Inserts a node before a target node
 * @param {!HTMLElement} target Node we want to insert before
 * @param {!Node} element Node to insert
 */
Display.insertBefore = (target, element) => {
    target.parentNode.insertBefore(element, target);
};


/**
 * Inserts a node as the first child of a target node
 * @param {!HTMLElement} target Node we want to insert child into
 * @param {!Node} element Node to insert
 */
Display.insertFirstChild = (target, element) => {
    target.insertBefore(element, target.firstChild);
};


/**
 * Inserts a node as the last child of a target node
 * @param {!HTMLElement} target Node we want to insert child into
 * @param {!Node} element Node to insert
 */
Display.insertLastChild = (target, element) => {
    target.appendChild(element);
};


/**
 * Hides the target element and insert the new element after the target element
 * @param {!HTMLElement} target Target element
 * @param {!Node} element Replacement element
 */
Display.insertReplace = (target, element) => {
    Display.hideNode(target);
    Display.insertAfter(target, element);
};


/**
 * Insert the replacement node as a child of the target element
 * Moves all of the existing chilc element(s) to a hidden div as the first child of the body
 * @param {!HTMLElement} target Target element
 * @param {!Node} element Replacement element
 */
Display.insertTakeover = (target, element) => {
    if (document.body) {
        const hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'frontend_hidden_takeover';
        hiddenDiv.style.display = 'none';

        let child;
        while ((child = target.firstChild)) {
            hiddenDiv.appendChild(child);
        }

        Display.insertFirstChild(target, element);
        Display.insertFirstChild(document.body, hiddenDiv);
    }
};


Display.INSERT_METHODS = {
    'after': Display.insertAfter,
    'before': Display.insertBefore,
    'first': Display.insertFirstChild,
    'last': Display.insertLastChild,
    'replace': Display.insertReplace,
    'takeover': Display.insertTakeover
};


/**
 * Inserts a node using an insertion method relative to a target node
 * @param {Node} element The node we are inserting
 * @param {Node} target The target element
 * @param {string} insertMethod The insertion method
 */
Display.insertNode = (element, target, insertMethod) => {
    console.group('Display.insertNode');

    const insert = Display.INSERT_METHODS[insertMethod];
    insert(target, element);

    console.groupEnd();
};


/**
 * Create an element from HTML string
 * @param {string} html The HTML string to convert to an element
 * @returns {!Node} The element converted from HTML string
 */
Display.createElementFromHTML = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html.trim();

    return div.firstChild; // Change this to div.childNodes to support multiple top-level nodes
};

/**
 * Inserts an image relative to a target element
 * @param {HTMLElement} targetNode The target element
 * @param {string} insertMethod Insertion method
 * @param {string} html HTML to be inserted
 */
Display.insertHTML = (targetNode, insertMethod, html) => {
    const element = Display.createElementFromHTML(html);
    // Insert the HTML
    Display.insertNode(element, targetNode, insertMethod);
};


/**
 * Inserts an image relative to a target element
 * @param {HTMLElement} targetNode The target element
 * @param {string} insertMethod Insertion method
 * @param {string} src Image src attribute
 * @param {string} alt Alt text attribute
 * @param {string=} opt_title Optional title attribute
 */
Display.insertImage = (targetNode, insertMethod, src, alt, opt_title) => {
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', alt);
    if (opt_title) {
        img.setAttribute('title', opt_title);
    }

    // Insert the image
    Display.insertNode(img, targetNode, insertMethod);
};


export default Display;
