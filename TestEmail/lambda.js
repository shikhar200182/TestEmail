let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
    ses.sendEmail({
        Destination: {
            ToAddresses: ['shikharg@gmail.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: `Hi Please see this`
                }
            },
            Subject: {
                Data: 'Test email Lambda'
            }
        },
        Source: 'mmdemoid4@gmail.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
}