class DraftPage{


  //constructor
  constructor(page)
{
  this.page=page;
  this.draftRows=page.locator("table tbody tr");
  this.closeBtn=page.locator('.w-full > .icon-btn-close');
  this.draftFirstrow=page.locator("(//tbody//tr)[1]");
 
  this.closeConfirmationMsg=page.locator('p:has-text("Are you sure you want to close?")');
  this.closeYesBtn=page.getByText('Yes', { exact: true });


  
  //DraftBtn
 
  this.unauthorizedTab=page.getByText('Unauthorized', { exact: true });

  //Headings
  this.editHeading=page.getByText('EDIT', { exact: true });
  this.deleteHeading=page.getByRole('heading', { name: 'DELETE' })

  this.customerLinkagePage=page.getByText('CUSTOMER LINKAGE', { exact: true });
  this.deleteBtnInsideform=page.getByRole('button', { name: 'DELETE' });
  this.deleteConfirmationMsg=page.locator('p:has-text("Are you sure, you want to delete?")');
  this.yesBtn=page.getByText('Yes', { exact: true });




}

//actions


searchDraftByName(firstName){
  return this.draftRows.filter({hasText:firstName}).first();
}

searchDraftByCusID(cusID){
  return this.draftRows.filter({hasText:cusID}).first();
}

searchDraftByRefID(refID){

  return this.draftRows.filter({hasText:refID}).first();
}

async clickCloseBtn(){
  await this.closeBtn.click();
}

async clickYesBtnOnClose(){
  await this.closeYesBtn.click();
}

//Click refresh and Draft Tab




async clickUnauthorizedTab(){
  await this.unauthorizedTab.click();
}

  async reload() {
        await this.page.reload({ waitUntil: 'networkidle' });
    }

async clickForEdit(firstName){
  await  this.draftRows.filter({hastext:firstName}).first().click();

}
async clickForEditbyCusID(cusID){
  await  this.draftRows.filter({hastext:cusID}).first().click();

}

async clickForEditbyrefID(refID){
  await  this.draftRows.filter({hastext:refID}).first().click();

}

async clickDeleteBtn(firstName){
  await this.draftRows.filter({hastext:firstName}).first().locator("div.bg-action_bg").click();  

}

async clickCustomerLinkage(){
  await this.customerLinkagePage.click();
}

async clickDeleteBtnInsideForm(){
  await this.deleteBtnInsideform.click(); 
}
async clickYesBtn(){
  await this.yesBtn.click();  
}



}

export default DraftPage;