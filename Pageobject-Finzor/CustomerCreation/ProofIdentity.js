
class ProofIdentity {


    //constructor
    constructor(page) {
        this.page = page;

    //locators
    this.newdocBTN=page.getByRole("button",{name:"ADD NEW DOCUMENT"});
      this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
    }

   async isnewDocBtnPresent(){

        return await this.newdocBTN.isVisible();
       
    }

    async Clicksaveandnext() {
        await this.saveandnext.click();
    }



}
export default ProofIdentity;