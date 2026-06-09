

class Attestation {

    //constructor

    constructor(page) {
     this.page = page;
  
    this.kycdeclaration=page.locator("div label").getByText("KYC Declaration Date");

    this.kycDeclarationDatepicker=page.getByText('Select KYC Declaration Date', { exact: true })
    this.saveandnext =page.getByText('SAVE & NEXT', { exact: true });

    }
    
    async isattestationdetailspageDisplayed(){
    return await this.kycdeclaration.isVisible();
    }

    async pickkycdeclarationDate(){
    await this.kycDeclarationDatepicker.click();
    await this.page.getByText("YEAR").click();
    await this.page.locator("div.react-datepicker__year").getByText("2021").click();
    await this.page.locator("div.react-datepicker__month").getByText("Jan").click();
    await this.page.locator(`[aria-label*="January 21"]`).click();
    }


async clicksaveandnext(){
await this.saveandnext.click();
}
}
export default Attestation;