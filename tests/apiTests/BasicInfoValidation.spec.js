import { test, expect } from "@playwright/test";
import { AuthUtil } from "../../UtilsAPI/Authutil";
import { SchemeConfigAPI } from "../../PageObject-API/SchemeConfigAPI";
import { basicInfoValidationData } from "../../TestData-Finzor/basicInfoValidationData";
import { schemeData } from "../../TestData-Finzor/schemeData";

for (const testData of basicInfoValidationData.positiveCases) {
test(testData.testName ,async({request})=>{


     const token =
            await AuthUtil.getToken(
                request,
                schemeData.baseURL
            );
    
        const schemeConfigAPI =
            new SchemeConfigAPI(request, token);
   const response =
            await schemeConfigAPI.create(testData.payload);

        expect(response.status()).toBe(200);
        const responsebody=await response.json();
        console.log(responsebody);
        console.log("**************************")


})
}