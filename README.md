# lodjs
Semplice helper per recuperare le variabili censuarie da http://datiopen.istat.it/variabiliCensuarieCOM.php

## Utilizzo
Dipendenze : `isomorphic-fetch`

### Livello aggregazione dati :   
0 -> Sezioni di censimento  
1 -> Aree di censimento  
2 -> Località  
3 -> Aree subcomunali  

### Variabili censuarie   
0 -> Popolazione residente  
1 -> Popolazine straniera  
2 -> Famiglie  
3 -> Grado di istruzione  
4 -> Condizione professionale  
5 -> Pendolarismo  
6 -> Alloggi  
7 -> Edifici  

```
const {call} = require('./lodjs');
const cfg = {
    livello_aggregazione_dati : 2,
    variabili_censuarie : 1,
    location : "Roma"
}
let data = call(cfg,(result)=>{
    console.log(result)
})

```