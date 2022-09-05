Feature: Remove a user
  In order to remove a user

  Scenario: A valid delete request for remove a user
    Given I send a DELETE request to "/user/ce017a56-2dcf-11eb-8381-0a87cf3d6bd2"
    Then the response status code should be 204