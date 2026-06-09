
import { expect } from '@playwright/test';
import DashboardPage from "../../Pageobject-Finzor/DashboardPage";

//Customer Creation internal forms
import PersonalDetails1 from "../../Pageobject-Finzor/CustomerCreation/PersonalDetails-1";
import TaxRegistration from '../CustomerCreation/TaxRegistration';
import Facilities from '../CustomerCreation/Facilities';
import HistoryPage from '../../Pageobject-Finzor/CustomerCreation/HistoryPage';
import OtherBankDetails from "../../Pageobject-Finzor/CustomerCreation/OtherBankDetails";



//Index Pages
import AuthorizePage from "../../Pageobject-Finzor/AuthorizePage";
import Unauthorized from "../../Pageobject-Finzor/Unauthorized";
import DraftPage from "../../Pageobject-Finzor/DraftPage";
import ReqrevisionPage from "../../Pageobject-Finzor/ReqrevisionPage"

class ReqRevisionWorkflow{


    //constructor
    constructor(page){

        this.page=page;
        this.DashboardPage =new DashboardPage(page);
        this.AuthorizePage =new AuthorizePage(page);
        this.unauthorized = new Unauthorized(page);
        this.DraftPage =new DraftPage(page);
        this.ReqrevisionPage=new ReqrevisionPage(page);


        this.PersonalDetails1=new PersonalDetails1(page);
        this.TaxRegistration=new TaxRegistration(page);
        this.Facilities=new Facilities(page);
        this.OtherBankDetails=new OtherBankDetails(page);
        this.HistoryPage =new HistoryPage(page);
    

    }

    //actions

    async reqRevisionCustomer(RefID,ReqRevisionreasonText){

        await expect(this.unauthorized.groupInboxText).toBeTruthy();
        await this.unauthorized.clickAssignBtn(RefID);
        
        await expect(this.unauthorized.myInboxText).toBeTruthy();
        await this.unauthorized.clickAuthorizeBtn(RefID);
        await expect(this.unauthorized.detailsHeading).toBeVisible();
        await this.unauthorized.navigateToHistoryPage();

        await expect(this.unauthorized.reqRevisionBtn).toBeVisible();
        await this.unauthorized.clickReqrevisionBtn();
        await this.unauthorized.fillformReqrevisiontandClickreqrevision(ReqRevisionreasonText)
    
    }

    async wayToMyinboxReqreq(){
        await expect(this.ReqrevisionPage.groupInboxText).toBeVisible();
        await this.ReqrevisionPage.clickToggleBtn();
        await expect(this.ReqrevisionPage.myInboxText).toBeVisible();
    }
    async editInReqRevisionQueue(RefID,UpdatedKycName){

        await this.ReqrevisionPage.clickEditBtnByrefID(RefID);
        await expect(this.PersonalDetails1.editTag).toBeVisible();

        await expect(this.PersonalDetails1.refIDfield).toBeVisible();
        await expect(this.PersonalDetails1.refIDfield).toHaveValue(/^REFIND/);


        await this.PersonalDetails1.editKycName(UpdatedKycName);
        await this.PersonalDetails1.clicksaveandcontinue();
        await this.PersonalDetails1.clickYesBtn();
        await expect(this.PersonalDetails1.isPersonalDetailsOneIIDisplayed()).toBeTruthy();
        await this.HistoryPage.clickHistoryPage();

        await this.HistoryPage.clickNextBtn();
        await expect(this.HistoryPage.HistoryTable).toBeVisible();
        await this.HistoryPage.clickSubmitBtn();
        await expect(this.HistoryPage.submitConfirmText).toBeVisible();
        await this.HistoryPage.clickYesBtn();
    }

   async  editInReqrevisionandClose(RefID,UpdatedKycName){

    await this.ReqrevisionPage.clickEditBtnByrefID(RefID);

        //Edit
        await expect(this.PersonalDetails1.editTag).toBeVisible();
        await expect(this.PersonalDetails1.refIDfield).toBeVisible();
        await expect(this.PersonalDetails1.refIDfield).toHaveValue(/^REFIND/);


        await this.PersonalDetails1.editKycName(UpdatedKycName);
        await this.PersonalDetails1.clicksaveandcontinue();
        await this.PersonalDetails1.clickYesBtn();
        await expect(this.PersonalDetails1.isPersonalDetailsOneIIDisplayed()).toBeTruthy();

        //close
        await this.PersonalDetails1.clickCloseBtn();
        await expect(this.PersonalDetails1.confirmforCloseForm).toBeVisible();

        await this.PersonalDetails1.clickYesBtn();

   }

   //search in Draft Page
   async editAndSubmitonDraft(RefID,UpdateAadharNumber){

    
     //Edit
    await this.DraftPage.clickForEditbyrefID(RefID);
    await expect(this.PersonalDetails1.editTag).toBeVisible();
    await expect(this.PersonalDetails1.refIDfield).toBeVisible();
    await expect(this.PersonalDetails1.refIDfield).toHaveValue(/^REFIND/);
    await this.PersonalDetails1.editAadhar(UpdateAadharNumber);
    await this.PersonalDetails1.clicksaveandcontinue();
    await this.PersonalDetails1.clickYesBtn();

    //submit

    await this.TaxRegistration.clickTaxRegisLink();
    await expect(this.TaxRegistration.taxregistrationbtn).toBeVisible()
    await this.TaxRegistration.clicksaveandnext();
    await expect(this.Facilities.facilitytable).toBeVisible();
    await this.Facilities.clickSaveandNext();
    await expect(this.OtherBankDetails.otherbankdetailsbtn).toBeVisible();
    await this.OtherBankDetails.clicksaveandnext();
    await this.HistoryPage.clickNextBtn();
    await this.HistoryPage.clickSubmitBtn();
    await expect(this.HistoryPage.submitConfirmText).toBeVisible();
    await this.HistoryPage.clickYesBtn();

   }

}
export default ReqRevisionWorkflow;