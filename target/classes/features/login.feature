Feature: As a user of CtheSigns I want to be able to login to the application and carryout assessments for my patients

  Scenario:
    Given I am on CtheSigns Login page
    When I enter my email into the Email field
    And I enter I enter my password into the password field
    And I click on the Login button
    Then I should be signed into the application successfully