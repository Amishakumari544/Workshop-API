Feature: API is running 

    Scenario:Is the API is running
        Given I make a GET request to "http://localhost:3000"
        When I receive a response
        Then response should have a status 200
 
    Scenario:If the url is invalid we get 404
        Given I make a GET request to "http://localhost:3000/hasr"
        When I receive a response
        Then response should have a status 404
 