/**
 * Created by abhiaiyer on 11/22/14.
 */
if (Meteor.isClient) {
    Template.login.events({
       'submit #login-form': function (event, template) {
           event.preventDefault();

           var email = template.find('#inputEmail').value;
           var password = template.find('#inputPassword').value;

           Meteor.loginWithPassword(email, password, function (err) {
               if (err) {
                   console.error(err);
               } else {

               }
           });
           return false;
       }
    });

    Template.register.events({
        'submit #register-form': function (event, template) {
            event.preventDefault();

            var email = template.find('#inputEmail').value;
            var password = template.find('#inputPassword').value;

            Accounts.createUser(email, password, function (err) {
                if (err) {
                    console.error(err);
                } else {

                }
            });
            return false;
        }
    });
}