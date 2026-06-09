
import { test,expect} from "../../Fixtures-Finzor/baseTestFinzor";

import CustomerData from "../../TestData-Finzor/CustomerData";
import Datautils from "../../Utils-Finzor/DataUtils";




/*
Covered Scenarios In authorization
1)New Authorized Customer
2)first Page edited and closed
3)Edited and submitted---->unauth queue verified
4)Deactivated and verified on Deactivate queue
*/
test.describe("Customer Authorization Workflow",()=>{
  

    const randomFirstName= Datautils.generateRandomName(CustomerData.FirstName);

    test.skip("Verify user can create, submit and authorize a new customer record",async({customerCreationWorkflow,authorizationWorkflow,authorizePage,loginPage,dashboardPage})=>{

      
        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refId=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Authorize Customer
        const cusID = await authorizationWorkflow.authorizeCustomer(refId);
        console.log("Customer ID : "+ cusID);

        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();
    })

    test.skip("Verify authorized customer record remains unchanged when edit operation is closed without saving",async ({customerCreationWorkflow,dashboardPage,authorizationWorkflow,authorizePage,loginPage})=>{

        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refId=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Authorize Customer
        const cusID = await authorizationWorkflow.authorizeCustomer(refId);
        console.log("Customer ID : "+ cusID);

        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();
        await authorizePage.clickEditBtn(cusID);
        await customerCreationWorkflow.firstPageEditandexit(CustomerData.UpdatedAadharNumber);
        await expect(authorizePage.ischeckEditBtnenabled(cusID)).toBeEnabled();
    })

    test.skip("Verify authorized customer record can be edited, resubmitted and reauthorized successfully",async({customerCreationWorkflow,authorizationWorkflow,authorizePage,dashboardPage,loginPage})=>{


        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refId=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Authorize Customer
        const cusID = await authorizationWorkflow.authorizeCustomer(refId);

        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();

        //Edit and Submit 
        await authorizationWorkflow.EditandSubmit(cusID,CustomerData.UpdatedAadharNumber);

        //check edit btn is disabled
        await authorizationWorkflow.navigateToAuthorize();
       await expect(authorizePage.searchAuthorizedCustomer(cusID)).toHaveCount(0);
       console.log("Customer is not present on Auth Page while edited and submitted");
        await authorizationWorkflow.navigateToUnauthorizeandAuthorize(refId);
        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();
        await expect(authorizePage.ischeckEditBtnenabled(cusID)).toBeEnabled();


    })

    test.skip("Verify authorized customer record can be deactivated and displayed in deactivated queue",async({loginPage,dashboardPage,customerCreationWorkflow,authorizationWorkflow,authorizePage,deactivatPage})=>{

        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refId=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Authorize Customer
        const cusID = await authorizationWorkflow.authorizeCustomer(refId);
        console.log("Customer ID : "+ cusID);

        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();


        //deactivate
        await authorizationWorkflow.deactivateCustomer(cusID,CustomerData.reasonText);

        //Deactivate

       await deactivatPage.searchDeactivatedCustomer(cusID);
       await deactivatPage.clickAction(cusID);

       const actualText = await deactivatPage.returnreasonText();
       console.log("Expected Text : "+CustomerData.reasonText);
       console.log("Actual Text : "+actualText);

       expect(actualText.trim()).toBe(CustomerData.reasonText);
    })

    test("Verify authorized customer record can be edited, saved as draft and displayed in draft queue",
      async  ({loginPage,dashboardPage,customerCreationWorkflow,authorizationWorkflow,authorizePage,unauthorizedPage,draftPage})=>{

        //new form creation,submit and authorize
        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refID=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //Authorize Customer
        const cusID = await authorizationWorkflow.authorizeCustomer(refID);
        console.log("Customer ID : "+ cusID);

        //validate in authorized page
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();


        //edit,save and close the form
        await authorizationWorkflow.editSaveandClose(cusID,CustomerData.UpdatedAadharNumber)

        //check on Draft page, edit and submit the form
        await authorizationWorkflow.navigateToDraftPageandCheckfirstRowisvisible();
        await  expect(draftPage.searchDraftByCusID(cusID)).toBeVisible()

        console.log(CustomerData.UpdatedKycName);
         await authorizationWorkflow.editandSubmitOndraft(cusID,CustomerData.UpdatedKycName);

        //check on unauth,assign and authorize
        await authorizationWorkflow.authorizeCustomerAfterEdit(refID);
        await expect(authorizePage.searchAuthorizedCustomer(cusID)).toBeVisible();

        //Navigate to unauth,draft --->verified that CuSNo is not listed
        await dashboardPage.navigateToUnauthorizedQueue();
        await expect(unauthorizedPage.searchAuthorizedCustomer(refID)).toHaveCount(0);
        await dashboardPage.navigateToDraftQueue();
        await expect(draftPage.searchDraftByCusID(cusID)).toHaveCount(0);


    })
 
    
});
