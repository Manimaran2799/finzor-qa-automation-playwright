import { test, expect } from "@playwright/test";
import { AuthUtil } from "../../UtilsAPI/Authutil";
import { SchemeConfigAPI } from "../../PageObject-API/SchemeConfigAPI";
import { schemeData } from "../../TestData-Finzor/schemeData";

function validateSchemaId(body, schemaId) {
    expect(body.data).toHaveProperty("schema_id");
    expect(Number(body.data.schema_id)).toBe(schemaId);
}
function logStep(stepName) {
    console.log(`\n ${stepName} completed successfully`);
}

test("Create Scheme End to End", async ({ request }) => {

    const token =
        await AuthUtil.getToken(
            request,
            schemeData.baseURL
        );

    const schemeConfigAPI =
        new SchemeConfigAPI(request, token);



    //Basic Info Page====>Create
    const basicInfoBody =
        await schemeConfigAPI.createAndValidate(
            schemeData.basicInfo,"Scheme Basic Information Created Successfully"
        );

   //extracting Scheme ID for Further Process
    
    const schemaId = basicInfoBody.data.id;
    expect(schemaId).toBeTruthy();
    console.log("Schema ID :", schemaId);

    logStep("Basic Info");
    

    //Operational Step One===>create

    const operationalSteponePayload = {
    ...schemeData.operationalStepOne,
    schema_id: schemaId
};

    const responseBodyoperationalOne=
        await schemeConfigAPI.createAndValidate(operationalSteponePayload,
    "Scheme Operational Instruction Step One Created Successfully"
);

   
    //assertions
   validateSchemaId(responseBodyoperationalOne, schemaId);
   logStep("Operational Step One");

   


   //operation Step Two===>Create
   const operationalSteptwoPayload = {
    ...schemeData.operationalStepTwo,
    schema_id: schemaId
};

    const responseBodyoperationaltwo =
          await schemeConfigAPI.createAndValidate(operationalSteptwoPayload,
    "Scheme Operational Instruction Step Two Created Successfully"
);

    //assertions
    validateSchemaId(responseBodyoperationaltwo, schemaId) 
    logStep("Operational Step Two");  
   
   
   //FacilitiesstepOne ===>Create 
   const facilitiesStepOnePayload = {
    ...schemeData.facilitiesStepOne,
    schema_id: schemaId
};

    const responseBodyfaciltiesStepone =
           await schemeConfigAPI.createAndValidate(facilitiesStepOnePayload,
    "Scheme Facilities Step One Created Successfully"
);
    //assertions
       validateSchemaId(responseBodyfaciltiesStepone, schemaId);
       logStep("Facilities Step One");   
       



   //Facilities stepTwo ====>create

    const facilitiesStepTwoPayload = {
    ...schemeData.facilitiesStepTwo,
    schema_id: schemaId
};

   
    const responseBodyfaciltiesSteptwo =
           await schemeConfigAPI.createAndValidate(facilitiesStepTwoPayload,
    "Scheme Facilities Step Two Created Successfully"
);
    //assertions
    validateSchemaId(responseBodyfaciltiesSteptwo,schemaId);
    logStep("Facilities Step Two");  
   
 
  //Facilities -Step three===>create

const facilitiesStepThreePayload = {
    ...schemeData.facilitiesStepThree,
    schema_id: schemaId
};

      const responseBodyfaciltiesStepthree =
           await schemeConfigAPI.createAndValidate(facilitiesStepThreePayload ,
    "Scheme Facilities Step Three Created Successfully"
);
    validateSchemaId(responseBodyfaciltiesStepthree,schemaId);
    logStep("Facilities Step Three");  
  

   //Free Trans Limit ===>create

const freeTransLimitPayload = {
    ...schemeData.freeTransactionLimit,
    schema_id: schemaId
};

    const responseBodyfreeTransLimit=
        await schemeConfigAPI.createAndValidate(
          freeTransLimitPayload,"Scheme Free Transaction Limit Created Successfully"
        );

validateSchemaId(responseBodyfreeTransLimit,schemaId);
logStep("freeTransLimit"); 
    
   
   //Echannel Facilites ===>Create
   
const echannel_facilitiesPayload = {
    ...schemeData.echannel_facilities,
    schema_id: schemaId
};

    const   responseBodyechannel_facilities =
        await schemeConfigAPI.createAndValidate(
           echannel_facilitiesPayload,"Scheme Echannel Facilities Created Successfully"
        );

    //assertions
   validateSchemaId(responseBodyechannel_facilities ,schemaId);
   logStep("Echannel_facilities"); 
   


//link Product ===>create
const linkProductPayload = {
    ...schemeData.linkProduct,
    schema_id: schemaId
};

    const  responseBodylinkProducts =
        await schemeConfigAPI.createAndValidate(
           linkProductPayload,"Scheme Link Product Updated Successfully"
        );
         validateSchemaId(responseBodylinkProducts ,schemaId)
        expect(responseBodylinkProducts.data.product_name).toBe("Gold");
        logStep("Link Product"); 

      

   //Link Charges ===>create
   const linkChargesPayload = {
    ...schemeData.linkCharges,
    schema_id: schemaId
};

  const responseBodylinkCharges =
    await schemeConfigAPI.createAndValidate(
       linkChargesPayload,"Scheme Link Charges Created Successfully"
    );

    //assertions

     validateSchemaId(responseBodylinkCharges ,schemaId);
       logStep("Link Charges"); 
     
 

   //tb_and_bs_related===>create

  const tb_and_bs_relatedPayload = {
    ...schemeData.tb_and_bs_related,
    schema_id: schemaId
};

    const  responseBodytb_and_bs_related=
        await schemeConfigAPI.createAndValidate(
           tb_and_bs_relatedPayload,"Scheme TB And BS Related Created Successfully"
        );

   

    //assertions

        validateSchemaId(responseBodytb_and_bs_related ,schemaId);
        logStep("Tb_and_Bs_related"); 
       

        console.log(`
=================================
SCHEME CREATION COMPLETED
Schema ID : ${schemaId}
Total Steps : 10
Status : SUCCESS
=================================
`);

});