class Messenger {

    constructor( ) {
        
    }

    getMessage(time) {
        if (time=== undefined){
        return "Hello World!";
        }
        
        if (new Date(time)=="Invalid Date") { return("err - format no valid")}
        if (time==null) { return("err - format no valid")}
        let dateTime =  new Date(time);
        if((dateTime.getHours() >= 0) && (dateTime.getHours() < 4)){
            return "Good nite";
        } else  if((dateTime.getHours() >= 4) && (dateTime.getHours() < 12)){
            return "Good morning";
        }else  if((dateTime.getHours() >= 12) && (dateTime.getHours() < 18)){
            return "Good evening";
        }else  if((dateTime.getHours() >= 18) && (dateTime.getHours() <= 23)){
            return "Good nite";
        }
    } 
}

module.exports = Messenger;