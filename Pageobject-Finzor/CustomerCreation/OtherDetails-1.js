

class OtherDetails{


   constructor(page){
  this.page=page;
  this.riskrating=page.locator("//div[@class='mb-1' and contains(.,'AML Customer Risk Rating')]//following-sibling::div")
  this.riskratingoption=page.locator("div.text-wrap ul li").getByText("Medium");

  
  this.ratingdate=page.locator("//div[contains(@class,'custom-date-input') and contains(.,'KYC Rating Date')]//following-sibling::div");

  //Navigation Btns
  this.saveandcontinueBTN=page.getByRole("button",{name:"Save and Continue"});
  this.saveandnext=page.getByRole('button', { name: 'SAVE & NEXT' })

}

//Actions
 async otherdetailsonei(){
  await this.riskrating.click();
  await this.riskratingoption.click();
  
}

async clicksaveandcontinue() {
    await this.page.getByRole('button', { name: 'SAVE & CONTINUE' }).click();
    }

async ischeckRatingDateDisplayed(){
  
 return await this.ratingdate.isVisible();
}


    async Clicksaveandnext() {
        await this.saveandnext.click();
    }

}

export default OtherDetails;