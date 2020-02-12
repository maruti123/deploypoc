#!/bin/sh
# Go into direcotry for deploying!
echo entering proxy directory
cd gateway/$projectname
# Execute maven now !
echo deploying using maven now
mvn apigee-enterprise:deploy -Ptest -Dusername=$username -Dpassword=$password -Dorg=$org
