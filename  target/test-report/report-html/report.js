$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/chest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of CtheSigns application, I want to see the true outcome of assessments displayed",
  "description": "",
  "id": "as-a-user-of-cthesigns-application,-i-want-to-see-the-true-outcome-of-assessments-displayed",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4943825349,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "To validate Recommendations",
  "description": "",
  "id": "as-a-user-of-cthesigns-application,-i-want-to-see-the-true-outcome-of-assessments-displayed;to-validate-recommendations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I select System button on the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter an adult age",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select a gender male",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select Suspected cancer on the chest x-ray",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Referral Pathway button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the Results page should be displayed with Recommendations",
  "keyword": "Then "
});
formatter.match({
  "location": "ChestTest.i_select_System_button_on_the_Home_page()"
});
formatter.result({
  "duration": 10650871138,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/5s/tm7xpk_55s9...}, goog:chromeOptions: {debuggerAddress: localhost:55882}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 854d8b917545bb98570df2f8a4bdb87f\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat cTheSigns.ChestPage.clickSystem(ChestPage.java:77)\n\tat com.CtheSigns.Step_definition.ChestTest.i_select_System_button_on_the_Home_page(ChestTest.java:17)\n\tat ✽.Given I select System button on the Home page(features/chest.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "ChestTest.i_enter_an_adult_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.i_select_a_gender_male()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.i_select_Suspected_cancer_on_the_chest_x_ray()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.i_click_on_Referral_Pathway_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.the_Results_page_should_be_displayed_with_Recommendations()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 99243733,
  "status": "passed"
});
formatter.before({
  "duration": 2276960190,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To validate Considerations",
  "description": "",
  "id": "as-a-user-of-cthesigns-application,-i-want-to-see-the-true-outcome-of-assessments-displayed;to-validate-considerations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I select System button on the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter an adult age",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select the gender male",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i select Finger clubbing",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the Referral Pathway button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the Results page should be displayed with Considerations",
  "keyword": "Then "
});
formatter.match({
  "location": "ChestTest.i_select_System_button_on_the_Home_page()"
});
formatter.result({
  "duration": 10034678773,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/5s/tm7xpk_55s9...}, goog:chromeOptions: {debuggerAddress: localhost:55926}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2f8772117d34eac65d07ef80a46fa479\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat cTheSigns.ChestPage.clickSystem(ChestPage.java:77)\n\tat com.CtheSigns.Step_definition.ChestTest.i_select_System_button_on_the_Home_page(ChestTest.java:17)\n\tat ✽.Given I select System button on the Home page(features/chest.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "ChestTest.i_enter_an_adult_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 93735870,
  "status": "passed"
});
formatter.before({
  "duration": 2565338826,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To validate patient does not meet the criteria",
  "description": "",
  "id": "as-a-user-of-cthesigns-application,-i-want-to-see-the-true-outcome-of-assessments-displayed;to-validate-patient-does-not-meet-the-criteria",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I select System button on the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter an adult age",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select the gender male",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Wheeze",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the Referral Pathway button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the Results page should be displayed with patient does not meet the criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "ChestTest.i_select_System_button_on_the_Home_page()"
});
formatter.result({
  "duration": 3632547216,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat cTheSigns.ChestPage.clickSystem(ChestPage.java:77)\n\tat com.CtheSigns.Step_definition.ChestTest.i_select_System_button_on_the_Home_page(ChestTest.java:17)\n\tat ✽.Given I select System button on the Home page(features/chest.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "ChestTest.i_enter_an_adult_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 92138853,
  "status": "passed"
});
formatter.uri("features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of CtheSigns I want to be able to login to the application and carryout assessments for my patients",
  "description": "",
  "id": "as-a-user-of-cthesigns-i-want-to-be-able-to-login-to-the-application-and-carryout-assessments-for-my-patients",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2348807356,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "as-a-user-of-cthesigns-i-want-to-be-able-to-login-to-the-application-and-carryout-assessments-for-my-patients;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on CtheSigns Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter my email into the Email field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter I enter my password into the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be signed into the application successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_am_on_CtheSigns_Login_page()"
});
formatter.result({
  "duration": 296610,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_my_email_into_the_Email_field()"
});
formatter.result({
  "duration": 396826592,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_I_enter_my_password_into_the_password_field()"
});
formatter.result({
  "duration": 120753300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_the_Login_button()"
});
formatter.result({
  "duration": 124195199,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_signed_into_the_application_successfully()"
});
formatter.result({
  "duration": 921647192,
  "status": "passed"
});
formatter.after({
  "duration": 78634582,
  "status": "passed"
});
});