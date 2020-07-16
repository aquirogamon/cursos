const axios = require('axios');

const getLugarLatLong = async(lugar) => {

    ciudadUrl = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ciudadUrl}?json=1`
    });
    const dataLugar = await instance.get();
    if (dataLugar.data.longt === '0.00000' || dataLugar.data.latt === '0.00000') {
        throw new Error(`No se encontraron datos en la ciudad ${ciudadUrl}`);
    }
    const longitud = dataLugar.data.longt;
    const latitud = dataLugar.data.latt;
    return {
        lugar,
        longitud,
        latitud
    };
};


const getClima = async(lon, lat) => {

    const apikey = '0e329d82cb3c85b3c491ec018195e9a8';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getLugarLatLong,
    getClima
};