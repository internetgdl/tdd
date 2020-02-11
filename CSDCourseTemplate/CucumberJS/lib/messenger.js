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
            ]
        }
    }

    getMessage(time,language) {
        if (time=== undefined){
        return "Hello World!";
        }
    
        var messages=this.languagedic[language]
        
        if (new Date(time)=="Invalid Date") { return(messages[3])}
        if (time==null) { return(messages[3])}
        let dateTime =  new Date(time);
        if((dateTime.getHours() >= 0) && (dateTime.getHours() < 12)){
            return messages[0];
        }else  if((dateTime.getHours() >= 12) && (dateTime.getHours() < 18)){
            return messages[1];
        }else  if((dateTime.getHours() >= 18) && (dateTime.getHours() <= 23)){
            return messages[2];
        }
    } 
}

module.exports = Messenger;