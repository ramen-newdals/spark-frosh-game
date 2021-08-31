/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/

import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

export const InitAWSLink = () => {
  const configuration = {
    region: 'us-east-2',
    secretAccessKey: 'eXlcugvSZ+liyieL3jlhEVwg2kUayuW8fMRSSMkH',
    accessKeyId: 'AKIAVEPCVUZOPGFYYP7I',
    sessionToken: 'aws:dynamodb:us-east-2:353199564380:table/Spark_FROSH2021_Scores'
  }

  AWS.config.update(configuration)
  UpdateAWSTable(0, 16)
}

export const UpdateAWSTable = (froshGroupID, score) => {

  // AWS.config.update({
  //   // endpoint: "aws:dynamodb:us-east-2:353199564380:table/Spark_FROSH2021_Scores"
  // });

  var docClient = new AWS.DynamoDB.DocumentClient();

  var table = "Spark_FROSH2021_Scores";


  var params = {
    TableName: table,
    Key: {
      testing: "Testing"
    },
    UpdateExpression: "set  = Testing + :val",
    ExpressionAttributeValues: {
      ":val": score
    },
    ReturnValues: "UPDATED_NEW"
  };

  console.log("Updating the item...");
  docClient.update(params, function (err, data) {
    if (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
}