#!/bin/bash
echo "$DEVICE: Building"

if [[ "$DEVICE" = "ANDROID" ]]; then

  echo $BUILD_NUMBER

  cd android

  ./gradlew clean assembleRelease -PVERSION_NUMBER=$BUILD_NUMBER -PMYAPP_RELEASE_STORE_FILE=ewallet.keystore -PMYAPP_RELEASE_KEY_ALIAS=com.ewalletSTP -PMYAPP_RELEASE_STORE_PASSWORD=$KEY_STORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$KEY_PASSWORD &&

  cd ..

fi
