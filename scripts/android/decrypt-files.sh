#!/bin/sh

echo "Decrypting keystores."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/keystore/debug.keystore.enc -d -a -out android/app/debug.keystore


openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/keystore/ewallet.keystore.enc -d -a -out android/app/ewallet.keystore

echo "Decrypting firebase file."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/firebase/google-services.json.enc -d -a -out android/app/google-services.json
