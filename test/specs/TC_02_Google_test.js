const googleSearchPage = require('../pageobjects/google.search.page');


describe('Google Test', ()=>
{
    it('Search for highest rating Test Automation Learning portel', ()=>
    {
        browser.maximizeWindow();       
        googleSearchPage.open("google")        
        googleSearchPage.verifyPagetitle('Google') //verify the title of the google
        googleSearchPage.enterValueIntoTextkBox("Test Automation Learning"); //Enter 'Test Automation Learning' in search box
        googleSearchPage.verifyPagetitle('Test Automation Learning') //verify the title of the search result page
        googleSearchPage.clickOnUdemyLink();  //Click on udemy link
        googleSearchPage.verifyPageUrl('https://www.udemy.com/') //verify the url of the Udemy site        
        googleSearchPage.enterValueIntoTextkBox("BDD with Cucumber"); //Search for 'BDD with Cucumber' course
        //Select highest rating course from search result
        /*
        var higherRatingItem = googleSearchPage.getHigherRatingItem()
        higherRatingItem.click()
        */  
        browser.pause(10000)        
    });
});