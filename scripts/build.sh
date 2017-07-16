#!/bin/bash
echo "$DEVICE: Building"

if [[ "$DEVICE" = "ANDROID" ]]; then
  echo $BUILD_NUMBER
  cd android && ./gradlew clean assembleRelease && cd ..
fi
