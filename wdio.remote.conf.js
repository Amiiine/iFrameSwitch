//const config = require('config');
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'XXX',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'XXX',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        // {
        //     browser: 'Chrome',
        //     resolution: '1280x1024',
        //     os: 'Windows',
        //     os_version: '10',
        //     name: 'Chrome',
        //     project: 'TT UI',            
        //     'browserstack.networkLogs': true
        // },
        {
            browserName: 'Edge',
            browser_version: '18.0',
            resolution: '2048x1536',
            os: 'Windows',
            os_version: '10',
            name: 'Microsoft EDGE',
            project: 'TT UI',           
            'browserstack.networkLogs': true
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}