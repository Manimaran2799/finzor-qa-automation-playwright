
class OtherBankDetails {


    constructor(page) {

        this.page = page;
        this.otherbankdetailsbtn=page.getByRole('button', { name: 'Add Bank Details' });
        this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
        this.nextbtn=page.getByRole("button", { name: 'NEXT' });

        //Submit process
        this.submitbtn=page.getByRole("button",{name:"SUBMIT"});
        //text for ref no
         this.successmessage=page.locator("//div//p[contains(.,'REFIND')]");
        //yes button
        this.yesbuttonsubmit=page.getByRole("button",{name:"Yes"});
     }
    
   
async clicksaveandnext(){
  await this.saveandnext.click();           

}

async clickNextBtn(){

  await this.nextbtn.click();

}

async clicksubmitbtn(){

  await this.submitbtn.click();
}

// async getsuccessmessage(){
// await expect(this.successmessage).toBeVisible();
// }

async submitprocess(){
const message = await this.successmessage.innerText();
const match = message.match(/REF\w+/);
if (!match) {
  throw new Error("Ref ID not found in message");
}
this.refId = match[0];
console.log("Ref ID:", this.refId);
await this.yesbuttonsubmit.click();

return this.refId;
}



}
export default OtherBankDetails;