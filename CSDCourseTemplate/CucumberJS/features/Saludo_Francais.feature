Feature: Saludo_Francés

  Hello world app

  Scenario: Bonjour
    Given i go to hello world app
    When i select language 'Francés' and selet hour '08:00'
    Then should see 'Bonjour'
    #node_modules\.bin\cucumber-js

  Scenario: Bonsoir
    Given i go to hello world app
    When i select language 'Francés' and selet hour '13:10'
    Then should see 'Bonsoir'
    #node_modules\.bin\cucumber-js

  Scenario: Bonne nout
    Given i go to hello world app
    When i select language 'Francés' and selet hour '19:10'
    Then should see 'Bonne nout'
    #node_modules\.bin\cucumber-js