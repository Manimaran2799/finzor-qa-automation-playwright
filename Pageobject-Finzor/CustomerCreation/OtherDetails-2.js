
class OtherDetails2{

    //constructor

    constructor(page){
        this.page=page;
        
  //otherdertails-2-1
  this.directorcheckbox=page.locator("//div[@class='mb-5' and normalize-space()='Director']/following-sibling::div//span").getByText("YES");
  this.relateddirectorchkbox=page.locator("//div[@class='mb-5' and normalize-space()='Related To Director']/following-sibling::div");
  this.foreignTravelchkBox=page.locator('span').filter({ hasText: 'YES' }).first();  
  
   //Navigation Btns
  this.saveandcontinueBTN=page.getByRole("button",{name:"Save and Continue"});
  this.saveandnext=page.getByRole('button', { name: 'SAVE & NEXT' })

}


    async otherdetailstwoone(){
    await this.directorcheckbox.check();
    

    }
    getDirectorbox(){
        return this.page.locator("//div[@class='mb-5' and normalize-space()='Director']/following-sibling::div//span").getByText("YES");
    }
    
    async isrelateddirectorchkboxDisplayed(){
        return await this.relateddirectorchkbox.isNotVisible();
    }  
    
    //Check Related to Director checkbox and click on Save and Continue button --->asserts
    async clicksaveandcontinueBTN(){
        await  this.page.getByRole('button', { name: 'SAVE & CONTINUE' }).click();
    };
    
    async otherdetailstwotwo(){
    await this.foreignTravelchkBox.check();
    
    
    }

       async Clicksaveandnext() {
        await this.saveandnext.click();
    }
}
export  default OtherDetails2;