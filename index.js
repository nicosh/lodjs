const {call} = require('./lodjs');
const cfg = {
    livello_aggregazione_dati : 2,
    variabili_censuarie : 1,
    location : "Roma"
}
let data = call(cfg,(result)=>{
    console.log(result)
})
