


import { test,expect} from "../../Fixtures-Finzor/baseTestFinzor";
import DraftPage from "../../Pageobject-Finzor/DraftPage";
import DraftWorkflow from "../../Pageobject-Finzor/WorkFlows/DraftWorkflow";

import CustomerData from "../../TestData-Finzor/CustomerData";
import Datautils from "../../Utils-Finzor/DataUtils";

test.describe("Customer Request Revision Workflow",()=>{

    const randomFirstName= Datautils.generateRandomName(CustomerData.FirstName);
    test.skip("Verify customer record can be moved to request revision queue, updated and resubmitted successfully",async ({loginPage,dashboardPage,customerCreationWorkflow,authorizationWorkflow,reqRevisionWorkflow,authorizePage,unauthorizedPage,reqRevisionPage})=>{

        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        
        //Customer Creation Workflow
        const refID=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Unauth Req Revision process
        await reqRevisionWorkflow.reqRevisionCustomer(refID,CustomerData.ReqRevisionreasonText);
        await reqRevisionWorkflow.wayToMyinboxReqreq();
        await expect(reqRevisionPage.searchCustomerInreqRevqueue(refID)).toBeVisible();

        //edit and Submit
        await reqRevisionWorkflow.editInReqRevisionQueue(refID,CustomerData.UpdatedKycName);

        //Check and Authorize on Unauth page
        await expect(unauthorizedPage.searchAuthorizedCustomer(refID)).toBeVisible();

        const cusID=await authorizationWorkflow.authorizeCustomer(refID);

        //Check on Auth Page

        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();

    

    });

    test("Req Revision Scenario --2",async({loginPage,dashboardPage,customerCreationWorkflow,authorizationWorkflow,reqRevisionWorkflow,authorizePage,unauthorizedPage,draftPage,reqRevisionPage})=>{

        
        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        
        //Customer Creation Workflow
        const refID=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Unauth Req Revision process
        await reqRevisionWorkflow.reqRevisionCustomer(refID,CustomerData.ReqRevisionreasonText);
        await reqRevisionWorkflow.wayToMyinboxReqreq();
        await expect(reqRevisionPage.searchCustomerInreqRevqueue(refID)).toBeVisible();

        //edit,Submit and Close
        await reqRevisionWorkflow.editInReqrevisionandClose(refID,CustomerData.UpdatedKycName);

        //Search and edit on the form --->
        await expect(draftPage.searchDraftByRefID(refID)).toBeVisible();
        await expect(draftPage.searchDraftByRefID(refID)).toHaveCount(1);
        await reqRevisionWorkflow.editAndSubmitonDraft(refID,CustomerData.UpdatedAadharNumber);

        //Search,Assign and authorize in Unauthorize 
        
        
        const cusID=await authorizationWorkflow.authorizeCustomer(refID);

        //search in Authorize
      const customerRow = authorizePage.searchAuthorizedCustomer(cusID.trim());

      await expect(customerRow).toHaveCount(1);
      await expect(customerRow).toBeVisible();

    
    })

})