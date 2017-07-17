#!/bin/bash
echo "$DEVICE: Before building $EWALLET_ENV"

if [[ "$DEVICE" = "ANDROID" ]]; then
  scripts/android/decrypt-files.sh
fi
