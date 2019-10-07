package cTheSigns;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import static java.nio.file.Files.readAllBytes;


public class LoginPage {

    WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    @FindBy(xpath = "//input[@name='email']")
    private WebElement mailField;

    @FindBy(xpath = "//input[@name='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//div[@class='TabContent-egCFrl dboYwc tab-content-visible']//div//button[@class='ExtendedButton__ExtendedButton-fgsFSm gMXuRL']")
    private WebElement loginButton;

    @FindBy(xpath = "//span[contains(text(),'noticeboard')]")
    private WebElement noticeBoard;

//    public boolean assertLoginPage(){
//        return message.isDisplayed();
//    }

    public void enterMail(String myEmail) {
        mailField.sendKeys(myEmail);

    }

    public void enterPassword(String myPassword) {
        passwordField.sendKeys(myPassword);
    }

    public void selectLoginButton() {
        loginButton.click();
    }

    public boolean assertLoginPage() {
        new WebDriverWait(driver, 10).until(ExpectedConditions.elementToBeClickable(noticeBoard));
        return noticeBoard.isDisplayed();


    }
}

