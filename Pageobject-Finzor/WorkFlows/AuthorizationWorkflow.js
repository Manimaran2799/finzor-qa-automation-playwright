
import { expect } from '@playwright/test';

import DashboardPage from "../../Pageobject-Finzor/DashboardPage";

//Customer Creation internal forms
import PersonalDetails1 from "../../Pageobject-Finzor/CustomerCreation/PersonalDetails-1";
import HistoryPage from '../../Pageobject-Finzor/CustomerCreation/HistoryPage';
import OtherBankDetails from "../../Pageobject-Finzor/CustomerCreation/OtherBankDetails";
import Unauthorized from "../Unauthorized";
import DraftPage from "../../Pageobject-Finzor/DraftPage";

//Index Pages
import AuthorizePage from "../../Pageobject-Finzor/AuthorizePage";



class AuthorizationWorkflow {

    //constructor
    constructor(page) {
        this.unauthorized = new Unauthorized(page);
        this.PersonalDetails1=new PersonalDetails1(page);
        this.OtherBankDetails=new OtherBankDetails(page);
        this.DashboardPage =new DashboardPage(page);
        this.AuthorizePage =new AuthorizePage(page);
        this.HistoryPage =new HistoryPage(page);
        this.DraftPage =new DraftPage(page);
    }

    //Actions

    async authorizeCustomer(RefID) {
        

        //Group Inbox Actions
        await expect(this.unauthorized.groupInboxText).toBeVisible();
        await expect( this.unauthorized.searchAuthorizedCustomer(RefID)).toBeVisible({ timeout: 60000 });
        await this.unauthorized.clickAssignBtn(RefID);

        //my Inbox Actions
        await expect(this.unauthorized.myInboxText).toBeVisible();
        await expect(this.unauthorized.searchAuthorizedCustomer(RefID)).toBeVisible({ timeout: 60000 });
        await this.unauthorized.clickAuthorizeBtn(RefID);
        await expect(this.unauthorized.detailsHeading).toBeVisible();
         await this.unauthorized.navigateToHistoryPage();

         //await expect(this.unauthorized.authorizeBtn).toBeVisible();
        const cusID = await this.unauthorized.completeAuthorization();
        return cusID;
        
    }

    async authorizeCustomerAfterEdit(RefID){
        await expect(this.unauthorized.groupInboxText).toBeTruthy();
        await this.unauthorized.clickAssignBtn(RefID);

       await expect(this.unauthorized.myInboxText).toBeVisible();
        await this.unauthorized.clickAuthorizeBtn(RefID);
        await expect(this.unauthorized.detailsHeading).toBeVisible();
         await this.unauthorized.navigateToHistoryPage();

    await expect(this.unauthorized.authorizeBtn).toBeVisible();
    await this.unauthorized.completeAuthorizeAfterEdit();  
    }

    /*
    Steps:
    1)Edit the First Page--->personal Details-1
    2)Save and continue
    3)Last page navigation and submit the form
    4)Check Current form is edit btn is enabled on authorize
    5)check on group Inbox--->assign
    6)authorize
    7)check edit btn is enabled on the authorize page
    */

    
    async EditandSubmit(CusID,UpdateAadharNumber){
        await this.AuthorizePage.clickEditBtn(CusID);
        await this.PersonalDetails1.editDetails(UpdateAadharNumber);
        await this.PersonalDetails1.clicksaveandcontinue();
        await this.PersonalDetails1.clickYesBtn();

        await this.HistoryPage.clickHistoryPage();
        await this.HistoryPage.clickNextBtn();
        await expect(this.HistoryPage.HistoryTable).toBeVisible();
        await this.HistoryPage.clickSubmitBtn();
        await expect(this.HistoryPage.submitConfirmText).toBeVisible();
        await this.HistoryPage.clickYesBtn();
    }

    async navigateToAuthorize(){
        await this.AuthorizePage.clickAuthorizetab();
    }

    async navigateToUnauthorizeandAuthorize(RefID){
        await this.unauthorized.clickUnauthorizeBtn();
        await this.authorizeCustomerAfterEdit(RefID);
    }
        
    //dEactivate

    async deactivateCustomer(cusID,reasonText){
        await this.AuthorizePage.clickDeactivateBtn(cusID);
        await expect(this.AuthorizePage.deactivateHeading).toBeVisible();
        await this.AuthorizePage.clickCusLinkageLink();
        await expect(this.AuthorizePage.deactivateBtninsidePage).toBeVisible();
        await this.AuthorizePage.clickdeactivatebtninside();
        await this.AuthorizePage.fillreasonandclickDeactivate(reasonText);
    }

    //reject
    async rejectCustomer(RefID,DescText){


        await expect(this.unauthorized.groupInboxText).toBeTruthy();
        await this.unauthorized.clickAssignBtn(RefID);

        await expect(this.unauthorized.myInboxText).toBeTruthy();
        await this.unauthorized.clickAuthorizeBtn(RefID);
        await this.unauthorized.navigateToHistoryPage();

        //deactivate
        await expect(this.unauthorized.rejectBtn).toBeVisible();
        await this.unauthorized.clickRejectBtn();
        await expect(this.unauthorized.reasonHeading).toBeVisible();
        await this.unauthorized.fillformRejectandClickreject(DescText);

    }

    //actions for Edit,save and close the form-->check on Draft --->edit and submit --->check unauth and authorize

    async editSaveandClose(CusID,UpdateAadharNumber){

         await this.AuthorizePage.clickEditBtn(CusID);
         await expect(this.PersonalDetails1.editTag).toBeVisible();
        await this.PersonalDetails1.editAadhar(UpdateAadharNumber);
        await this.PersonalDetails1.clicksaveandcontinue();
        await this.PersonalDetails1.clickYesBtn();
        await expect(this.PersonalDetails1.pdoneiitext).toBeVisible();
        await expect(this.PersonalDetails1.residency).toBeVisible();

        //close the form

        await this.PersonalDetails1.clickCloseBtn();
        await expect(this.PersonalDetails1.confirmforCloseForm).toBeVisible();
        await this.PersonalDetails1.clickYesBtn();

        //reload the page to check the form is closed and check on draft

        await this.DraftPage.reload();
        await this.DashboardPage.navigateToInvCustomerPage();
        await expect(this.AuthorizePage.firstRow).toBeVisible();
    
    }



    async navigateToDraftPageandCheckfirstRowisvisible(){
        await this.DashboardPage.navigateToDraftQueue();
        await expect(this.DraftPage.draftFirstrow).toBeVisible();
    }

     async editandSubmitOndraft(CusID,UpdatedKycName){
        await this.DraftPage.clickForEditbyCusID(CusID);
        await expect(this.PersonalDetails1.editTag).toBeVisible();

        await expect(this.PersonalDetails1.refIDfield).toBeVisible();
        await expect(this.PersonalDetails1.refIDfield).toHaveValue(/^REFIND/);


        await this.PersonalDetails1.editKycName(UpdatedKycName);
        await this.PersonalDetails1.clicksaveandcontinue();
        await this.PersonalDetails1.clickYesBtn();
        await expect(this.PersonalDetails1.isPersonalDetailsOneIIDisplayed()).toBeTruthy();
        await this.HistoryPage.clickHistoryPage();
        await this.HistoryPage.clickHistoryPage();
        await this.HistoryPage.clickNextBtn();
        await expect(this.HistoryPage.HistoryTable).toBeVisible();
        await this.HistoryPage.clickSubmitBtn();
        await expect(this.HistoryPage.submitConfirmText).toBeVisible();
        await this.HistoryPage.clickYesBtn();

    }
    


    

    }

export default AuthorizationWorkflow;



