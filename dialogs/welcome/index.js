var builder = require('botbuilder');

module.exports = function() {
    return [
        function (session) {
            builder.Prompts.text(session, "Welcome to MyGoalsBot!!");
        },
        function (session, results) {
            session.userData.response = results.response;
            session.send('You said: ' + session.userData.response);
        }
    ];
}