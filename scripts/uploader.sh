#!/bin/bash

if [[ "$DEV" = "ANDROID" ]]; then
  echo "Uploading apk to TestFairy..."
  scripts/tf_uploader.sh "android/app/build/outputs/apk/app-release.apk"
fi
