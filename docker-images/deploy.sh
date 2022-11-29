#!/bin/sh
set -ex

for D in *; do
    if [ -d "${D}" ]; then
        echo "starting: ${D}"
        cd "${D}"
        docker build --no-cache -t maciejpatro/${D}:latest .
        docker push maciejpatro/${D}:latest
        cd ..
        echo "finishing: ${D}"
    fi
done
