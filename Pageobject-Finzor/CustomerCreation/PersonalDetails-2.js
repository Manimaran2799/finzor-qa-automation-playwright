
class PersonalDetails2 {

    // Constructor

    constructor(page) {

        this.page = page;

        // =========================
        // PD-2 First Page
        // =========================

        this.gender = page.locator(
            "//span[text()='Gender']//ancestor::div[@class='mb-1']//following-sibling::div"
        );

        this.genderOption = page.getByText('Male', { exact: true });

        this.countryBirth = page.locator("//div[@class='mb-1' and contains(.,'Country Of Birth')]//following-sibling::div"
        );

        this.countryOption = page.locator('li').filter({ hasText: 'India' })

        this.marital = page.locator(
            "//div[@class='mb-1' and contains(.,'Marital Status')]//following-sibling::div"
        );

        this.maritalOption = page.getByText('Married', { exact: true });

        this.relatedPersonType = page.locator("body > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1)");
        
        this.relatedOption = page.getByText('AUTHORISED REPRESENTATIVE', { exact: true })

        this.guardianSelect = page.locator(
            "//button[@type='button' and contains(.,'SELECT')]"
        );

        this.customerTable = page.locator(".data_table");

        this.customerOption = page.locator(
            "(//tbody//tr)[5]"
        );


        // =========================
        // PD-2 Second Page
        // =========================

        this.aadharCheckbox = page.getByText('AADHAAR');

        this.aadharTextField = page.locator(
            "//input[@id='Aadhaar Number']"
        );


        // =========================
        // Navigation Buttons
        // =========================

        this.saveAndContinueBtn = page.locator(
            "//button[@type='button' and contains(.,'SAVE & CONTINUE')]"
        );

        this.saveAndNextBtn = page.getByRole(
            "button",
            { name: 'SAVE & NEXT' }
        );
    }


    // =========================
    // Actions
    // =========================

    async fillPersonalDetailsTwoI() {
         await this.gender.click();
         await this.genderOption.click();
        await this.countryBirth.click();
        await this.countryOption.click();
        await this.marital.click();

         
    }


    async selectMaritalOption() {

        
        await this.maritalOption.click();
    }


    async clickRelatedPersonDropdown() {

        await this.relatedPersonType.click();
    }


    async selectRelatedOption() {

        await this.relatedOption.click();
    }


    async clickGuardianSelect() {

        await this.guardianSelect.click();
    }


    async selectCustomerOption() {

        await this.customerOption.click();
    }


    async clickSaveAndContinue() {

        await this.saveAndContinueBtn.click();
    }


    async pickAadharOption() {

        await this.aadharCheckbox.click();
    }


    async fillAadharField(aadhar) {

        await this.aadharTextField.fill(aadhar);
    }


    async clickSaveAndNext() {

        await this.saveAndNextBtn.click();
    }
}

export default PersonalDetails2;
