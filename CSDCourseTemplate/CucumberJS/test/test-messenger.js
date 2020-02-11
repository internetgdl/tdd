var expect  = require('chai').expect;
const Messenger = require('../lib/messenger');
 


describe('Messenger', function() {
    describe ('Get a friendly message', function() {
        it('return a nice message', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessage();
            //Assert
            expect(message).to.equal("Hello World!");
             done();
        });
    });
   // Zombie
    describe ('Get time (Zero)', function() {
        it('Get morning time (Zero)', function(done){

            //Arrange
            
            let mesenger;
            let hour =  "00:00:00";
            var datetime = new Date('1970-01-01T' + hour);
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessage(datetime);
            //Assert
            expect(message).to.equal("Good nite");
             done();
        });
    });
 // zOmbie
 describe ('Get time (One)', function() {
    it('Get morning time (One)', function(done){

        //Arrange
        let mesenger;
        let hour =  "08:00:00";
        var datetime = new Date('1970-01-01T' + hour);
        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime);
        //Assert
        expect(message).to.equal("Good morning");
         done();
    });
});

 // zoMbie
 describe ('Get time (Many)', function() {
    it('Get morning time (Many)', function(done){

        //Arrange
        let mesenger;
        let hour =  "08:02:56";
        var datetime = new Date('1970-01-01T' + hour);
        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime);
        //Assert
        expect(message).to.equal("Good morning");
         done();
    });
    it('Get morning time (Many)', function(done){

        //Arrange
        let mesenger;
        let hour =  "22:11:07";
        var datetime = new Date('1970-01-01T' + hour);

        mesenger = new Messenger();
        //Act
        let message =  mesenger.getMessage(datetime);
        //Assert
        expect(message).to.equal("Good nite");
         done();
    });
    it('Get morning time (Many)', function(done){

        //Arrange
        let mesenger;
        let hour =  "17:00:00";
        var datetime = new Date('1970-01-01T' + hour);

        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime);
        //Assert
        expect(message).to.equal("Good evening");
         done();
    });
    
});
// zomBie
describe ('Get time (Bounds)', function() {
    it('Get morning time (Bounds)', function(done){

        //Arrange
        let mesenger;
        let hour = "23:59:59";
        var datetime = new Date('1970-01-01T' + hour);

        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime);
        //Assert
        expect(message).to.equal("Good nite");
         done();
    });
});
// zombIe
describe ('Get time (Interface)', function() {
    it('Get morning time (Interface)', function(done){

        //Arrange
        let mesenger;
        let text = "asdjaksdasdasd";
       
        mesenger = new Messenger();
        //Act
        let message =  mesenger.getMessage(text);
        //Assert
        expect(message).to.equal("err - format no valid");
         done();
    });
});
// zombiE
describe ('Get time (Exception)', function() {
    it('Get morning time (Exception)', function(done){

        //Arrange
        let mesenger;
        let object = null;
        mesenger = new Messenger();
        //Act
        let message =  mesenger.getMessage(object);
        //Assert
        expect(message).to.equal("err - format no valid");
         done();
    });
   
});

});