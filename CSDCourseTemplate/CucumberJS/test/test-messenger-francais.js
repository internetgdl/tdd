var expect  = require('chai').expect;
const Messenger = require('../lib/messenger');
 


describe('Messenger - Francais', function() {
   // Zombie
    describe ('Get time (Zero)', function() {
        it('Get morning time (Zero)', function(done){

            //Arrange
            
            let mesenger;
            let hour =  "00:00:00";
            var datetime = new Date('1970-01-01T' + hour);
            var language="Francais";
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessage(datetime,language);
            //Assert
            expect(message).to.equal("Bonjour");
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
        var language="Francais";
        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime,language);
        //Assert
        expect(message).to.equal("Bonjour");
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
        var language="Francais";
        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime,language);
        //Assert
        expect(message).to.equal("Bonjour");
         done();
    });
    it('Get morning time (Many)', function(done){

        //Arrange
        let mesenger;
        let hour =  "22:11:07";
        var datetime = new Date('1970-01-01T' + hour);
        var language="Francais";

        mesenger = new Messenger();
        //Act
        let message =  mesenger.getMessage(datetime,language);
        //Assert
        expect(message).to.equal("Bonne nout");
         done();
    });
    it('Get morning time (Many)', function(done){

        //Arrange
        let mesenger;
        let hour =  "17:00:00";
        var datetime = new Date('1970-01-01T' + hour);
        var language="Francais";

        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime,language);
        //Assert
        expect(message).to.equal("Bonsoir");
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
        var language="Francais";

        mesenger = new Messenger( );
        //Act
        let message =  mesenger.getMessage(datetime,language);
        //Assert
        expect(message).to.equal("Bonne nout");
         done();
    });
});
// zombIe
describe ('Get time (Interface)', function() {
    it('Get morning time (Interface)', function(done){

        //Arrange
        let mesenger;
        let text = "asdjaksdasdasd";
        var language="Francais";
       
        mesenger = new Messenger();
        //Act
        let message =  mesenger.getMessage(text,language);
        //Assert
        expect(message).to.equal("erreur - format invalide");
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
        var language="Francais";
        //Act
        let message =  mesenger.getMessage(object,language);
        //Assert
        expect(message).to.equal("erreur - format invalide");
         done();
    });
   
});

});