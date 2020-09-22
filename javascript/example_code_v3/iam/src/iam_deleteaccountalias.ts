/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/iam-examples-account-aliases.html.

Purpose:
iam_deleteaccountalias.ts demonstrates how to delete an alias for an AWS account.

Inputs :
- REGION
- ALIAS

Running the code:
ts-node iam_createaccountalias.ts
 */
// snippet-start:[iam.JavaScript.alias.deleteAccountAliasV3]
// Import required AWS SDK clients and commands for Node.js
const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam");

// Set the AWS Region
const REGION = "REGION"; //e.g. "us-east-1"

// Set the parameters
const params = { AccountAlias: "ALIAS" }; // ALIAS

// Create IAM service object
const iam = new IAMClient(REGION);

const run = async () => {
  try {
    const data = await iam.send(new DeleteAccountAliasCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[iam.JavaScript.alias.deleteAccountAliasV3]
//for unit tests only
export = {run};
