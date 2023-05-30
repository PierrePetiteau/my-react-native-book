#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: Please provide an app name as a parameter."
  exit 1
fi

app_name=$1

echo "Creating a new bare React Native app with Expo and TypeScript..."

# Initialize a new Expo project with the expo-template-blank-typescript template
npx create-expo-app $app_name --template expo-template-blank-typescript

# Navigate into the project directory
cd $app_name

npx expo install typescript

# Rename the entry file to TypeScript
mv App.js App.tsx

# Create ios and android folders
npx expo prebuild -p all

# Open the project in your preferred code editor
code .

echo "Done! Your new bare React Native app with Expo and TypeScript ($app_name) is ready."
