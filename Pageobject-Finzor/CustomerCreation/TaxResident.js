
class TaxResident {

    //constructor

    constructor(page) {
        this.page = page;

    this.taxResident = 'input[name="taxResident"]';
    this.taxresidentbtn=page.getByRole("button",{name: "ADD TAX DETAILS"});
    this.countrytaxDD=page.locator("//div[@class='mb-1' and contains(.,'Country')]//following-sibling::div");
    this.countryoptionTax=page.locator("div.text-wrap ul li").getByText("India");
    this.taxtype=page.locator("//div[@class='mb-1' and contains(.,'Tax Type')]//following-sibling::div");
    this.taxoption=page.locator("div.text-wrap ul li").getByText("GST");
    this.taxid=page.locator("input[id='Tax ID']");
    this.effectivefrom=page.locator("//div[contains(@class,'custom-date-input') and contains(.,'Effective From')]//following-sibling::div");
    this.saveBTN=page.getByRole("button", {name:"SAVE"});

    this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });

    }   

    async addtaxtresident() {
    const taxId = "TAX" + Date.now().toString().slice(-10);
      
    
      await this.taxresidentbtn.click();
      await this.countrytaxDD.click();
      await this.countryoptionTax.click();
      await this.taxtype.click();
      await this.taxoption.click();
      await this.taxid.fill(taxId);
    
      await this.effectivefrom.click();
      await this.page.getByText("YEAR").click();
      await this.page.locator("div.react-datepicker__year").getByText("2021").click();
      await this.page.locator("div.react-datepicker__month").getByText("Jan").click();
      await this.page.locator(`[aria-label*="January 21"]`).click();
      await this.saveBTN.click();
      return taxId;
    }

    getrowdata(taxId ) {

    const newRow = this.page.locator("tbody tr").filter({
        has: this.page.locator("td", { hasText: taxId })
      });
      
        return newRow;
    }

    async Clicksaveandnext() {
        await this.saveandnext.click();
    }

}
export default TaxResident;