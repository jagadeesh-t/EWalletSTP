#!/bin/bash
echo "$DEVICE: Before building"

if [[ "$DEVICE" = "ANDROID" ]]; then
  scripts/android/decrypt-files.sh
fi
