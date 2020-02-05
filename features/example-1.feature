Feature: QA Testing

   Lets make an example

   Background: Google must be open
    Given 'google' page is open

    Scenario: Successfully search for Collact
        When I search for 'Collact'
        Then I should get results related to 'Collact'