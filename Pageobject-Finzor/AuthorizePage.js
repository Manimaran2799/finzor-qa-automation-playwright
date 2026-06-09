
class AuthorizePage{


    //constructor
    constructor(page) {
        this.page = page;
        this.authorizeRows=this.page.locator("table tbody tr");
        this.authorizeTab=page.getByText('Authorized', { exact: true });

        //firstRow=table locator

        this.firstRow=page.locator("(//tbody//tr)[1]");

        //Deactivate Elements
        this.deactivateHeading=page.getByRole('heading', { name: 'DEACTIVATE' });
        this.cusLinkageLink=page.getByText('CUSTOMER LINKAGE', { exact: true });
        this.deactivateBtninsidePage=page.getByRole('button', { name: 'DEACTIVATE' })
        this.reasonTextBox=page.locator("//textarea[@id='description']");

    }

    //Actions


    //search functions
        searchAuthorizedCustomer(cusID) {
        return this.page.locator("table tbody tr").filter({ hasText: cusID });
        }

        searchCustomerInAuthorizedQueueByName(firstName) {
        return this.page.locator("table tbody tr").filter({ hasText: firstName });
        }

async clickEditBtn(cusID){

    const row=this.authorizeRows.filter({hasText: cusID}).first();
    await row.locator('div.flex.gap-3.items-center').locator('div').nth(0).click();
}

ischeckEditBtnenabled(cusID){

    const row=this.authorizeRows.filter({hasText: cusID}).first();
   
    return this.authorizeRows.filter({hasText: cusID}).locator('div.flex.gap-3.items-center').locator('div').nth(0);


}

async clickDeactivateBtn(cusID){

    const row=this.authorizeRows.filter({hasText: cusID}).first();
    await row.locator('div.flex.gap-3.items-center').locator('div').nth(1).click();
}

async clickCusLinkageLink(){

    await this.cusLinkageLink.click();

}

async clickdeactivatebtninside(){
    await this.deactivateBtninsidePage.click();

}

async fillreasonandclickDeactivate(text){

    await this.reasonTextBox.fill(text);
    await this.page.locator("//div[contains(@class,'flex justify-end gap-4 mt-3')]//div[normalize-space()='DEACTIVATE']").click();
}

async clickAuthorizetab(){
    await this.authorizeTab.click();
}
}

export default AuthorizePage;