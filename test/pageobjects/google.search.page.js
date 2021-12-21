const Page = require('./page');

class GoogleSearch extends Page{

    open(appName) {
        return super.open(appName);
    }
    //get elements

    getSearTextBox(){
        return $("input[type='text']");
    }

    getUdemyLink(){
        return  $("a[href='https://www.udemy.com/topic/automation-testing/']")
    }
    
    getRatingElementList(){
        return $$("div[class= 'a-row a-size-small'] > span > a> span")
    }

    //Verification and actions on the web elements

    enterValueIntoTextkBox(inputText){
        this.getSearTextBox().setValue(inputText+"\n");
    }

    verifyPagetitle(title){
        return expect(browser).toHaveTitleContaining(title);
    }

    verifyPageUrl(url){
        return expect(browser).toHaveUrlContaining(url);
    }
    clickOnUdemyLink(){
        this.getUdemyLink().click()
    }
    getRatingValue(){     
        var elemntLis = this.getRatingElementList()   
        var ratinglList =[]
        for (i=0; i< elemntList.length; i++){
            var value= elemntList[i].getText()
            ratinglList.push(value)
        }
        return ratinglList
    }
    getHigherRatingItem(){
        var valList = this.getRatingValue()
        var elemntList = this.getRatingElementList()
        var original_list = valList
        valList.sort()
        const maxValue = valList[-1]    
        var indexOfMax = original_list.indexOf(maxValue)
        var maximum_ratingItem = elemntList[indexOfMax]
        return maximum_ratingItem
    
    }
}
module.exports = new GoogleSearch();