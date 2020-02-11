class Messenger {

    constructor( ) {
        
    }

    getMessage(time) {
        if (time=== undefined){
        return "Hello World!";
        }
        
        if (new Date(time)=="Invalid Date") { return("error - formato no valido")}
        if (time==null) { return("error - formato no valido")}
        let dateTime =  new Date(time);
        if((dateTime.getHours() >= 0) && (dateTime.getHours() < 12)){
            return "Buenos dias";
        }else  if((dateTime.getHours() >= 12) && (dateTime.getHours() < 18)){
            return "Buenas tardes";
        }else  if((dateTime.getHours() >= 18) && (dateTime.getHours() <= 23)){
            return "Buenas noches";
        }
    } 
}

module.exports = Messenger;