
Feature: Saludo_Español

  Hello world app

  Scenario: Good Morning
    Given i go to hello world app
    When i select language 'English' and selet hour '08:00'
    Then should see 'Good Morning'
    #node_modules\.bin\cucumber-js

  Scenario: Good Afternoon
    Given i go to hello world app
    When i select language 'English' and selet hour '13:10'
    Then should see 'Good Afternoon'
    #node_modules\.bin\cucumber-js

  Scenario: Good Night
    Given i go to hello world app
    When i select language 'English' and selet hour '19:10'
    Then should see 'Good Night'
    #node_modules\.bin\cucumber-js