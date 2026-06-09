
class ReqrevisionPage{

    //constructor

    constructor(page){
        this.page=page;

        //Table
        this.rows =
            page.locator("table tbody tr");

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
            
        this.toggleBtn=page.locator("//div[contains(@class,'w-[70px] h-[40px] flex items-center')]");

        this.moveMytoGroupconfrmText=page.getByText('Are you sure you want to move this to group inbox?')
        this.yesBtn=page.getByText('Yes', { exact: true });
        this.selfAssignText=page.getByText('Are you sure, you want to Assign yourself?', { exact: true })
        
        //page.getByText('ASSIGN', { exact: true })

       // page.getByText('MOVE', { exact: true })--->move

        //page.locator('div.flex.gap-3.items-center').locator('div').nth(0) -->edit 
        //page.locator('div.flex.gap-3.items-center').locator('div').nth(1)-->reason
    }


    //Actions

    searchCustomerInreqRevqueue(refID){

        return this.rows.filter({hasText:refID}).first();
        
    }

    async clickEditBtnByrefID(refID){
       const row=this.rows.filter({hasText:refID});
       await row.locator('div.flex.gap-3.items-center').locator('div').nth(1).click();
    }

    async clickToggleBtn(){
        await this.toggleBtn.click();
    }
}

export default ReqrevisionPage;