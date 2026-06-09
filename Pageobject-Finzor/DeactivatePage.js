
class DeactivatePage{


    //constructor
    constructor(page){

        this.page =page;
        this.actionComponent=page.locator("//div[@class='bg-action_bg flex justify-center items-center 4xl:!w-9 4xl:!h-9 3xl:!w-8 3xl:!h-8 2xl:!w-6 2xl:!h-6 xl-sm:!w-6 xl-sm:!h-6 lg:!w-5 lg:!h-5 md:!w-5 md:!h-5 rounded-full cursor-pointer']")
        this.reasonTextfield=page.locator("div[class='shadow-light-outset dark:shadow-dark-outset dark:text-dark-textColor rounded-[30px] p-[20px] h-[220px] text-[16px] break-words overflow-y-auto']");

        //table
        this.deactivateRows=this.page.locator("table tbody tr");

    }

    searchDeactivatedCustomer(cusID) {
        return this.page.locator("table tbody tr").filter({ hasText: cusID }).first();
}

  searchCustomerInDeactivatedQueueByName(firstName) {
        return this.page.locator("table tbody tr").filter({ hasText: firstName });
}

    async clickAction(cusID){
       

    const row=this.deactivateRows.filter({hasText: cusID}).first();
    await row.locator("//div[@class='bg-action_bg flex justify-center items-center 4xl:!w-9 4xl:!h-9 3xl:!w-8 3xl:!h-8 2xl:!w-6 2xl:!h-6 xl-sm:!w-6 xl-sm:!h-6 lg:!w-5 lg:!h-5 md:!w-5 md:!h-5 rounded-full cursor-pointer']").click();

    }

    async returnreasonText(){

        return await this.reasonTextfield.innerText();
    }

   

}

export default DeactivatePage;