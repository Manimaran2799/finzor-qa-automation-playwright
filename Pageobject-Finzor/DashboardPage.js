
class DashboardPage{


    //Constructor 
    constructor(page){
        this.page=page;

        //Locators
    this.CusTypeDD = page.locator("div.cursor-pointer").getByText("Corporate");
    this.Invoption = page.locator("div.cursor-pointer").getByText("INDIVIDUAL");
    this.createnewBTN = page.locator("div.cursor-pointer").getByText("CREATE NEW");
    this.generic = page.getByText("GENERIC CUSTOMER");
    this.invTitle = page.getByText("Individual Customer");


    //tabs
     this.draftTab=page.getByRole('button', { name: 'Draft' });
     this.authorizeTab=page.getByText('Authorized', { exact: true })
     this.unauthorizedTab=page.getByText('Unauthorized', { exact: true })
     this.requestRevisionTab=page.getByText('Request Revision', { exact: true })
     this.rejectedTab=page.getByRole('button', { name: 'Rejected' });
     this.deactivatedTab=page.getByRole('button', { name: 'Deactivated' })
    }

  
    //Functions
    async navigateToCustomerCreation(){
    await this.CusTypeDD.click();
    await this.Invoption.click();
    await this.createnewBTN.click();
    await this.generic.click();
  
}

async navigateToInvCustomerPage(){
    await this.CusTypeDD.click();
    await this.Invoption.click();
}

async navigateToAuthorizedQueue() {
    await this.authorizedTab.click();
}

async navigateToUnauthorizedQueue() {
    await this.unauthorizedTab.click();
}

async navigateToDraftQueue() {
    await this.draftTab.click();
}

async navigateToRequestRevisionQueue() {
    await this.requestRevisionTab.click();
}

async navigateToRejectedQueue() {
    await this.rejectedTab.click();
}

async navigateToDeactivatedQueue() {
    await this.deactivatedTab.click();
}

    // Flow Validation
   isCustomerCreationPageVisible(){

        return this.page.getByText("Individual Customer");
    }



}
export default DashboardPage;