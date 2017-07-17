#!/bin/bash
echo "$DEVICE: Cleaning up"

if [[ "$DEVICE" = "ANDROID" ]]; then
  echo "cleaning up google-services.json for $DEVICE";
  rm android/app/google-services.json
  echo "cleaning up keystore for $DEVICE";
  rm android/app/prod.ewallet.keystore
fi
