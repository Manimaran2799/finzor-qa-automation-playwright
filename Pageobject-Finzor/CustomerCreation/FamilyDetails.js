
class FamilyDetails {

//constructor

constructor(page) {
    this.page = page;
    //familydetails page
  this.familydetailbtn=page.getByRole("button",{name:"Add Family Details"});
  this.name=page.getByRole('textbox', { name: 'Name *' });
  this.dob=page.getByText('Select Date Of Birth', { exact: true });
  this.genderDD=page.getByText('Select Gender', { exact: true });
  this.genderOption=page.getByText('Male', { exact: true });
  this.relationDD=page.getByText('Select Relation', { exact: true })
  this.relationOption=page.getByText('PAN Holder', { exact: true });
  this.saveBtn=page.getByRole('button', { name: 'SAVE' });
  
  this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
}

//functions

async isfamilydetailbtnDisplayed() {

    return await this.familydetailbtn.isVisible();

}

async clickFamilyDetailsBtn(){
  await this.familydetailbtn.click();

}

async fillForm(){
  await this.name.fill("Rahim");

  await this.dob.click();

    await this.page.getByText("YEAR").click();
    await this.page.locator("div.react-datepicker__year").getByText("2021").click();
    await this.page.locator("div.react-datepicker__month").getByText("Jan").click();
    await this.page.locator(`[aria-label*="January 21"]`).click();

  await this.genderDD.click();
  await this.genderOption.click();
  await this.relationDD.click();
  await this.relationOption.click();
  await this.saveBtn.click();

}

async issaveandnextBtnDisplayed(){
  return await this.page.getByRole("button", { name: 'SAVE & NEXT' }).isVisible();
}
async clicksaveandnext(){
  
  await this.page.getByRole("button", { name: 'SAVE & NEXT' }).click();
}
}
export default FamilyDetails;