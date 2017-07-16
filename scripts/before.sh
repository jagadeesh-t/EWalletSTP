#! /bin/bash
echo "$DEVICE: Before building"

if [[ "$DEVICE" = "ANDROID" ]]; then
  scripts/android/decrypt-keystore.sh
fi
