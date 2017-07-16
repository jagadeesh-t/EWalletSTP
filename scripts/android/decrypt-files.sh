#!/bin/sh

echo "Decrypting keystore."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/keystore/debug.keystore.enc -d -a -out android/app/debug.keystore

echo "Decrypting firebase file."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/firebase/google-services.json.enc -d -a -out android/app/google-services.json
