var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement

    AWS.config.update({
      region: "us-west-2"
    });

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Test"
};

dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

};