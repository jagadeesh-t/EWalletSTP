echo "$DEVICE: Starting process"

if [[ "$DEVICE" = "ANDROID" ]]; then
  echo "Assuming KEY_PASSWORD, KEY_STORE_PASSWORD, BUILD_NUMBER and TF_KEY is set as env variables"
  export DEVICE="ANDROID" &&
  rm -fr $TMPDIR/react-* &&
  sh ./scripts/before.sh &&
  sh ./scripts/build.sh &&
  sh ./scripts/package.sh &&
  sh ./scripts/clean-up.sh &&
  sh ./scripts/tf_uploader.sh android/app/build/outputs/apk/app-release.apk

fi
