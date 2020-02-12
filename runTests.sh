#!/bin/sh
# This is a comment!
cd gateway/$projectname/test/integration/
npm install
node_modules/cucumber/bin/cucumber.js --format json:reports.json
