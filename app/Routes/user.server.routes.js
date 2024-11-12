const users = require('../Controllers/user.server.controllers')

module.exports = function(app){
   app.route("/users")
        .post(users.create_account);
    
   app.route("/login")
      .post();
    
   app.route("/logout")
      .post();

}
