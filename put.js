var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement

    AWS.config.update({
      region: "us-west-2"
    });


var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Test";

var id = 1;
var name = "Mistry";

var params = {
    TableName:table,
    Item:{
        "id": id,
        "name": name
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});


};