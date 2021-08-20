Feature: Socials 

    Scenario: list of social data
        Given I make a GET request to "http://localhost:3000/Socials"
        When I receive a response
        Then response should have a status 200
        And the response in an item 0 should have body
            """
            {
                "name" : "Amisha",
                "social" : "Github",
                "link" : "https://github.com/Amishakumari544"
            }
            """