# WebDriverIO V5 switchToFrame compatibility with MSEdge

The purpose of this repository is to demonstrate an issue of switching to iframe on MS Edge (tested on v16,v17 and v18) based on [WebdriverIO V5](http://webdriver.io/) integration with BrowserStack.

The error is on Edge:  ERROR webdriver: Request failed due to no such frame: The specified frame was not found in the current frame or window.

Please note the same test works on Chrome,FireFox,Safari,IE11.

## Installation
* `git clone [https://github.com/safetyculture/frontend-ui-tests.git](https://github.com/SafetyCulture/TeamTrain-ui-test.git)`
* `cd TeamTrain-ui-test`
* `npm install`

## Running Tests
There are two ways to run the tests in local environment, either on the installed browsers in your machine or through BrowserStack.

`npm run test:local` Please ensure your browser driver is started 
`npm run test:remote` Please ensure your you have inserted your BrowserStack `user` and `key` in wdio.remote.conf.js