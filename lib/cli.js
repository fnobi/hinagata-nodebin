(function () {
    var optimist = require('optimist');
    var colors = require('colors');
    
    var HinagataNodebin = require(__dirname + '/HinagataNodebin');

    var argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

    var hinagataNodebin = new HinagataNodebin();

    hinagataNodebin.on('end', function () {
        console.log('[done]'.green);
    });
    
    hinagataNodebin.on('error', function (err) {
        console.error('[error]'.red, err);
    });

    hinagataNodebin.start();
})();
