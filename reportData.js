var data = [{"count":"1","className":"TestClass1","method":"testMethod1","testParams":"[username_u, password_u]\u003cbr\u003e[username_a, password_a]","testDescription":"Test that user/admin is able to authenticate using valid credentials\u003cbr\u003eSteps:\u003cbr\u003e1. Open the Sign In page\u003cbr\u003e2. Insert valid username and password\u003cbr\u003e3. Click the Sign In button and verify that login is successful\u003cbr\u003e","time":"71622","status":"SUCCESS","exception":""},{"count":"2","className":"TestClass1","method":"testMethod2","testParams": "[username_u, password_u]\u003cbr\u003e[username_a, password_a]","testDescription": "Test that user/admin is not able to authenticate inusing valid credentials\u003cbr\u003eSteps:\u003cbr\u003e1. Open the Sign In page\u003cbr\u003e2. Insert invalid username and password\u003cbr\u003e3. Click the Sign In button and verify that auth failed\u003cbr\u003e","time":"46725","status":"FAILED","exception": "Error : Auth error message isn't shown when auth failed due to invalid credentials\u003cbr\u003e File: LoginPage.java Line: 93\u003cbr\u003e Image: https://s3.amazonaws.com/ocn-media/1e16b10d-b38a-4efa-aca0-303cc24c2d12.png"},{"count":"3","className":"ClassName2","method":"testMethod1","testParams":"[creditCard1]\u003cbr\u003e[creditCard2]","testDescription":"Test user can successfully buy product using eligible cards\u003cbr\u003eSteps:\u003cbr\u003e1. Having a selected product, open the Checkout page\u003cbr\u003e2. Click the Buy button and insert valid card dta\u003cbr\u003e3. Verify the purchase is successfull and the confirmation page is shown\u003cbr\u003e","time":"55353","status":"SKIPPED","exception":"Payment gateway wasn't loaded. Check the test environment setup and re-deploy"}, {"count":"4","className":"ClassName2","method":"testMethod2","testParams":"[creditCard1]\u003cbr\u003e[creditCard2]","testDescription":"Test user can successfully save valid cards for forther purchases\u003cbr\u003eSteps:\u003cbr\u003e1. While signed id, open the account page\u003cbr\u003e2. Click the add new cred card button\u003cbr\u003e3. Add valid card data and click the save button\u003cbr\u003e","time":"55353","status":"SUCCESS","exception":""}]; var testRunName = 'Test Run Name'; var footerText='ProjectName';