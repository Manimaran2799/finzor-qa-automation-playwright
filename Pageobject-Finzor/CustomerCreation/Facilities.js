
class Facilities {

    constructor(page) {

    this.page = page;

        //facilities
    this.facilitytable=page.locator("table tbody");
    this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
    }

    

    async clickSaveandNext(){
    await this.saveandnext.click();
    }

}
export default Facilities;