import { expect } from "@playwright/test";
class PersonalDetails1 {

    //Constructor
    constructor(page) {
        this.page = page;

        //PD-1-1st page
    this.invTitle = page.getByText("Individual Customer");
       //RefNumber 
    this.refIDfield=page.getByRole('textbox', { name: 'Reference ID' });

    this.salutationDD = page.locator("//div[@class='mb-1' and contains(.,'Customer Name')]//following-sibling::div");
    this.salutationoption = page.locator("div.text-wrap ul li").getByText("DR");

    this.cusfirstname = page.getByPlaceholder("First Name");
    this.cuslastname = page.getByPlaceholder("Last Name");

    this.nationDD = page.locator("//div[@class='mb-1' and contains(.,'Nationality')]//following-sibling::div");
    this.nationoption = page.locator("div.text-wrap ul li").getByText("India");

    this.kycname = page.locator("//input[@id='KYC Name']");

    this.dob = page.locator("//div[@class='custom-date-input-container relative' and contains(.,'Date Of Birth')]//following-sibling::div[contains(.,'Select')]");

    this.verificationDD = page.locator("//div[@class='mb-1' and contains(.,'Verification Type')]//following-sibling::div");
    this.verifyoption = page.getByText("Aadhaar");

    this.aadharfield = page.locator("//input[@id='UID / Aadhaar No']");

    this.saveandcontinueBTN = page.locator("//button[@type='button' and contains(.,'SAVE & CONTINUE')]");



     // PD-1-2nd Page
    this.pdoneiitext = page.getByText("PERSONAL DETAILS 1 - II");

    this.homebranch = page.locator("//input[@id='Customer Home Branch']");

    this.capturesource = page.locator("//div[@class='mb-1' and contains(.,'Capture Source')]//following-sibling::div");
    this.captureoption = page.getByText("BranchWalk-In");

    this.residency = page.locator("//div[@class='mb-1' and contains(.,'Residency')]//following-sibling::div");
    this.residencyoption = page.getByText("Foreign National");

    this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });


    //tag-Edit
     this.editTag=page.getByRole('heading', { name: 'EDIT' });


    //Edit,Close btns
    this.closeBtn=page.locator("//div[contains(@class,'w-full flex flex')]//div[@class='icon-btn-close ']");
    this.confirmforCloseForm=page.locator('p').filter({ hasText: 'Are you sure you want to close?' })
    this.yesBtn=page.getByText('Yes', { exact: true });
    }


    async editAadhar(UpdateAadharNumber){
        await this.aadharfield.fill(UpdateAadharNumber);
        
        
    }

    async editKycName(UpdatedKycName){
        await this.kycname.fill(UpdatedKycName);
        
    }
    

    async clickCloseBtn(){

        await this.closeBtn.click();
    }
    async clickYesBtn(){
        await this.yesBtn.click();
    }

    async personaldetailsoneIFill(firstname,lastname,Aadhar) {

    await this.salutationDD.click();
    await this.salutationoption.click();

    await this.cusfirstname.fill(firstname);
    await this.cuslastname.fill(lastname);

    await this.nationDD.click();
    await this.nationoption.click();

    await this.kycname.fill(firstname + " " + lastname);

    await this.dob.click();

    await this.page.getByText("YEAR").click();
    await this.page.locator("div.react-datepicker__year").getByText("2021").click();
    await this.page.locator("div.react-datepicker__month").getByText("Jan").click();
    await this.page.locator(`[aria-label*="January 21"]`).click();

    await this.verificationDD.click();
    await this.verifyoption.click();

    await this.aadharfield.fill(Aadhar);
    }

    async clicksaveandcontinue() {
    await this.saveandcontinueBTN.click();
    }

    async isPersonalDetailsOneIIDisplayed() {
    return await this.pdoneiitext.isVisible();
}

    async personaldetailsoneIIFill() {
            // const hbtext = await this.homebranch.inputValue();
            // await expect(hbtext).toBe("Main Branch - Mumbai");
        
            await this.capturesource.click();
            await this.captureoption.click();
        
            await this.residency.click();
            await this.residencyoption.click();
        
            
    }

    async Clicksaveandnext() {
        await this.saveandnext.click();
    }


}

export default PersonalDetails1;