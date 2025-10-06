#!/usr/bin/env bash

set -o errexit -o nounset

BUILD_DIR=build
REPO=https://github.com/alshedivat/al-folio
COMMIT=db2a1d1b1984d00a52b0be1cb74b2b3aefb31ad5

git clone "$REPO" "$BUILD_DIR"
env -C "$BUILD_DIR" git checkout "$COMMIT"
rm -rf "$BUILD_DIR/.git"

for file in _bibliography _data _news _pages _posts _config.yml; do
  rm -r "${BUILD_DIR:?}/$file"
  cp -r "${file#_}" "$BUILD_DIR/$file"
done

for file in ./assets/* styles/*; do
  cp --force --archive --update=all --link "$file/." "$BUILD_DIR/${file#*/}"
done
