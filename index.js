const {call, getUrl} = require('./lodjs');
// esempio :  Popolazione straniera suddivisa per località nel comune di roma
const cfg = {
    livello_aggregazione_dati : 2,
    variabili_censuarie : 1,
    location : "Roma"
}
// built in functionality, fetch the data and run a callback
let data = call(cfg,(result)=>{
    console.log(result.headers) // totale residenti e totale query => { totale: 1090239, totale_residenti: 2617175 }
    //console.log(result.payload) // elenco risultati query per livello aggregrazione
})

// custom fetching
let endpoint = getUrl(cfg)
fetch(endpoint).then(response => {
    response.json().then((data) =>{
        console.log(data)
        // do whatever you want with the raw data
    } )
})
