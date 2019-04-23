//const config = require('config');
exports.config = {
    path: '/',
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'MicrosoftEdge'
    }],
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