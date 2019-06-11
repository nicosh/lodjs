require('es6-promise').polyfill();
require('isomorphic-fetch');
let jsonData = require('./loc.json');
const {maps} = require('./map.js');

const filledMaps = (cfg) => maps(cfg.location)
const desiredMap = (cfg,filled) => filled[cfg.livello_aggregazione_dati][cfg.variabili_censuarie]
const totalLocPopulation = (cfg)=>{
    let currentLoc = cfg.location
    let total = false
    jsonData.forEach(el=>{ 
        if(el.FIELD6.toLowerCase() == currentLoc.toLowerCase() || el.FIELD7.toLowerCase() == currentLoc.toLowerCase()){
            total =  el.FIELD20
        }
    })
    return total
}
const getMap = (cfg) => {
    let tmpmap = filledMaps(cfg)
    let theMap = desiredMap(cfg,tmpmap)
    return theMap
}
const getUrl = (cfg) => {
    let locCode = getLocCode(cfg)
    if(!locCode){
        throw new Error("Località non valida");
    }
    let query = getMap(cfg)
    let format = cfg.format ? cfg.format : "json"
    return `http://datiopen.istat.it/sparql/oracle_${locCode}?query=${encodeURIComponent(query)}&format=${format}`
}
const beautifyResult = (obj)=>{
    let headers = obj.head.vars
    let payload = obj.results.bindings
    let data =  payload.map(element => {
        let tmp = {};
        headers.forEach(el=>{
        tmp[el] = element[el].value
        })
        return tmp
    })
    return data
}
const getLocCode = (cfg)=>{
    let currentLoc = cfg.location
    code = false
    jsonData.forEach(el=>{ 
        if(el.FIELD6.toLowerCase() == currentLoc.toLowerCase() || el.FIELD7.toLowerCase() == currentLoc.toLowerCase()){
            code =  el.FIELD1
        }
    })
    return code
}

const buildHeadAndPayload = (cfg,payload) =>{
    let tot = 0 
    payload.forEach(el=>{ 
        tot += Number(el.pop)
    })
    return {
        headers : {
            totale : tot,
            totale_residenti : Number(totalLocPopulation(cfg).split('.').join(""))
        },
        payload
    }
}
const call = (cfg,cb) =>{
    let endpoint = getUrl(cfg)
    fetch(endpoint).then(response => {
        response.json().then((data) =>{
           let cleanresult = beautifyResult(data)
           let totalPopulation = buildHeadAndPayload(cfg,cleanresult)
           cb(totalPopulation)
        } )
    })
} 

module.exports.getMap = getMap;  
module.exports.getUrl = getUrl;  
module.exports.call = call;  
