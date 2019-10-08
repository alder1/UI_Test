package com.CtheSigns.Step_definition;

import cTheSigns.DriverInstance;
import cTheSigns.LoginPage;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginTest extends DriverInstance {

    LoginPage lp = new LoginPage(driver);

    @Given("^I am on CtheSigns Login page$")
    public void i_am_on_CtheSigns_Login_page() throws Throwable {

        System.out.println("This is a test to login");
    }

    @When("^I enter my email into the Email field$")
    public void i_enter_my_email_into_the_Email_field() throws Throwable {
        lp.okCookie();
        lp.enterMail("test-sutton@email.com");
    }

    @When("^I enter I enter my password into the password field$")
    public void i_enter_I_enter_my_password_into_the_password_field() throws Throwable {
        lp.enterPassword("password");
    }

    @When("^I click on the Login button$")
    public void i_click_on_the_Login_button() throws Throwable {
        lp.selectLoginButton();
    }

    @Then("^I should be signed into the application successfully$")
    public void i_should_be_signed_into_the_application_successfully() throws InterruptedException {
        Assert.assertTrue(lp.assertLoginPage());
    }


}
