package cTheSigns;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ChestPage {
    WebDriver driver;

    public ChestPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);



    }



    @FindBy(xpath = "//input[@id='age']")
    private WebElement age;

    @FindBy(xpath = "//label[@class='styledComponents__GenderLeft-jGoPES iFIGzJ']")
    private WebElement gender;

    @FindBy(xpath = "//label[contains(text(),'Suspected cancer on the chest x-ray')]")
    private WebElement suspectedCancer;

    @FindBy(xpath = "//span[contains(text(),'Referral Pathway')]")
    private WebElement referralPathway;

    @FindBy(xpath = "//label[contains(text(),'Finger clubbing')]")
    private WebElement fingerClubbing;

    @FindBy(xpath = "//label[contains(text(),'Wheeze')]")
    private WebElement wheeze;


    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/ul[1]/li[1]/p[1]")
    private WebElement referralForLungCancer;

    @FindBy(xpath = "//li[2]//ul[1]//li[1]//p[1]")
    private WebElement considerationForLungCancer;

    @FindBy (xpath = "//body/div[@id='app']/div/div[@class='styledComponents__StyledWrapper-kvYoPE kDzZnd']/div[@class='styledComponents__BodyWrapper-bsyRiV bEyKcQ']/div[@class='ContentWrapper__ContentWrapper-ebmCKp container ieefin']/div[@class='styledComponents__PageWrapper-iZXYYR OQFix']/div[@class='component-wrapper']/div/div/div[@class='styledComponents__Wrapper-gOmCHK hTbSDh']/ul[@class='styledComponents__ListWrapper-hCchzr dQSdNj']/li[@class='styledComponents__ListSection-fYcUuJ bqzjfU']/ul/li[@class='styledComponents__InnerTextListWrapper-yAIpK fuCQbo']/p[1]")
    private WebElement notCriteria;



    public void setAge(){
        age.sendKeys("44");
    }

    public void clickGender (){
        gender.click();
    }

    public void clickSuspectedCancer() {
        JavascriptExecutor ex = (JavascriptExecutor) driver;
        ex.executeScript("arguments[0].click();", suspectedCancer);
    }

    public void clickPathway1(){
        referralPathway.click();
    }

    public void clickFingerClubbing(){
        fingerClubbing.click();
    }

    public void clickWheeze(){ wheeze.click();

    }

    public void AssertRecommendationLungCancer(){
        System.out.println(referralForLungCancer.getText());
        String expectedResult = "Refer the patient using a suspected cancer pathway referral (within 2 weeks) for lung cancer or mesothelioma";
        String actualResult = referralForLungCancer.getText();
        Assert.assertTrue(actualResult.startsWith(expectedResult));
    }

    public void AssertConsiderationLungCancer(){
        System.out.println(considerationForLungCancer.getText());
        String expectedResult = "Consider offering the patient an urgent chest x-ray (within 2 weeks) to assess ffor lung cancer or mesothelioma";
        String actualResult = considerationForLungCancer.getText();
        Assert.assertEquals(expectedResult, actualResult);

    }

    public void AssertNotCriteria(){
        System.out.println(notCriteria.getText());
        String expectedResult = "The patient does not meet the criteria for investigation or referral for cancer under the NICE guidelines";
        String actualResult = notCriteria.getText();
        Assert.assertEquals(expectedResult, actualResult);

    }





}
