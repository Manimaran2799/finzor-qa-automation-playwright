import { expect } from "@playwright/test";

export class AuthUtil {

static async getToken(request,URL) {

   const authResponse= await request.post(URL,
        {
        headers:{"Content-Type":"application/json"},
        data: {
            "email":"rohit@xyz.com",
            "password":"Pass@word1"
             }
        });

        
   expect(authResponse.status()).toBe(200);
   const authresponseBody=await authResponse.json();

   expect(authresponseBody.status).toBe(true);
   expect(authresponseBody.access_token).toBeTruthy();

   const authToken=authresponseBody.access_token
   return authToken

    }}