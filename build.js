
var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: '{./app/app/**/**,package.json,./node_modules/colors/**/**,./node_modules/app-module-path/**/**,./src/**/**}', // '{./app/dist/**/**,package.json,./node_modules/**/**,./src/**/**}' use the glob format
//    platforms: ['osx32', 'osx64', 'win32', 'win64','linux32','linux64'],
    platforms: ['linux32','linux64'],
    version: '0.12.3'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
