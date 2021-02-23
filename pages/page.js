module.exports = class Page {

    // generic methods

    /**
     * open the base or a specific path
     * @param {string} path 
     */
    open (path) {
        path = path ? path : '';
        return browser.url (`${browser.options.baseUrl}${path}`);
    }
}