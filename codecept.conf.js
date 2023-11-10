const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS || true);
const localhostURL = process.env.LOCALHOST_URL || 'http://localhost:3000';
const { devices } = require('playwright');

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*-test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: localhostURL,
      show: true,
      browsers: [
        {
          browser: 'chromium',
        },
        {
          browser: 'chromium',
          emulate: devices['iPhone 12'],
        },
      ],
    },
    REST: {
      prettyPrintJson: true,
      defaultHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file.js',
  },
  name: 'ion8.net',
};