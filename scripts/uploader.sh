#!/bin/bash

if [[ $TF_KEY ]]; then
  echo "Testfairy key is set.";
else echo "TF_KEY env variable is not set, hence not uploading to Testfairy";exit;
fi

if [[ "$DEVICE" = "ANDROID" ]]; then
  echo "Uploading apk to TestFairy..."
  bash ./scripts/tf_uploader.sh "android/app/build/outputs/apk/app-release.apk"
fi
