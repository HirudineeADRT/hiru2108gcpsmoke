let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (request, response) {
    //test 123
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        AttributesToGet: ["name"],
        Limit: 100
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });

    response.send({ "message": "Successfully executed" });
}