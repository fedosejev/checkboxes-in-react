#!/bin/bash

./build-for-production.sh
./commit-and-push-to-github.sh

# Push `./build` directory to `gh-pages` branch on GitHub
git subtree push --prefix build origin gh-pages