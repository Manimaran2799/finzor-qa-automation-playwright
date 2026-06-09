
class TDSinfo {

    //constructor

    constructor(page) {

this.page = page;
this.appliedfor=page.locator("//div[@class='mb-1' and contains(.,'Applied For')]//following-sibling::div");
this.appliedforoption=page.locator("div.text-wrap ul li").getByText("None");
 
this.tdsreasoncode=page.locator("//div[@class='mb-1' and contains(.,'TDS Reason Code')]//following-sibling::div");
this.reasoncodeoption=page.locator("div.text-wrap ul li").getByText("Member");

//this.effectivedate=page.locator("div.custom-date-input-container span.custom-placeholder");
this.effectivedate=page.getByText('Select Effective Date')
this.effectiveDatePicker=page.getByRole('dialog', { name: 'Choose Date' });
this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
}

async tdsinfo(){
  await this.appliedfor.click();
  await this.appliedforoption.click();
  await this.tdsreasoncode.click();
  await this.reasoncodeoption.click();

}
async openEffectiveDate(){

  await this.effectivedate.click();
  
}

async selecteffectivedate(){
  
  await this.page.locator("//label[text()='YEAR']").click();
  await this.page.locator("//div[contains(@class,'react-datepicker__year')and text()='2021']").click();
  await this.page.getByLabel('Choose June 2021', { exact: true }).click();
  await this.page.getByLabel('Choose Wednesday, June 16th, 2021', { exact: true }).click();
}

async clicksaveandnext(){
await this.saveandnext.click();
}

}
export default TDSinfo;