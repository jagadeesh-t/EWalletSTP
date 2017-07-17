#!/bin/bash

if [[ $EWALLET_ENV = "PRODUCTION" ]]; then
  echo "Decrypting PRODUCTION files";
  KEY_STORE_FILE=prod.ewallet.keystore
  GOOGLE_SERVICES_FILE=prod-google-services.json
else
  echo "Decrypting UAT files";
  KEY_STORE_FILE=uat.ewallet.keystore
  GOOGLE_SERVICES_FILE=uat-google-services.json
fi

if [[ $KEY_STORE_PASSWORD ]]; then echo "Keystore Password is set"; else echo "Err: SET KEY_STORE_PASSWORD env variable";exit;   fi

echo "Decrypting keystores."
echo $KEY_STORE_FILE

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in "scripts/android/keystore/$KEY_STORE_FILE.enc" -d -a -out "android/app/$KEY_STORE_FILE"

echo "Decrypting firebase file."
echo $GOOGLE_SERVICES_FILE

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in "scripts/android/firebase/$GOOGLE_SERVICES_FILE.enc" -d -a -out "android/app/google-services.json"
