$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of CtheSigns I want to be able to login to the application and carryout assessments for my patients",
  "description": "",
  "id": "as-a-user-of-cthesigns-i-want-to-be-able-to-login-to-the-application-and-carryout-assessments-for-my-patients",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25188416100,
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
  "duration": 573883400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_my_email_into_the_Email_field()"
});
formatter.result({
  "duration": 948125700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_I_enter_my_password_into_the_password_field()"
});
formatter.result({
  "duration": 520539100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_the_Login_button()"
});
formatter.result({
  "duration": 1319848100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_signed_into_the_application_successfully()"
});
formatter.result({
  "duration": 1259547600,
  "status": "passed"
});
formatter.after({
  "duration": 1943376500,
  "status": "passed"
});
});