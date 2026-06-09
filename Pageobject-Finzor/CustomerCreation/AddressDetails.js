
class AddressDetails {


    //constructor
    constructor(page) {
        this.page = page;
    //AD-1
    this.residentype=page.locator("//div[@class='mb-1' and contains(.,'Resident Type')]//following-sibling::div");
    this.residentoption=page.getByText("Rented");
    this.pincode=page.locator("//input[@id='Pin Code']");
    this.country=page.locator("//input[@id='Country']");
    this.state=page.locator("#State");
    this.district=page.locator("#District");
    this.streetandroad=page.getByPlaceholder("Enter Street and Road");
    this.flatandbuilding=page.getByPlaceholder("Enter Flat And Building");
    this.postalarea=page.locator("//div[@class='mb-1' and contains(.,'Postal Area')]//following-sibling::div");
    this.postaloption=page.getByText("Perungudi");
    this.addrproof=page.locator("//div[@class='mb-1' and contains(.,'Address Proof')]//following-sibling::div");
    this.proofoption=page.locator("//li[text()='Aadhaar']");
    this.docno=page.locator("//input[@id='Document No']");

    //AD-I-II
    this.mailid=page.getByPlaceholder("Enter Email Address");
    this.contacttype =page.locator("//div[@class='mb-1' and contains(.,'Contact Type')]//following-sibling::div");
    this.contactoption=page.getByText("Mobile No");
    this.contactnumber=page.getByPlaceholder("Enter Contact Details");

    //Navigation Btns
     this.saveandcontinueBTN = page.locator("//button[@type='button' and contains(.,'SAVE & CONTINUE')]");
     this.saveandnext = page.getByRole("button", { name: 'SAVE & NEXT' });
    

        }   

        //Action Methods
async addressdetailsoneI(pincode,Country,streetandroad,flatandbuilding,docno){

    await this.residentype.click();
    await this.residentoption.click();
    await this.pincode.fill(pincode);
    
   
  //  await this.page.waitForLoadState('networkidle');
   //await expect(this.country).toHaveValue(Country);

   await this.streetandroad.fill(streetandroad);
   await this.flatandbuilding.fill(flatandbuilding);
   await this.postalarea.click();
   await this.postaloption.click();

   await this.addrproof.click();
   await this.proofoption.click();
   await this.docno.fill(docno);
    

  }

  async ClicksaveandcontinueBTN(){
    await this.saveandcontinueBTN.click();
  }

  async addressdetailsoneII(mail, contactNumber){

    await this.mailid.fill(mail);
    await this.contacttype.click();
    await this.contactoption.click();
    await this.contactnumber.fill(contactNumber);

  }
  async Clicksaveandnext() {
        await this.saveandnext.click();
    }

  

    }

    export default AddressDetails;
