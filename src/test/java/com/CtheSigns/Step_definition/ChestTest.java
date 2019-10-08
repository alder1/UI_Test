package com.CtheSigns.Step_definition;

import cTheSigns.ChestPage;
import cTheSigns.DriverInstance;
import cTheSigns.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChestTest extends DriverInstance {

    LoginPage lp = new LoginPage(driver);
    ChestPage cp = new ChestPage(driver);

    @Given("^I select System button on the Home page$")
    public void i_select_System_button_on_the_Home_page() throws Throwable {
       cp.clickSystem();
    }

    @When("^I enter an adult age$")
    public void i_enter_an_adult_age() throws Throwable {
        cp.setAge1();
    }

    @When("^I select a gender male$")
    public void i_select_a_gender_male() throws Throwable {
        cp.clickGender();
    }

    @When("^I select Suspected cancer on the chest x-ray$")
    public void i_select_Suspected_cancer_on_the_chest_x_ray() throws Throwable {
        cp.clickSuspectedCancer();
    }

    @When("^I click on Referral Pathway button$")
    public void i_click_on_Referral_Pathway_button() throws Throwable {
        cp.clickPathway1();
    }

    @Then("^the Results page should be displayed with Recommendations$")
    public void the_Results_page_should_be_displayed_with_Recommendations() throws Throwable {

    }

}
