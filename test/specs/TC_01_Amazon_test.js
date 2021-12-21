const amazonPage = require('../pageobjects/amazon.page');

describe('Amazon Test', ()=>
{
    it('Add Amazon Basics product 8-Sheet Capacity Shredder in to the cart', ()=>
    {        
        browser.maximizeWindow();
        amazonPage.open("amazon");
        amazonPage.verifyPagetitle('Amazon.com : AmazonBasics') //verify Amazon basics search page is displayed
        amazonPage.verifyPagesubHead('AmazonBasics') //Verify that results for "amazonbasics" are displayed
        amazonPage.clickOnCheckBox("p_89\/Amazon Basics") //Select Amazon Basics check box
        amazonPage.clickOnShredderElement() //select Shredder item
        amazonPage.verifyPagetitle('Amazon.com : Amazon Basics 8-Sheet Capacity') //Verify that the product page is displayed
        //Verify the '8 Sheet' is selected under 'Size' section on the product page
        /*
        */
        amazonPage.clickOnAddtocartButton() //Add item to cart
        browser.pause(2000) // Giving dealy to displaye the side panel fully
        amazonPage.clickOnSidePopupCloseButton() //close the side popups
        browser.pause(1000)
        amazonPage.clickOnCartIcon() //Verify item added to cart        
        amazonPage.verifyPagetitle('Amazon.com Shopping Cart')//Verify cart page title
        amazonPage.verifycartItemText('Amazon Basics 8-Sheet Capacity')//Verify item added to cart
        amazonPage.verifyCartCount('1')//Verify number of items added to cart  
    });
});