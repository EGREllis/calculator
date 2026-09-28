#!/bin/bash

maven_projects=( "calculator-messages" "calculator-worker" "calculator-foreman" "calculator-backend" )
react_projects=( "calculator-frontend" )
built=1

for maven_project in "${maven_projects[@]}"
do
  cd $maven_project
  mvn clean install
  built="$?"
  cd ..
  if [ $built -ne 0 ]; then
    exit $built
  fi
done

cd calculator-frontend
npm run build
cd .. 
