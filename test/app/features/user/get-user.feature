Feature: Get users
  In order to get a users

  Scenario: A valid get request for get a user
    Given I send a GET request to "/user"
    Then the response status code should be 200
    And the response content should be:
      """
      [
        {
          "id": "ce017a56-2dcf-11eb-8381-0a87cf3d6bd2",
          "name": "some name",
          "phone": "+56975889579",
          "age": 21,
          "email": "email.test@test.com"
        }
      ]
      """