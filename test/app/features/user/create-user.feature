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