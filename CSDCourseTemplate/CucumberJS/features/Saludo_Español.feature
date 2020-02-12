Feature: Saludo_Español

  Hello world app

  Scenario: Buenos días
    Given i go to hello world app
    When i select language 'Español' and selet hour '08:00'
    Then should see 'Buenos dias'
    #node_modules\.bin\cucumber-js

  Scenario: Buenas tardes
    Given i go to hello world app
    When i select language 'Español' and selet hour '13:10'
    Then should see 'Buenas tardes'
    #node_modules\.bin\cucumber-js

  Scenario: Buenas noches
    Given i go to hello world app
    When i select language 'Español' and selet hour '19:10'
    Then should see 'Buenas noches'
    #node_modules\.bin\cucumber-js