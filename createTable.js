var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement

    AWS.config.update({
      region: "us-west-2"
    });

    var dynamodb = new AWS.DynamoDB();

    var params = {
        TableName : "Test",
        KeySchema: [       
            { AttributeName: "id", KeyType: "HASH"},  //Partition key
            { AttributeName: "name", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [       
            { AttributeName: "id", AttributeType: "N" },
            { AttributeName: "name", AttributeType: "S" }
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
};