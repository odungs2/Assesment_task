const Page = require('./page');

class AmazonPage extends Page{

    open(appName) {
        return super.open(appName);
    }
    //get elements

    getSearTextBox(){
        return $("#twotabsearchtextbox");
    }

    getCategoryList(){
        return $$("div[class='card mt-4 top-card']");
    }

    getElementMenuList(){
        return $$("li#item-3.btn.btn-light")

    }

    getAddButton(){
        return $("#addNewRecordButton")
    }

    getModelID(){
        return $("#registration-form-modal")
    }

    getCategoryItemElement(itemText){
        var categoryList = this.getCategoryList();
        var elementsCategory = categoryList.filter(item=>item.getText("h5") === itemText)
        return elementsCategory[0]

    }
    getElementMenuItemList(menuText){
        var menuItemList = this.getElementMenuList();
        var menuItem = menuItemList.filter(item=>item.getText("span") === menuText)
        return menuItem[0]
    }
    //Verification and actions on the web elements
    clickOnCategory(itemText){
        var categoryItem = this.getCategoryItemElement(itemText)
        categoryItem.scrollIntoView();
        browser.pause(1000)
        categoryItem.click()

    }
    clickOnMenu(menuText){
        var ElementMenuItem = this.getElementMenuItemList(menuText)
        ElementMenuItem.scrollIntoView();
        browser.pause(1000)
        ElementMenuItem.click()
    }

    clickOnAddButton(){
        const addButton = this.getAddButton()
        addButton.scrollIntoView()
        addButton.click()
    }   

    verifyPagetitle(title){
        return expect(browser).toHaveTitleContaining(title);
    }

    verifyPageUrl(url){
        return expect(browser).toHaveUrlContaining(url);
    }

    verifyTextcontain(element, expectedText)
    {
        return expect(element).toHaveTextContaining(expectedText);
    }   
}

module.exports = new AmazonPage();