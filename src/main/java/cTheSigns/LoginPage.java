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
    @FindBy(xpath = "//div[@class='styledComponents__CookiesText-jDcQxk eTnqtP']")
    private WebElement closeCookie;

    @FindBy(xpath = "//input[@name='email']")
    private WebElement mailField;

    @FindBy(xpath = "//input[@name='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//div[@class='TabContent-egCFrl dboYwc tab-content-visible']//div//button[@class='ExtendedButton__ExtendedButton-fgsFSm gMXuRL']")
    private WebElement loginButton;

    @FindBy(xpath = "//span[contains(text(),'noticeboard')]")
    private WebElement noticeBoard;

    //validate System icon

    @FindBy(xpath = "//body/div[@id='app']/div/div[@class='styledComponents__StyledWrapper-kvYoPE kDzZnd']/div[@class='styledComponents__BodyWrapper-bsyRiV bEyKcQ']/div[@class='ContentWrapper__ContentWrapper-ebmCKp container ieefin']/div[@class='styledComponents__PageWrapper-iZXYYR OQFix']/div[@class='component-wrapper']/div/div/div[@class='styledComponents__PageWrapper-eoWmmr PeIWm']/div[@class='row']/div[@class='col-xs-12 col-md-push-5 col-md-7']/div[@class='styledComponents__IconsWrapper-cyeros gYoWse']/div[@class='row']/div[1]/div[1]/a[1]/button[1]/div[1]")
    private WebElement system;


    public void okCookie(){
        closeCookie.click();
    }

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

    public void clickSystemIcon(){
        system.click();
    }
}

