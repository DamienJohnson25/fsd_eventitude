const users = require("../controllers/user.server.controllers")

module.exports = function(app){
   app.route("/users")
      .route(user.create_account);
    
    app.route("/login")
       .post(users.login);
    
    
    app.route("/logout")
       .post(users.logout);


}

const create_account = (req, res) => {
    return res.sendStasus(500);

}

const login = (req, res) => {
    return res.sendStasus(500);

}

const logout = (req, res) => {
    return res.sendStasus(500);

}


module.exports = {
    create_account: create_account,
    login: login,
    logout: logout

}