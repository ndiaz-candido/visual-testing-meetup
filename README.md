# Visual Testing | Agile Testing - MeetUp - Cali 2018

This repository consists in a basic web application and a visual test with multiple strategies. Those strategies are splitted in releases following this order:

## Release [1.0.0](https://github.com/ndiaz-candido/visual-testing-meetup/releases/tag/1.0.0)

Contains the web application without any test.

## Release [1.0.1](https://github.com/ndiaz-candido/visual-testing-meetup/releases/tag/1.0.1)

Use `Protractor` and `PixDiff` to visual test the web application.

## Release [1.0.2](https://github.com/ndiaz-candido/visual-testing-meetup/releases/tag/1.0.2)

Execute the visual tests in `Saucelabs` with multiple capabilities.

## Release [1.0.3](https://github.com/ndiaz-candido/visual-testing-meetup/releases/tag/1.0.3)

Manage the visual tests in `Applitools`.

# How to execute the Visual Tests

To execute the Visual Test in each release use these script:

````
npm install
npm run test:visual
`````

Take into account that when the Visual Test are executed through a external service you should provide the credential.

# Saucelabs

````
export SAUCE_USERNAME='saucelabs-username-value'
export SAUCE_ACCESS_KEY='saucelabs-access-key'
````

# Applitools

````
export APPLITOOLS_KEY='applitools-key'
````
