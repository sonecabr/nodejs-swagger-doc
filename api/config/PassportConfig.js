const Strategy = require("passport-http-bearer").Strategy;
const localDb = require("../mock");


module.exports = function(passport) {
    passport.use(new Strategy(
        function(token, next) {
            localDb.users.findOne(token, function(err, user){
                if (err) { return next(err); }
                if (!user) { return next(null, false); }
                if (user.client_id) {
                    let client = localDb.applications.findById(user.client_id)
                    if (!client) { return next(null, false); }
                    user.client = client;
                }
                return next(null, user);
            });
        })
    );
}

