const demoQaPage = require('../pageobjects/demoqa.page');

describe('DemoQA Test-Web Tables', ()=>
{
    it('Add new user in the Webtables page', ()=>
    {
        browser.maximizeWindow();
        demoQaPage.open("demoqa"); 
        demoQaPage.verifyPagetitle('ToolsQA')  //verify the title of the ToolsQA      
        demoQaPage.clickOnCategory("Elements")   //click on Element 
        demoQaPage.verifyPageUrl('elements') //Verify elements screen url
        demoQaPage.clickOnMenu("Web Tables") //click on web tables menu item
        demoQaPage.verifyPageUrl('webtables') //Verify web tables screen url       
        demoQaPage.clickOnAddButton() //tap on Add button
        //Verify the form
        const modelID = demoQaPage.getModelID()
        modelID.waitForDisplayed()
        demoQaPage.verifyTextcontain(modelID, 'Registration Form')//verify title of the form
        //fill the form
        const formIDs = ["#firstName","#lastName", "#age","#userEmail", "#salary", "#department"]
        const valueList = ["Abi","raj","30", "abi@gamil.com","15000","Medical"]        
        for (let i=0, j=0; i < formIDs.length, j< valueList.length ; i++, j++){
                $(formIDs[i]).setValue(valueList[j])
            }
        browser.pause(1000)        
        $("#submit").click()  //click on submit button
        browser.pause(1000)
        //verify the added value is displayed in the table.
        let newRow = $("div.rt-tbody > div:nth-child(4) > div")
        for (let i=1, j=0; i <= valueList.length, j < valueList.length; i++, j++){
            expect(newRow.$("div:nth-child("+i+")")).toHaveText(valueList[j])
        }       
        
    });
});