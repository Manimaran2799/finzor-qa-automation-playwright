import { expect } from '@playwright/test';
class HistoryPage{

    //constructor
    constructor(page){
        this.page =page;
        this.HistoryPage=page.getByText('HISTORY', { exact: true });
        this.HistoryTable=page.locator("table tbody");

        this.nextBtn=page.getByRole('button', { name: 'NEXT' });
        this.submitBtn=page.getByRole('button', { name: 'SUBMIT' });

        //ConfirmText
        this.submitConfirmText=page.getByText('Are you sure, you want to Submit', { exact: true });

        //yes button
        this.yesbuttonsubmit=page.getByRole("button",{name:"Yes"});
        

    }

    async clickHistoryPage(){
        await this.HistoryPage.click();
    }

    async clickNextBtn(){
        await this.nextBtn.click();
    }

    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

   async clickYesBtn() {

    await expect(this.yesbuttonsubmit).toBeVisible();
    await expect(this.yesbuttonsubmit).toBeEnabled();

    await this.yesbuttonsubmit.click();
}


}
export default HistoryPage;