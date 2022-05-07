const axios = require('axios');

const fs = require('fs').promises;




axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response)=>{
    
    var data = response.data.bpi

    var data = [

        `${data.USD.code} ` + `${data.USD.rate}` + `${data.USD.description}\n`,

        `${data.GBP.code}` + `${data.GBP.rate}` + `${data.GBP.description}\n`,

        `${data.EUR.code}` + `${data.EUR.rate}` + `${data.EUR.description}\n`,

    ]

    return fs.writeFile('BtcList.csv', data); 
    }) 
    .then(() => { 
        console.log('Archivos descargados exitosamente'); 
})
    