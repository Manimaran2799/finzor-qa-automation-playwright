
import { test,expect} from "../../Fixtures-Finzor/baseTestFinzor";

import CustomerData from "../../TestData-Finzor/CustomerData";
import Datautils from "../../Utils-Finzor/DataUtils";


test.describe("Customer Draft Workflow",()=>{

    const randomFirstName= Datautils.generateRandomName(CustomerData.FirstName);
    
    test.skip("Verify draft customer record can be resumed, submitted and displayed in unauthorized queue",async({loginPage,dashboardPage,unauthorizedPage,customerCreationWorkflow,draftWorkflow,draftPage})=>{

        await customerCreationWorkflow.navigateToCustomerCreationPage();    
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //halfway fill the form and close

        await draftWorkflow.newFormCreatehalfWayClose(randomFirstName,CustomerData.LastName,CustomerData.AadharNo);
        await draftWorkflow.navigateToDraftPage();
        //verify in Draft Queue

        console.log("Random First Name is "+randomFirstName);
        await expect(draftPage.searchDraftByName(randomFirstName)).toBeVisible();

       const refId = await draftWorkflow.editDraftForm(randomFirstName,CustomerData.UpdatedAadharNumber,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo);

       //search in unAuth queue
       await expect(unauthorizedPage.isFormPresent(refId)).toBeTruthy();

    });

    test("Verify draft customer record can be deleted successfully and removed from all queues",async({loginPage,dashboardPage,customerCreationWorkflow,draftWorkflow,authorizePage,unauthorizedPage,draftPage,rejectedPage})=>{

        await customerCreationWorkflow.navigateToCustomerCreationPage();    
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //halfway fill the form and close

        await draftWorkflow.newFormCreatehalfWayClose(randomFirstName,CustomerData.LastName,CustomerData.AadharNo);

        //Navigate to Delete the form from Draft

        await dashboardPage.navigateToInvCustomerPage();
        await dashboardPage.navigateToDraftQueue();
        console.log("Random First Name is "+randomFirstName);
        await expect(draftPage.searchDraftByName(randomFirstName)).toBeVisible();

        
        await draftWorkflow.DeleteDraftForm(randomFirstName);

        //search in Authorize Queue
        await expect(authorizePage.searchCustomerInAuthorizedQueueByName(randomFirstName)).toHaveCount(0);

        //navigate and search in unAuth queue
        await dashboardPage.navigateToUnauthorizedQueue();
        await expect(unauthorizedPage.searchCustomerUnauthorizedQueueByName(randomFirstName)).toHaveCount(0);

        //navigate to draft and search
        await dashboardPage.navigateToDraftQueue();
        await expect(draftPage.searchDraftByName(randomFirstName)).toHaveCount(0);

        // //navigate to Req Revise and search
        // await dashboardPage.navigateToRequestRevisionQueue();
        // await expect(requestRevisionPage.searchRequestRevisionByName(randomFirstName)).toBeVisible();

        //navigate to Rejected and search
        await dashboardPage.navigateToRejectedQueue();
        await expect(rejectedPage.searchCustomerInRejectedQueueByName(randomFirstName)).toHaveCount(0);  


    })

   
});