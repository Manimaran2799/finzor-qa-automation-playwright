
class TaxRegistration {

    //constructor

    constructor(page) {

        this.page = page;

        this.taxRegistrationLink=page.getByText('TAX REGISTRATION', { exact: true })
    
        this.taxregistrationbtn = page.getByRole('button', { name: 'Add Tax Registration' });
        this.registerTypeDD=page.getByText('Select Registration Type', { exact: true });
        this.registerTypeoption=page.getByText('TAN No', { exact: true })
        this.registerID=page.getByRole('textbox', { name: 'Register ID *' })
        this.registerDate=page.getByText('Select Registration Date', { exact: true });
        this.validUpto=page.getByText('Select Valid Upto', { exact: true });

        this.saveBtn=page.getByRole('button', { name: 'SAVE' });
        this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });

    }

    async istaxregisbtnDisplayed(){
  
    return await this.taxregistrationbtn.isVisible();
    }

    async clickTaxRegistrationBtn(){
        await this.taxregistrationbtn.click();
    }

    async fillTaxRegisterForm(){

        await this.registerTypeDD.click();
        await this.registerTypeoption.click();
        await this.registerID.fill("1234567890");

        await this.registerDate.click();
           await this.page.getByText("YEAR").click();
           await this.page.locator("div.react-datepicker__year").getByText("2021").click();
           await this.page.locator("div.react-datepicker__month").getByText("Jan").click();
           await this.page.locator(`[aria-label*="January 21"]`).click();
        
           await this.saveBtn.click();
        
    }

    async clickTaxRegisLink(){
        await this.taxRegistrationLink.click();
    }

    
async clicksaveandnext(){
  
  await this.saveandnext.click();
}

}
export default TaxRegistration;