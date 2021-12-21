/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(appName) {
        var app_url = ""
        if (appName == 'google')
        {
            app_url = "https://www.google.com/"
        }

        if (appName == 'amazon')
        {
            app_url = "https://www.amazon.com/"
        }

        else if(appName == 'demoqa')
        {
            app_url = "https://demoqa.com/"
        }
        return browser.url(app_url)
    }
}
