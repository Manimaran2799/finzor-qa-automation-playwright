# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\test.spec.js >> Login auth
- Location: tests\apiTests\test.spec.js:4:1

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | 
  2  | const {test,expect}=require("@playwright/test");
  3  | 
  4  | test("Login auth",async({request})=>{
  5  | 
  6  | 
  7  |    const authResponse= await request.post("https://stage.finzorcbs.com/",
  8  |         {headers:{"Content-Type":"application/json"},
  9  |         data: {
  10 |             "email":"rohit@xyz.com",
  11 |             "password":"Pass@word1"
  12 |              }
  13 |         });
  14 | 
> 15 |    const authresponseBody=await authResponse.json();
     |                           ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  16 |    
  17 |    console.log(authResponse);
  18 | })
```