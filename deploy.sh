#!/bin/bash

ls

echo "Cloning deploy branch ..."
git clone -b master "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" site

if [ -d "site" ]; then
  bundle exec jekyll build
  cd site
  git add .
  git commit -m "Site update"
  git push "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" master
  cd ..
else
  echo "Could not clone deploy branch ..."
  exit 1
fi
