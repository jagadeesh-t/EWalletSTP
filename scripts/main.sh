#!/bin/bash

echo "$DEVICE: Starting process"

if [[ "$DEVICE" = "ANDROID" ]]; then
  if [[ $KEY_PASSWORD ]]; then echo "Key Password is set"; else echo "Err: SET KEY_PASSWORD env variable";exit;  fi
  if [[ $KEY_STORE_PASSWORD ]]; then echo "Keystore Password is set"; else echo "Err: SET KEY_STORE_PASSWORD env variable";exit;   fi
  if [[ $BUILD_NUMBER ]]; then echo "Build number is set"; else echo "Err: SET BUILD_NUMBER env variable";exit;   fi

  export DEVICE="ANDROID" &&
  rm -fr $TMPDIR/react-* &&
  bash ./scripts/before.sh &&
  bash ./scripts/build.sh &&
  bash ./scripts/package.sh &&
  bash ./scripts/clean-up.sh &&

  if [[ $TF_KEY ]]; then
    echo "Testfairy key is set, Uploading to Test fairy...";
    bash ./scripts/tf_uploader.sh android/app/build/outputs/apk/app-release.apk
  else echo "TF_KEY env variable is not set, hence not uploading to Testfairy";exit;
  fi

fi

if [[ "$DEVICE" = "IOS" ]]; then
  if [[ $KEY_PASSWORD ]]; then echo "Key Password is set"; else echo "Err: SET KEY_PASSWORD env variable";exit;  fi
  if [[ $KEY_STORE_PASSWORD ]]; then echo "Keystore Password is set"; else echo "Err: SET KEY_STORE_PASSWORD env variable";exit;   fi
  if [[ $BUILD_NUMBER ]]; then echo "Build number is set"; else echo "Err: SET BUILD_NUMBER env variable";exit;   fi

  export DEVICE="IOS";

  echo "BUILD SCRIPT YET TO BE IMPLEMENTED"

fi
