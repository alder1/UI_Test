package cTheSigns;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ChestPage {
    WebDriver driver;

    public ChestPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);



    }
    //Scenario to validate Recommendations

    @FindBy(xpath = "//body/div[@id='app']/div/div[@class='styledComponents__StyledWrapper-kvYoPE kDzZnd']/div[@class='styledComponents__BodyWrapper-bsyRiV bEyKcQ']/div[@class='ContentWrapper__ContentWrapper-ebmCKp container ieefin']/div[@class='styledComponents__PageWrapper-iZXYYR OQFix']/div[@class='component-wrapper']/div/div/div[@class='styledComponents__PageWrapper-eoWmmr PeIWm']/div[@class='row']/div[@class='col-xs-12 col-md-push-5 col-md-7']/div[@class='styledComponents__IconsWrapper-cyeros gYoWse']/div[@class='row']/div[1]/div[1]/a[1]/button[1]/div[1]")
    private WebElement system;

    @FindBy(xpath = "//input[@id='age']")
    private WebElement age;

    @FindBy(xpath = "//label[@class='styledComponents__GenderLeft-jGoPES iFIGzJ']")
    private WebElement gender;

    @FindBy(xpath = "//label[contains(text(),'Suspected cancer on the chest x-ray')")
    private WebElement suspectedCancer;

    @FindBy(xpath = "//span[contains(text(),'Referral Pathway')]")
    private WebElement referralPathway;

    @FindBy(xpath = "//label[contains(text(),'Finger clubbing')]")
    private WebElement fingerClubbing;

    @FindBy(xpath = "//span[contains(text(),'Referral Pathway')]")
    private WebElement referralPathway2;

    @FindBy(xpath = "//label[contains(text(),'Wheeze')]")
    private WebElement wheeze;

    @FindBy(xpath = "//span[contains(text(),'Referral Pathway')]")
    private WebElement referralPathway3;




    public void clickSystem(){
        system.click();

    }
    public void setAge1(){
        age.sendKeys("44");
    }

    public void clickGender (){
        gender.click();
    }

    public void clickSuspectedCancer(){
        suspectedCancer.click();
    }

    public void clickPathway1(){
        referralPathway.click();
    }







}
