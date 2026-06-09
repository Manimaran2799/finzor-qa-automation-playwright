import { expect } from "@playwright/test";


import PersonalDetails1 from "../CustomerCreation/PersonalDetails-1";
import PersonalDetails2 from "../CustomerCreation/PersonalDetails-2";
import AddressDetails from "../CustomerCreation/AddressDetails";
import TaxResident from "../CustomerCreation/TaxResident";
import ProofOfIdentity from "../CustomerCreation/ProofIdentity";
import OtherDetails1 from "../CustomerCreation/OtherDetails-1";
import OtherDetails2 from "../CustomerCreation/OtherDetails-2";
import FamilyDetails from "../CustomerCreation/FamilyDetails";
import NomineeDetails from "../CustomerCreation/NomineeDetails";
import Attestation from "../CustomerCreation/Attestation";
import TdsInfo from "../CustomerCreation/TDSinfo";
import TaxRegistration from "../CustomerCreation/TaxRegistration";
import Facilities from "../CustomerCreation/Facilities";
import OtherBankDetails from "../CustomerCreation/OtherBankDetails";
import ProofIdentity from "../CustomerCreation/ProofIdentity";


import DashboardPage from "../../Pageobject-Finzor/DashboardPage";
//Index Pages
import AuthorizePage from "../../Pageobject-Finzor/AuthorizePage";
import Unauthorized from "../Unauthorized";
import DraftPage from"../../Pageobject-Finzor/DraftPage";



class DraftWorkflow {

    //constructor
    constructor(page) {
        this.personalDetails1 = new PersonalDetails1(page);
        this.personalDetails2 = new PersonalDetails2(page);
        this.AddressDetails = new AddressDetails(page);
        this.TaxResident = new TaxResident(page);
        this.ProofOfIdentity = new ProofOfIdentity(page);
        this.OtherDetails1 = new OtherDetails1(page);
        this.OtherDetails2 = new OtherDetails2(page);
        this.FamilyDetails = new FamilyDetails(page);
        this.NomineeDetails = new NomineeDetails(page);
        this.Attestation= new Attestation(page);
        this.TdsInfo = new TdsInfo(page);
        this.TaxRegistration = new TaxRegistration(page);
        this.Facilities = new Facilities(page);
        this.OtherBankDetails = new OtherBankDetails(page);
        this.dashboardPage = new DashboardPage(page);
        this.draftPage = new DraftPage(page);
        this.Unauthorized = new Unauthorized(page);
    }


    //actions

    async newFormCreatehalfWayClose(Firstname,Lastname,Aadhar){
        await this.personalDetails1.personaldetailsoneIFill(Firstname,Lastname,Aadhar);
        await this.personalDetails1.clicksaveandcontinue();
        await expect(this.personalDetails1.isPersonalDetailsOneIIDisplayed()).toBeTruthy()
        await expect(this.personalDetails1.residency).toBeVisible();
        await this.draftPage.clickCloseBtn();
        await expect(this.draftPage.closeConfirmationMsg).toBeVisible();
        await this.draftPage.clickYesBtnOnClose();
         await this.draftPage.reload();    
    }

    async navigateToDraftPage(){
        await this.dashboardPage.navigateToDraftPage();
}
    async editDraftForm(firstName,AadharNumber,pincode,Country,streetandroad,flatandbuilding,docno,mail,contactNumber){



        await this.draftPage.clickForEdit(firstName);
        await expect(this.draftPage.editHeading).toBeVisible();

        await expect(this.personalDetails1.refIDfield).toBeVisible();
        await expect(this.personalDetails1.refIDfield).toHaveValue(/^REFIND/);

        //Editing the form

        await this.personalDetails1.clicksaveandcontinue();
        await expect(this.personalDetails1.isPersonalDetailsOneIIDisplayed()).toBeTruthy()
        await this.personalDetails1.personaldetailsoneIIFill();
        await this.personalDetails1.Clicksaveandnext();

        //PD-II
        await this.personalDetails2.fillPersonalDetailsTwoI();
        await expect(this.personalDetails2.maritalOption).toBeVisible();
        await this.personalDetails2.selectMaritalOption();

        await this.personalDetails2.clickRelatedPersonDropdown();
        await expect(this.personalDetails2.relatedOption).toBeVisible();
        await this.personalDetails2.selectRelatedOption();
        await this.personalDetails2.clickGuardianSelect();
        await expect(this.personalDetails2.customerTable).toBeVisible();
        
        await this.personalDetails2.selectCustomerOption();
        await this.personalDetails2.clickSaveAndContinue() ;

        await this.personalDetails2.pickAadharOption();
        await expect(this.personalDetails2.aadharTextField ).toBeVisible();
        
        await this.personalDetails2.fillAadharField(AadharNumber)
       
        await this.personalDetails2.clickSaveAndNext();


        //Address Details
        await this.AddressDetails.addressdetailsoneI(pincode,Country,streetandroad,flatandbuilding,docno);
        await this.AddressDetails.ClicksaveandcontinueBTN();
        await this.AddressDetails.addressdetailsoneII(mail,contactNumber);
        await this.AddressDetails.Clicksaveandnext();

        //Tax Resident

        const taxId = await this.TaxResident.addtaxtresident();
        await this.TaxResident.getrowdata(taxId);
        await this.TaxResident.Clicksaveandnext();

        //Proof of Identity

        await expect(this.ProofOfIdentity.isnewDocBtnPresent()).toBeTruthy();
        await this.ProofOfIdentity.Clicksaveandnext();

        //Other Details I

        await this.OtherDetails1.otherdetailsonei();
        await this.OtherDetails1.clicksaveandcontinue();

        await expect(this.OtherDetails1.ischeckRatingDateDisplayed()).toBeTruthy();
        await this.OtherDetails1.Clicksaveandnext();
    
        //Other Details II
        await this.OtherDetails2.otherdetailstwoone();
        await this.OtherDetails2.clicksaveandcontinueBTN();
        await this.OtherDetails2.otherdetailstwotwo();
        await this.OtherDetails2.Clicksaveandnext();

        //Family Details

       
        await this.FamilyDetails.clickFamilyDetailsBtn();
        await this.FamilyDetails.fillForm();
        await expect(this.FamilyDetails.issaveandnextBtnDisplayed).toBeTruthy();
        await this.FamilyDetails.clicksaveandnext();

        //Nominee Details
        await expect(this.NomineeDetails.isnomineebtnDisplayed()).toBeTruthy();
        await this.NomineeDetails.clicksaveandnext();

        //Attestation Details
        await expect(this.Attestation.isattestationdetailspageDisplayed()).toBeTruthy();
        await this.Attestation.pickkycdeclarationDate();
        await this.Attestation.clicksaveandnext();

        //TDS Info

        await this.TdsInfo.tdsinfo();
        await this.TdsInfo.openEffectiveDate()
        await expect(this.TdsInfo.effectiveDatePicker).toBeVisible();

        await this.TdsInfo.selecteffectivedate();
        await this.TdsInfo.clicksaveandnext();
        
        //Tax Registration
        await expect(this.TaxRegistration.istaxregisbtnDisplayed()).toBeTruthy();
        await this.TaxRegistration.clickTaxRegistrationBtn();
        await this.TaxRegistration.fillTaxRegisterForm();
        await this.TaxRegistration.clicksaveandnext();

        //Facilities
        await expect(this.Facilities.facilitytable).toBeVisible();
        await this.Facilities.clickSaveandNext();

        //Other Bank Details

        await expect(this.OtherBankDetails.otherbankdetailsbtn).toBeVisible();
        
        //Submit Process
        await this.OtherBankDetails.clicksubmitbtn();
        await expect(this.OtherBankDetails.successmessage).toBeVisible();
        const refId = await this.OtherBankDetails.submitprocess();

        return refId;

    }

    async DeleteDraftForm(firstName){

        await this.draftPage.clickDeleteBtn(firstName);

        await expect(this.draftPage.deleteHeading).toBeVisible();
        await this.draftPage.clickCustomerLinkage();
        await expect(this.draftPage.deleteBtnInsideform).toBeVisible();
        await this.draftPage.clickDeleteBtnInsideForm();
        await expect(this.draftPage.deleteConfirmationMsg).toBeVisible();
        await this.draftPage.clickYesBtn();

        await this.draftPage.reload();
        await this.dashboardPage.navigateToInvCustomerPage();
    }



    

}
export default DraftWorkflow;