Feature: Create user
  In order to create or update a user

  Scenario: A valid put request for create or update a user
    Given I send a PUT request to "/user/ce017a56-2dcf-11eb-8381-0a87cf3d6bd2" with body:
      """
      {
        "name": "some name",
        "phone": "+56975889579",
        "age": 21,
        "email": "email.test@test.com"
      }
      """
    Then the response status code should be 201

  Scenario: A invalid id in put request for create or update a user
    Given I send a PUT request to "/user/1" with body:
      """
      {
        "name": "some name",
        "phone": "+56975889579",
        "age": 21,
        "email": "email.test@test.com"
      }
      """
    Then the response status code should be 400
    And the response content should be:
      """
      {
        "error": "<UserId> does not allow the value <1>"
      }
      """

  Scenario: A invalid name in put request for create or update a user
    Given I send a PUT request to "/user/ce017a56-2dcf-11eb-8381-0a87cf3d6bd1" with body:
      """
      {
        "name": "s",
        "phone": "+56975889579",
        "age": 21,
        "email": "email.test@test.com"
      }
      """
    Then the response status code should be 400
    And the response content should be:
      """
      {
        "error": "username cannot be less than 2 characters"
      }
      """

  Scenario: A invalid phone in put request for create or update a user
    Given I send a PUT request to "/user/ce017a56-2dcf-11eb-8381-0a87cf3d6bd1" with body:
      """
      {
        "name": "some name",
        "phone": "+569",
        "age": 21,
        "email": "email.test@test.com"
      }
      """
    Then the response status code should be 400
    And the response content should be:
      """
      {
        "error": "user phone cannot be less than 11 characters"
      }
      """