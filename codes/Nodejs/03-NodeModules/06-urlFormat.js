const { urlFotmat } = require('../helper/UtilHelper');

const url1 = urlFotmat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: 'somepath'
});
console.log(`url1: ${url1}`); // https://example.com/somepath