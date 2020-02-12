class Messenger {

    constructor( ) {
        this.languagedic = {
            Español: [
                "Buenos dias",
                "Buenas tardes",
                "Buenas noches",
                "error - formato no valido"
            ],
            English: [
                "Good Morning",
                "Good Afternoon",
                "Good Night",
                "err - format not valid"
            ],
            Francais: [
                "Bonjour",
                "Bonsoir",
                "Bonne nout",
                "erreur - format invalide"
            ]
        }
    }

    getMessage(time,language) {
        var messages=this.languagedic[language]
        let dateTime =  new Date(time);

        if (time=== undefined)
            return "Hello World!";       
        if (time==null || new Date(time)=="Invalid Date") 
            return(messages[3])
        if((dateTime.getHours() >= 0) && (dateTime.getHours() < 12))
            return messages[0];
        if((dateTime.getHours() >= 12) && (dateTime.getHours() < 18))
            return messages[1];
        if((dateTime.getHours() >= 18) && (dateTime.getHours() <= 23))
            return messages[2];        
    } 
}

module.exports = Messenger;