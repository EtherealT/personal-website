import Ember from 'ember';

export default Ember.Component.extend({

    isEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( email );
    },

    actions: {
        processContactForm(){
	    Ember.$('#result-div').html('');
            Ember.$("#result-div").css("display", "none");

            var senderName = Ember.$('#sender');
            var senderEmail = Ember.$('#sender-email');
            var message = Ember.$('#message');

            if(senderName.val().length == 0 || senderEmail.val().length == 0 || message.val().length == 0){
                Ember.$('#result-div').append('<div style="font-family:hp simplified regular;background-color:#FF5333;color:#ffffff;text-align:center;width:250px;height:10px;border-radius:5px;padding:10px;padding-top:5px;">Please fill out all fields</div>');
                Ember.$('#result-div').fadeIn(500, 'swing');
            }
            else if(!this.isEmail(senderEmail.val())){
                Ember.$('#result-div').append('<div style="font-family:hp simplified regular;background-color:#FF5333;color:#ffffff;text-align:center;width:250px;height:10px;border-radius:5px;padding:10px;padding-top:5px;">Invalid email address</div>');
                Ember.$('#result-div').fadeIn(500, 'swing');
            }
            else{
                Ember.$('#result-div').html('');
                var senderName = senderName.val();
                var senderEmail = senderEmail.val();
                var message = message.val();

                // send message
                Ember.$.post('/message.php', {'name':senderName, 'email':senderEmail, 'message':message}, function(data){
                    if(data == "mail sent"){
                        Ember.$('#result-div').append('<div style="font-family:hp simplified regular;background-color:#43d58c;color:#ffffff;text-align:center;width:250px;height:10px;border-radius:5px;padding:10px;padding-top:5px;">Thanks for your message!</div>');
                        Ember.$('#result-div').fadeIn(500, 'swing');

                        setTimeout(
                            function() {
                                Ember.$('#result-div').fadeOut(500, 'swing');
                        }, 3000);
                    }
                });
            }
        }
    }

});
