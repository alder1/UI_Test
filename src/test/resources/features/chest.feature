Feature: As a user of CtheSigns application, I want to see the true outcome of assessments displayed

  Scenario:To validate Recommendations
    Given I have successfully logged into CtheSigns application
    When I select System button on the Home page
    And I enter an adult age
    And I select the gender male
    And I select Suspected cancer on the chest x-ray
    When I click on the Referral Pathway button
    Then the Results page should be displayed with Recommendations


    Scenario: To validate Considerations
     Given I have successfully logged into CtheSigns application
     When I select System button on the Home page
      And  I enter an adult age
      And I select the gender male
      And i select Finger clubbing
      When I click on the Referral Pathway button
      Then the Results page should be displayed with Considerations



      Scenario: To validate patient does not meet the criteria
        Given I have successfully logged into CtheSigns application
        When I select System button on the Home page
        And I enter an adult age
        And I select the gender male
        And I select Wheeze
        When I click on the Referral Pathway button
        Then the Results page should be displayed with patient does not meet the criteria