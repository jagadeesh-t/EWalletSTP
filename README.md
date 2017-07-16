# EWallet STP React Native App for Android and IOS

## Dev Guide
### Getting started
#### Setup
- Install [yarn](https://yarnpkg.com/en/docs/install)
- `git clone https://github.com/master-atul/EWalletSTP.git`
- `cd EWalletSTP`
- `yarn`


#### NPM scripts:
- **Basic scripts**
  - `yarn ios` : Runs the app for ios in dev mode
  - `yarn android` : Runs the app for android in dev mode
- **Test and lint scripts**
  - `yarn test` : Runs jest test cases
  - `yarn test:watch` : Runs jest test cases in watch mode
  - `yarn test:update` : Run jest and updates the snapshots for the components
  - `yarn test:coverage` : Runs jest test cases and opens coverage report
  - `yarn lint` : Runs eslint and displays all lint errors
  - `yarn lint:fix` : Runs eslint and tries auto fix of errors

### Pre-push hooks
Currently whenever you push three types of tests run to make sure you are pushing a working code.
1. unit test cases
2. eslint


### Contributors Guide
**Common guidelines**
- Make sure test cases pass.
- Make sure eslint passes

**For direct contributors:**
 - No direct push to master is allowed. (enforced in Github)
 - Raise a PR and it will be reviewed and merged.


 ## Tech stack

- React Native
- Javascript/ ES6

## Services used

- firebase sdk
- google analytics

## Access requirements
- Play store admin account
- IOS developer account
- Firebase admin account
- Google analytics admin account
- Twillio admin account
- AWS admin account
- Github repo
- Slack

## Encrypting Instructions

1. openssl aes-256-cbc -in <FILE_TO_ENCRYPT> -out <FILE_TO_ENCRYPT>.enc -a
2. It will ask for password - enter your encryption password
3. Thats it.


## Issues and how to fix them

1. ** google-services.json** not found -

Run the command `KEY_STORE_PASSWORD=<THE_PASSWORD> ./scripts/android/decrypt-files.sh` once
and then run the actual command. This will setup the google-services.json on your computer which is actually present in enrypted form in the repo because it contains the API KEYS.



## Building

1.To build an APK for testing.

`export KEY_PASSWORD=<PASSWORD> && export KEY_STORE_PASSWORD=<PASSWORD> && export BUILD_NUMBER=1.1.test && yarn run build-android-apk`


2.To upload the generated APK to Testfairy after it is built.

`export TF_KEY=<TESTFAIRY_API_KEY> && yarn run upload-apk-to-tf`
