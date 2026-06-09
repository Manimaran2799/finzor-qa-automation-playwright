import { test as base, expect }
from "@playwright/test";

// Pages
import LoginPage
from "../Pageobject-Finzor/LoginPage";

import DashboardPage
from "../Pageobject-Finzor/DashboardPage";

import AuthorizePage
from "../Pageobject-Finzor/AuthorizePage";

import UnauthorizedPage
from "../Pageobject-Finzor/Unauthorized";

import DraftPage 
from "../Pageobject-Finzor/DraftPage";

import ReqrevisionPage
from "../Pageobject-Finzor/ReqRevisionPage";

import DeactivatePage 
from"../Pageobject-Finzor/DeactivatePage"

import RejectedPage from "../Pageobject-Finzor/RejectedPage"



// Workflows
import Authorizationworkflow
from "../Pageobject-Finzor/WorkFlows/AuthorizationWorkflow";

import Customercreationworkflow
from "../Pageobject-Finzor/WorkFlows/CustomerCreationWorkflow";

import DraftWorkflow from "../Pageobject-Finzor/WorkFlows/DraftWorkflow";

import ReqRevisionWorkflow
from "../Pageobject-Finzor/WorkFlows/ReqRevisionWorkflow";


// Test Data
import EnvData
from "../TestData-Finzor/EnvData";


export const test = base.extend({

    // Workflow Fixtures
    customerCreationWorkflow:
    async ({ page }, use) => {

        const customerCreationWorkflow =
            new Customercreationworkflow(page);

        await use(customerCreationWorkflow);
    },

    authorizationWorkflow:
    async ({ page }, use) => {

        const authorizationWorkflow =
            new Authorizationworkflow(page);

        await use(authorizationWorkflow);
    },
    draftWorkflow :
    async ({page},use)=>{
        const draftWorkflow =new DraftWorkflow(page);
        await use(draftWorkflow);
    },

    reqRevisionWorkflow:
    async ({page},use)=>{

        const reqRevisionWorkflow=new ReqRevisionWorkflow(page);
        await use(reqRevisionWorkflow);

    },

    // Login Fixture
    loginPage:
    async ({ page }, use) => {

        const loginPage =
            new LoginPage(page);

        await loginPage.loginToFinzor(
            EnvData.baseUrl,
            EnvData.UserName,
            EnvData.PassWord
        );

        await use(loginPage);
    },
    dashboardPage:
    async ({ page }, use) => {

        const dashboardPage =
            new DashboardPage(page);

        await use(dashboardPage);
    },


    // Page Fixtures
    authorizePage:
    async ({ page }, use) => {

        const authorizePage =
            new AuthorizePage(page);

        await use(authorizePage);
    },

    unauthorizedPage:
async ({page},use)=>{

    const unauthorizedPage =new UnauthorizedPage(page);
    await use(unauthorizedPage);
},
draftPage:
async ({page},use)=>{

    const draftPage =new DraftPage(page);
    await use(draftPage);
},

reqRevisionPage :
async({page},use)=>{
    const reqRevisionPage=new ReqrevisionPage(page);
    await use(reqRevisionPage);

},
rejectedPage:
async ({page},use)=>{

    const rejectedPage =new RejectedPage(page);
    await use(rejectedPage);
},

    
deactivatPage : async ({page},use)=>{

    const deactivatePage= new DeactivatePage(page);
    await use(deactivatePage);

}
//Req revison page fixture can be added here



})

export { expect };