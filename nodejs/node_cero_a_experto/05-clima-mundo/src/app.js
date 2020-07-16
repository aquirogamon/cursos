const argv = require('./config/yargs.js').yargs;
const axios = require('./config/axios.js');

lugar = argv.ciudad;

axios.getClima(-84.11829, 40.72180).then(console.log).catch(console.log);


const getInfo = async(ciudadInfo) => {
    try {
        const { lugar, longitud, latitud } = await axios.getLugarLatLong(ciudadInfo);
        const temperatura = await axios.getClima(longitud, latitud);
        return `El clima del Lugar ${lugar} es de ${temperatura}`;
    } catch (error) {
        return `No se encontraron datos en la ciudad ${lugar}`;
    }
};

getInfo(lugar).then(console.log)
    .catch(console.log);