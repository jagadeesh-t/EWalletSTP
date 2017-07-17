#!/bin/bash
echo "$DEVICE: Building $EWALLET_ENV"

if [[ $EWALLET_ENV = "PRODUCTION" ]]; then
  echo "Building PRODUCTION files";
  KEY_STORE_FILE=prod.ewallet.keystore
else
  echo "Building UAT files";
  KEY_STORE_FILE=uat.ewallet.keystore
fi

if [[ "$DEVICE" = "ANDROID" ]]; then

  echo $BUILD_NUMBER

  cd android

  ./gradlew clean assembleRelease -PVERSION_NUMBER=$BUILD_NUMBER -PMYAPP_RELEASE_STORE_FILE=$KEY_STORE_FILE -PMYAPP_RELEASE_KEY_ALIAS=com.ewalletSTP -PMYAPP_RELEASE_STORE_PASSWORD=$KEY_STORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$KEY_PASSWORD &&

  cd ..

fi
