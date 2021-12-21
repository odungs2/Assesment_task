const Page = require('./page');

class AmazonPage extends Page{

    open(appName) {
        return super.open(appName);
    }
    //get elements

    getSearTextBox(){
        return $("#twotabsearchtextbox");
    }

    getSubHeadElement(){
        return $("div[class='a-section a-spacing-small a-spacing-top-small']");
    }

    getLinkElementList(){
        return $$("li[class='a-spacing-micro']");
    }

    getCheckBoxElement(idValue){
        return this.getLinkElementList(). filter(item=>item.getAttribute("id") === idValue);
    
    }

    getShredderElement(){
        return $("a[href*='/AmazonBasics-8-Sheet-Cross-Cut-Credit-Shredder']");
    }

    getAddtoCartButton(){
        return $('#add-to-cart-button');
    }

    getSidePopupCloseButton(){
        return  $('#attach-close_sideSheet-link')
    }
   
    getCartIcon(){
        return $('#nav-cart-count-container')
    }

    getCartItemElement(){
        return $("span[class = 'a-truncate a-size-medium']");
    }

   

    getSubHeadingElement(){
        return $("div[class='a-section a-spacing-small a-spacing-top-small']");
    }

    getCartCountElement(){
        return $("span[class='a-dropdown-prompt']")

    }
    //Verification and actions on the web elements
    enterValueIntoTextBox(inputText){
        this.getSearTextBox().setValue(inputText+"\n");
    }

    verifyPagetitle(title){
        return expect(browser).toHaveTitleContaining(title);
    }

    verifyPagesubHead(subHeadvalue){
        //const subHead = this.getSubHeadElement()
        this.verifyTextcontain(this.getSubHeadElement(), subHeadvalue)
        //expect(subHead).toHaveTextContaining(subHeadvalue);
    }

    verifycartItemText(expectedText){
        this.verifyTextcontain(this.getCartItemElement(), expectedText)
    }
    
    verifyTextcontain(element, expectedText)
    {
        return expect(element).toHaveTextContaining(expectedText);
    }

    verifyCartCount(expectedText){
        this.verifyText(this.getCartCountElement(), expectedText)
    }
    

    verifyText(element, expectedText)
    {
        return expect(element).toHaveText(expectedText);
    }

    clickOnShredderElement(){
        this.getShredderElement().click();
    }

    clickOnAddtocartButton(){
        this.getAddtoCartButton().waitForDisplayed()
        this.getAddtoCartButton().click();
    }

    clickOnSidePopupCloseButton(){
        this.getSidePopupCloseButton().waitForDisplayed()
        this.getSidePopupCloseButton().click();
    }

    clickOnCartIcon(){
        this.getCartIcon().click()
    }

    clickOnCheckBox(idValue){
        this.getCheckBoxElement(idValue)
        .map(amazonbasics=>amazonbasics.$("i[class='a-icon a-icon-checkbox']").click());
    }     
}

module.exports = new AmazonPage();