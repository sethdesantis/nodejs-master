Predix Development Kit Security Starter NodeJs Application
==========================================================

This is simple starter Node application that demonstrates user authentication with Predix UAA.

Refer to the pdk-security-starter to configure the UAA client.

## Running locally
Edit the config.json to run locally for your UAA client.

Sample :
```
"development":{
  "clientId": "${clientId}",
  "serverUrl" : "${UAA URL}", 
  "base64ClientCredential": "${base 64 encoding of clientId:secret}",
  "appUrl": "http://localhost:3000"
}
```
*Note:* You can encode your clientId:secret combination using <https://www.base64encode.org/> or the base64 command on Unix / Mac OSX.

`echo -n clientId:clientSecret | base64`

#### Install and start local web server
```
npm install
node app.js or npm start
```
Navigate to <http://localhost:3000> in your web browser.

Debugging  
```
DEBUG=predix-boot-node-app:* npm start
DEBUG=express:* npm start
```
## Running in the cloud

Set up the manifest file for Cloud deployment
1. Copy manifest.yml.template to my-app-manifest.yml.
2. Edit the my-app-manifest.yml
  1. Replace ${UAA_service_instance} to the service instance name on the cloud foundry for predix UAA.
  2. Replace ${clientId} to the clientId configured on the UAA
  3. Replace ${base64ClientCredential} is the base 64 encoding of clientId:secret

`cf push <appName> -f my-app-manifest.yml`


"credentials": {
     "issuerId": "https://d6d64894-ccb0-459e-b661-e08faa276e53.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token",
     "uri": "https://d6d64894-ccb0-459e-b661-e08faa276e53.predix-uaa.run.aws-usw02-pr.ice.predix.io",
     "zone": {
      "http-header-name": "X-Identity-Zone-Id",
      "http-header-value": "d6d64894-ccb0-459e-b661-e08faa276e53"
     }
     
     Oauth secret
     wTOF7jdbYBjzuYJnvmd2CKvfWdzvq0a/unJehyOnJ84=
     
     oauth:secret
     b2F1dGg6d1RPRjdqZGJZQmp6dVlKbnZtZDJDS3ZmV2R6dnEwYS91bkplaHlPbko4ND0=
     