# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\SchemeConfig.spec.js >> Create Scheme Basic Information
- Location: tests\apiTests\SchemeConfig.spec.js:6:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'json')
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { AuthUtil } from "../../UtilsAPI/Authutil";
  3  | import { SchemeConfigAPI } from "../../PageObject-API/SchemeConfigAPI";
  4  | import { schemeData } from "../../TestData-Finzor/schemeData";
  5  | 
  6  | test("Create Scheme Basic Information", async ({ request }) => {
  7  | 
  8  |     const token =
  9  |         await AuthUtil.getToken(
  10 |             request,
  11 |             schemeData.baseURL
  12 |         );
  13 | 
  14 |     const schemeConfigAPI =
  15 |         new SchemeConfigAPI(request, token);
  16 | 
  17 |     const response =
  18 |         await schemeConfigAPI.create(
  19 |             schemeData.basicInfo
  20 |         );
  21 | 
  22 |    // expect(response.status()).toBe(200);
  23 | 
> 24 |     const body = await response.json();
     |                                 ^ TypeError: Cannot read properties of undefined (reading 'json')
  25 | 
  26 |     console.log(body);
  27 | 
  28 |    // expect(body.status).toBe(true);
  29 | 
  30 |    // expect(body.data.id).toBeTruthy();
  31 | 
  32 |     //const schemaId = body.data.id;
  33 | 
  34 |   //  console.log("Schema ID :", schemaId);
  35 | });
```