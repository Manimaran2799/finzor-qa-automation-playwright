import { expect } from '@playwright/test';

class Unauthorized {

    constructor(page) {

        this.page = page;

        this.unauthorizeTab=page.getByText('Unauthorized', { exact: true });

        this.rows =
            page.locator("table tbody tr");

        this.detailsHeading=page.getByRole('heading', { name: /DETAILS/i })

        this.groupInboxText =
            page.getByText(
                'Group Inbox',
                { exact: true }
            );

        this.myInboxText =
            page.getByText(
                "My Inbox",
                { exact: true }
            );


        // Inside Form-->authorize
        this.historyPage =
            page.locator("ul li")
                .filter({ hasText: "HISTORY" });

        this.nextBtn =
            page.getByRole(
                "button",
                { name: "NEXT" }
            );

        this.authorizeBtn =
           page.locator('button').filter({ hasText: 'AUTHORIZE' }).first()

        this.yesBtn =
           page.getByText('Yes', { exact: true });


        // CusID
        this.cusID =
            page.locator(
                "//div[@class='mb-4']//p[contains(text(),'INDI')]"
            );


        //reject 
        this.rejectBtn=page.getByRole('button', { name: 'REJECT' })  
        this.reasonHeading=page.getByText('Reason', { exact: true });
        this.descriptionTextfield=page.getByRole('textbox', { name: 'Enter Description' });
        this.rejectBtnInsideform=page.locator('div.flex.justify-end.gap-4.mt-3').locator('button').nth(1);

        //req revision
        this.reqRevisionBtn=page.getByRole('button', { name: /REQUEST REVISION/i });
        this.submitBtn=page.getByRole('button', { name: 'SUBMIT' });
    
    }


    // Assertion Helpers

    // async isGroupInboxVisible() {

    //     return await this.groupInboxText
    //         .isVisible();
    // }


    // async isMyInboxVisible() {

    //     return await this.myInboxText
    //         .isVisible();
    // }


    async isFormPresent(refID) {

        return await this.rows
            .filter({ hasText: refID })
            .first()
            .isVisible();
    }

     searchCustomerUnauthorizedQueueByName(firstName) {
        return this.page.locator("table tbody tr").filter({ hasText: firstName });
}

  searchAuthorizedCustomer(refID){
        return this.page.locator("table tbody tr").filter({ hasText: refID }).first();
        }

    async isAuthorizeButtonVisible() {

        return await this.authorizeBtn  
            .isVisible();
    }


    // Actions

    async clickUnauthorizeBtn(){
        await this.unauthorizeTab.click();
    }

  async clickAssignBtn(refID) {

    const row = this.rows
        .filter({ hasText: refID })
        .first();

    await expect(row).toBeVisible();

    console.log("Assign Row Text:");
    console.log(await row.innerText());

    const assignBtn = row.getByRole("button", {
        name: "ASSIGN"
    });

    await expect(assignBtn).toBeVisible();
    await expect(assignBtn).toBeEnabled();

    await assignBtn.click();

    await expect(this.yesBtn).toBeVisible();
    await this.yesBtn.click();
}


   async clickAuthorizeBtn(refID) {

    const rows = this.rows.filter({ hasText: refID });

    console.log("Rows Found:", await rows.count());

    const row = rows.first();

    await expect(row).toBeVisible();

    console.log("Row Text:");
    console.log(await row.innerText());

    const authorizeBtn = row.getByRole("button", {
        name: "AUTHORIZE"
    });

    await expect(authorizeBtn).toBeVisible();
    await expect(authorizeBtn).toBeEnabled();

    await authorizeBtn.click();
}

    
        // await row
        //     .getByRole("button", { name: "AUTHORIZE" })
        //     .click();


    async navigateToHistoryPage() {

        await this.historyPage.click();

        await this.nextBtn.click();
    }

    async clickReqrevisionBtn(){
        await this.reqRevisionBtn.click();
    }


    async completeAuthorization() {

    await expect(this.authorizeBtn).toBeVisible();
    await expect(this.authorizeBtn).toBeEnabled();

    await this.authorizeBtn.click();

    await expect(this.yesBtn).toBeVisible();
    await expect(this.yesBtn).toBeEnabled();

    await this.yesBtn.click();

    await expect(this.cusID).toBeVisible();

    const cusID = await this.cusID.textContent();

    return cusID.trim();
}


    async completeAuthorizeAfterEdit(){
        await this.authorizeBtn.click();

        await this.yesBtn.click();

    }

    //click reject Btn
    async clickRejectBtn(){
        await this.rejectBtn.click();
    }

    async fillformRejectandClickreject(descriptionText){
        await this.descriptionTextfield.fill(descriptionText);
        await this.rejectBtnInsideform.click();


    }

    async fillformReqrevisiontandClickreqrevision(ReqRevisionreasonText){
        await this.descriptionTextfield.fill(ReqRevisionreasonText);
        await this.submitBtn.click();
    }
}


export default Unauthorized;