
class NomineeDetails {      

        //constructor
        constructor(page) {
            this.page = page;
            this.nomineeButton = page.getByText('Add Nominee Details', { exact: true });
            this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
        }

        
        async isnomineebtnDisplayed(){
        
            return await this.nomineeButton.isVisible();
        }
        
        async clicksaveandnext(){
  
         await this.page.getByText('SAVE & NEXT', { exact: true }).click();
        }



    }
    export default NomineeDetails;