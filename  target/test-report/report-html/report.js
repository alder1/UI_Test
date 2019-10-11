$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/chest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of CtheSigns application, I want to see the true outcome of assessments displayed",
  "description": "",
  "id": "as-a-user-of-cthesigns-application,-i-want-to-see-the-true-outcome-of-assessments-displayed",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5431087909,
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
  "duration": 10538520817,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/5s/tm7xpk_55s9...}, goog:chromeOptions: {debuggerAddress: localhost:63907}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e9e86082929686b3a36c2cb565412adc\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat cTheSigns.LoginPage.clickSystemIcon(LoginPage.java:77)\n\tat com.CtheSigns.Step_definition.ChestTest.i_select_System_button_on_the_Home_page(ChestTest.java:19)\n\tat ✽.Given I select System button on the Home page(features/chest.feature:4)\n",
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
  "duration": 102924237,
  "status": "passed"
});
formatter.before({
  "duration": 2718933084,
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
  "duration": 10030050225,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/5s/tm7xpk_55s9...}, goog:chromeOptions: {debuggerAddress: localhost:63950}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8f7e34b5a176fc427ef2c6fc2841857d\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027app\u0027]/div/div[@class\u003d\u0027styledComponents__StyledWrapper-kvYoPE kDzZnd\u0027]/div[@class\u003d\u0027styledComponents__BodyWrapper-bsyRiV bEyKcQ\u0027]/div[@class\u003d\u0027ContentWrapper__ContentWrapper-ebmCKp container ieefin\u0027]/div[@class\u003d\u0027styledComponents__PageWrapper-iZXYYR OQFix\u0027]/div[@class\u003d\u0027component-wrapper\u0027]/div/div/div[@class\u003d\u0027styledComponents__PageWrapper-eoWmmr PeIWm\u0027]/div[@class\u003d\u0027row\u0027]/div[@class\u003d\u0027col-xs-12 col-md-push-5 col-md-7\u0027]/div[@class\u003d\u0027styledComponents__IconsWrapper-cyeros gYoWse\u0027]/div[@class\u003d\u0027row\u0027]/div[1]/div[1]/a[1]/button[1]/div[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat cTheSigns.LoginPage.clickSystemIcon(LoginPage.java:77)\n\tat com.CtheSigns.Step_definition.ChestTest.i_select_System_button_on_the_Home_page(ChestTest.java:19)\n\tat ✽.Given I select System button on the Home page(features/chest.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "ChestTest.i_enter_an_adult_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iSelectTheGenderMale()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iSelectFingerClubbing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iClickOnTheReferralPathwayButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.theResultsPageShouldBeDisplayedWithConsiderations()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 80552131,
  "status": "passed"
});
formatter.before({
  "duration": 312650767,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:24588\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alders-Mac\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat cTheSigns.DriverInstance.openBrowser(DriverInstance.java:24)\n\tat com.CtheSigns.Hooks.setUpTest(Hooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:24588\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t... 46 more\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 68 more\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.i_enter_an_adult_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iSelectTheGenderMale()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iSelectWheeze()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.iClickOnTheReferralPathwayButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChestTest.theResultsPageShouldBeDisplayedWithPatientDoesNotMeetTheCriteria()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14366,
  "status": "passed"
});
