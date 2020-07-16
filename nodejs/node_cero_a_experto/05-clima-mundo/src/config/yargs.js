const yargs = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Dirección de la ciudad que quiere ver el clima',
        demand: true
    }
}).argv;

module.exports = {
    yargs
};