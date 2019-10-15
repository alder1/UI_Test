package com.CtheSigns.Step_definition;

import cTheSigns.ChestPage;
import cTheSigns.DriverInstance;
import cTheSigns.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChestTest extends DriverInstance {

    LoginPage lp = new LoginPage(driver);
    ChestPage cp = new ChestPage(driver);

    @Given("^I have successfully logged into CtheSigns application$")
    public void i_have_successfully_logged_into_CtheSigns_application() throws Throwable {
        lp.okCookie();
        lp.enterMail("test-sutton@email.com");
        lp.enterPassword("password");
        lp.selectLoginButton();

    }

    @When("^I select System button on the Home page$")
    public void i_select_System_button_on_the_Home_page() throws Throwable {
        lp.clickSystemIcon();

    }

    @When("^I enter an adult age$")
    public void i_enter_an_adult_age() throws Throwable {
        cp.setAge();
    }

    @And("^I select the gender male$")
    public void iSelectTheGenderMale() {
        cp.clickGender();
    }


    @When("^I select Suspected cancer on the chest x-ray$")
    public void i_select_Suspected_cancer_on_the_chest_x_ray() throws Throwable {
        cp.clickSuspectedCancer();
    }

    @When("^I click on the Referral Pathway button$")
    public void iClickOnTheReferralPathwayButton() {
    cp.clickPathway1();
    }

    @Then("^the Results page should be displayed with Recommendations$")
    public void the_Results_page_should_be_displayed_with_Recommendations() throws Throwable {
        cp.AssertRecommendationLungCancer();
    }


    @And("^i select Finger clubbing$")
    public void iSelectFingerClubbing() throws Throwable {
        cp.clickFingerClubbing();
    }

    @And("^I select Wheeze$")
    public void iSelectWheeze() throws Throwable {
        cp.clickWheeze();
    }
    

    @Then("^the Results page should be displayed with Considerations$")
    public void theResultsPageShouldBeDisplayedWithConsiderations() throws Throwable {
        cp.AssertConsiderationLungCancer();
    }

   

    @Then("^the Results page should be displayed with patient does not meet the criteria$")
    public void theResultsPageShouldBeDisplayedWithPatientDoesNotMeetTheCriteria() throws Throwable {
        cp.AssertNotCriteria();
    }


    @When("^I click on Referral Pathway button$")
    public void iClickOnReferralPathwayButton() {

    }
}
