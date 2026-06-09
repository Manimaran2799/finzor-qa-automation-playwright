

import { test,expect} from "../../Fixtures-Finzor/baseTestFinzor";


import CustomerData from "../../TestData-Finzor/CustomerData";
import Datautils from "../../Utils-Finzor/DataUtils";

test.describe("Customer Rejection Workflow",()=>{


    const randomFirstName= Datautils.generateRandomName(CustomerData.FirstName);
    test("Verify submitted customer record can be rejected and displayed in rejected queue",async({loginPage,dashboardPage,customerCreationWorkflow,authorizationWorkflow,rejectedPage})=>{



        await customerCreationWorkflow.navigateToCustomerCreationPage();
        await expect(dashboardPage.isCustomerCreationPageVisible()).toBeVisible();
        //Customer Creation Workflow
        const refId=await customerCreationWorkflow.createAndSubmitCustomer(randomFirstName,CustomerData.LastName,CustomerData.AadharNo,CustomerData.AadharNo,CustomerData.Pincode,CustomerData.Country,CustomerData.StreetAndRoad,CustomerData.FlatAndBuilding,CustomerData.DocNo,CustomerData.Email,CustomerData.MobileNo); 

        //reject process on Unauth process
        await authorizationWorkflow.rejectCustomer(refId,CustomerData.rejectedText);

        //Check On rejected page
        await expect(rejectedPage.searchRejectedCustomer(refId)).toBeVisible();

        //check  Text
         await rejectedPage.clickAction(refId);

        const actualText = await rejectedPage.returnreasonText();
        console.log("Expected Text : "+CustomerData.reasonText);
        console.log("Actual Text : "+actualText);

        expect(actualText.trim()).toBe(CustomerData.rejectedText);

    });
})