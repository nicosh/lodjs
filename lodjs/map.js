// we hardcode all the possibles combinations between livello aggregazione and variabili censuarie
// todo : generate the query dynamically 
const maps = (loc) => ({
    0: [
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?sesso ?Eta ?desc_o ?pop  
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClassiEta16Categorie ?CE16Categorie . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE16Categorie rdfs:comment ?Eta . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?sesso ?Eta ?provenienza ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haStranieriApolidiResidentiItalia ?pop . 
            ?o cen:haClassiEta3Cat ?CE3Categorie . 
            ?o cen:provieneDa ?PaesiProvenienza . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE3Categorie rdfs:comment ?Eta . 
            ?PaesiProvenienza rdfs:comment ?provenienza . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?provenienza)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?componenti ?condizGodimento ?desc_o ?numFamiglie ?numeroComponenti 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroFamiglie ?numFamiglie . 
            ?o cen:haComponenti ?Componenti6Cat . 
            ?o cen:haCondizioneGodimento ?CondizGodimento3Cat . 
            ?o rdfs:label ?desc_o . 
            ?Componenti6Cat rdfs:comment ?componenti . 
            ?CondizGodimento3Cat rdfs:comment ?condizGodimento . 
            OPTIONAL { ?o cen:haNumeroComponenti ?numeroComponenti .} 
            FILTER(lang(?componenti) ="it") 
            FILTER(lang(?condizGodimento) ="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?sesso ?Eta ?istruzione ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta6Anni ?CE6Anni . 
            ?o cen:haGradoIstruzione ?GradoIstruzione . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE6Anni rdfs:comment ?Eta . 
            ?GradoIstruzione rdfs:comment ?istruzione . 
            FILTER(lang(?Eta )="it") 
            FILTER(lang(?istruzione )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?sesso ?Eta ?forzaLavoro ?statoOccupazionale ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta15Anni ?CE15Anni . 
            ?o cen:haForzaLavoro ?ForzaLavoro2Cat . 
            ?o cen:haStatoOccupazionale ?StatoOccupazionale7Cat . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE15Anni rdfs:comment ?Eta . 
            ?ForzaLavoro2Cat rdfs:comment ?forzaLavoro . 
            ?StatoOccupazionale7Cat rdfs:comment ?statoOccupazionale . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?forzaLavoro)="it") 
            FILTER(lang(?statoOccupazionale )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?spostamenti ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haSpostamenti ?Spostamenti2Cat . 
            ?o rdfs:label ?desc_o . 
            ?Spostamenti2Cat rdfs:comment ?spostamenti . 
            FILTER(lang(?spostamenti )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?sezione ?superficie ?tipologia ?stato ?desc_o ?numAlloggi 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroAlloggi ?numAlloggi . 
            ?o cen:haTipoAlloggio ?TipoAlloggio . 
            ?o cen:haStatoOccupazione ?StatoOccupazione . 
            ?o rdfs:label ?desc_o . 
            ?TipoAlloggio rdfs:comment ?tipologia . 
            ?StatoOccupazione rdfs:comment ?stato . 
            OPTIONAL {?o cen:haSuperficie ?superficie .} 
            FILTER(lang(?tipologia)="it") 
            FILTER(lang(?stato)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com  ?sezione ?utilizzo ?materialeCostruzione ?periodoCostruzione ?statoConservazione ?piani ?interni ?desc_o ?numEdifici ?numInterni 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:sezione_di_COM ?entitaTerritoriale. 
            ?entitaTerritoriale rdfs:label ?sezione . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroEdifici ?numEdifici . 
            ?o cen:haTipoUtilizzo ?TipoUtilizzoEdifici . 
            ?o cen:haMaterialeCostruzione ?MatCostrEdifici . 
            ?o cen:haPeriodoCostruzione ?PeriodoCostrEdifici . 
            ?o cen:haPiani ?PianiEdifici . 
            ?o cen:haInterni ?InterniEdifici . 
            ?o cen:haStatoConservazione ?StatoCons . 
            ?o rdfs:label ?desc_o . 
            ?TipoUtilizzoEdifici rdfs:comment ?utilizzo . 
            ?MatCostrEdifici rdfs:comment ?materialeCostruzione . 
            ?PeriodoCostrEdifici rdfs:comment ?periodoCostruzione . 
            ?StatoCons rdfs:comment ?statoConservazione . 
            ?PianiEdifici rdfs:comment ?piani . 
            ?InterniEdifici rdfs:comment ?interni . 
            OPTIONAL {?o cen:haNumeroInterni ?numInterni .} 
            FILTER(lang(?utilizzo)="it") 
            FILTER(lang(?materialeCostruzione)="it")  
            FILTER(lang(?periodoCostruzione)="it")  
            FILTER(lang(?statoConservazione)="it")  
            FILTER(lang(?piani)="it")  
            FILTER(lang(?interni)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`
    ],
    1: [
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?sesso ?Eta ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClassiEta16Categorie ?CE16Categorie . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE16Categorie rdfs:comment ?Eta . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com  ?descareacensimento ?sesso ?Eta ?provenienza ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haStranieriApolidiResidentiItalia ?pop . 
            ?o cen:haClassiEta3Cat ?CE3Categorie . 
            ?o cen:provieneDa ?PaesiProvenienza . 
            ?o rdfs:label ?desc_o .?o cen:haSesso ?sesso . 
            ?CE3Categorie rdfs:comment ?Eta . 
            ?PaesiProvenienza rdfs:comment ?provenienza . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?provenienza)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?componenti ?condizGodimento ?desc_o ?numFamiglie ?numeroComponenti 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroFamiglie ?numFamiglie . 
            ?o cen:haComponenti ?Componenti6Cat . 
            ?o cen:haCondizioneGodimento ?CondizGodimento3Cat . 
            ?o rdfs:label ?desc_o . 
            ?Componenti6Cat rdfs:comment ?componenti . 
            ?CondizGodimento3Cat rdfs:comment ?condizGodimento . 
            OPTIONAL { ?o cen:haNumeroComponenti ?numeroComponenti .} 
            FILTER(lang(?componenti) ="it") 
            FILTER(lang(?condizGodimento) ="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?sesso ?Eta ?istruzione ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop .?o cen:haClasseEta6Anni ?CE6Anni . 
            ?o cen:haGradoIstruzione ?GradoIstruzione . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE6Anni rdfs:comment ?Eta . 
            ?GradoIstruzione rdfs:comment ?istruzione . 
            FILTER(lang(?Eta )="it") 
            FILTER(lang(?istruzione )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?sesso ?Eta ?forzaLavoro ?statoOccupazionale ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta15Anni ?CE15Anni . 
            ?o cen:haForzaLavoro ?ForzaLavoro2Cat . 
            ?o cen:haStatoOccupazionale ?StatoOccupazionale7Cat . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE15Anni rdfs:comment ?Eta . 
            ?ForzaLavoro2Cat rdfs:comment ?forzaLavoro . 
            ?StatoOccupazionale7Cat rdfs:comment ?statoOccupazionale . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?forzaLavoro)="it") 
            FILTER(lang(?statoOccupazionale )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?spostamenti ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haSpostamenti ?Spostamenti2Cat . 
            ?o rdfs:label ?desc_o . 
            ?Spostamenti2Cat rdfs:comment ?spostamenti . 
            FILTER(lang(?spostamenti )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?superficie ?tipologia ?stato ?desc_o ?numAlloggi 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroAlloggi ?numAlloggi . 
            ?o cen:haTipoAlloggio ?TipoAlloggio . 
            ?o cen:haStatoOccupazione ?StatoOccupazione . 
            ?o rdfs:label ?desc_o . 
            ?TipoAlloggio rdfs:comment ?tipologia . 
            ?StatoOccupazione rdfs:comment ?stato . 
            OPTIONAL {?o cen:haSuperficie ?superficie .} 
            FILTER(lang(?tipologia)="it") 
            FILTER(lang(?stato)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?descareacensimento ?utilizzo ?materialeCostruzione ?periodoCostruzione ?statoConservazione ?piani ?interni ?desc_o ?numEdifici ?numInterni 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:ace_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale rdfs:label ?descareacensimento . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroEdifici ?numEdifici . 
            ?o cen:haTipoUtilizzo ?TipoUtilizzoEdifici . 
            ?o cen:haMaterialeCostruzione ?MatCostrEdifici . 
            ?o cen:haPeriodoCostruzione ?PeriodoCostrEdifici . 
            ?o cen:haPiani ?PianiEdifici . 
            ?o cen:haInterni ?InterniEdifici . 
            ?o cen:haStatoConservazione ?StatoCons . 
            ?o rdfs:label ?desc_o . 
            ?TipoUtilizzoEdifici rdfs:comment ?utilizzo . 
            ?MatCostrEdifici rdfs:comment ?materialeCostruzione . 
            ?PeriodoCostrEdifici rdfs:comment ?periodoCostruzione . 
            ?StatoCons rdfs:comment ?statoConservazione . 
            ?PianiEdifici rdfs:comment ?piani . 
            ?InterniEdifici rdfs:comment ?interni . 
            OPTIONAL {?o cen:haNumeroInterni ?numInterni .} 
            FILTER(lang(?utilizzo)="it") 
            FILTER(lang(?materialeCostruzione)="it")  
            FILTER(lang(?periodoCostruzione)="it")  
            FILTER(lang(?statoConservazione)="it")  
            FILTER(lang(?piani)="it")  
            FILTER(lang(?interni)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`
    ],
    2: [
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?sesso ?Eta ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClassiEta16Categorie ?CE16Categorie . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE16Categorie rdfs:comment ?Eta . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
        `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?sesso ?Eta ?provenienza ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haStranieriApolidiResidentiItalia ?pop . 
            ?o cen:haClassiEta3Cat ?CE3Categorie . 
            ?o cen:provieneDa ?PaesiProvenienza . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE3Categorie rdfs:comment ?Eta . 
            ?PaesiProvenienza rdfs:comment ?provenienza . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?provenienza)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
        `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?componenti ?condizGodimento ?desc_o ?numFamiglie 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com . 
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroFamiglie ?numFamiglie . 
            ?o cen:haComponenti ?Componenti6Cat . 
            ?o cen:haCondizioneGodimento ?CondizGodimento3Cat . 
            ?o rdfs:label ?desc_o . 
            ?Componenti6Cat rdfs:comment ?componenti . 
            ?CondizGodimento3Cat rdfs:comment ?condizGodimento . 
            OPTIONAL { ?o cen:haNumeroComponenti ?numeroComponenti .} 
            FILTER(lang(?componenti) ="it") 
            FILTER(lang(?condizGodimento) ="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?sesso ?Eta ?istruzione ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta6Anni ?CE6Anni . 
            ?o cen:haGradoIstruzione ?GradoIstruzione . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE6Anni rdfs:comment ?Eta . 
            ?GradoIstruzione rdfs:comment ?istruzione . 
            FILTER(lang(?Eta )="it") 
            FILTER(lang(?istruzione )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?sesso ?Eta ?forzaLavoro ?statoOccupazionale ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta15Anni ?CE15Anni . 
            ?o cen:haForzaLavoro ?ForzaLavoro2Cat . 
            ?o cen:haStatoOccupazionale ?StatoOccupazionale7Cat . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE15Anni rdfs:comment ?Eta . 
            ?ForzaLavoro2Cat rdfs:comment ?forzaLavoro . 
            ?StatoOccupazionale7Cat rdfs:comment ?statoOccupazionale . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?forzaLavoro)="it") 
            FILTER(lang(?statoOccupazionale )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?spostamenti ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haSpostamenti ?Spostamenti2Cat . 
            ?o rdfs:label ?desc_o . 
            ?Spostamenti2Cat rdfs:comment ?spostamenti . 
            FILTER(lang(?spostamenti )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?superficie ?tipologia ?stato ?desc_o ?numAlloggi 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroAlloggi ?numAlloggi . 
            ?o cen:haTipoAlloggio ?TipoAlloggio . 
            ?o cen:haStatoOccupazione ?StatoOccupazione . 
            ?o rdfs:label ?desc_o . 
            ?TipoAlloggio rdfs:comment ?tipologia . 
            ?StatoOccupazione rdfs:comment ?stato . 
            OPTIONAL {?o cen:haSuperficie ?superficie .} 
            FILTER(lang(?tipologia)="it") 
            FILTER(lang(?stato)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomelocalita ?utilizzo ?materialeCostruzione ?periodoCostruzione ?statoConservazione ?piani ?interni ?desc_o ?numEdifici ?numInterni 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:localita_di_COM ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomelocalita . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroEdifici ?numEdifici . 
            ?o cen:haTipoUtilizzo ?TipoUtilizzoEdifici . 
            ?o cen:haMaterialeCostruzione ?MatCostrEdifici . 
            ?o cen:haPeriodoCostruzione ?PeriodoCostrEdifici . 
            ?o cen:haPiani ?PianiEdifici . 
            ?o cen:haInterni ?InterniEdifici . 
            ?o cen:haStatoConservazione ?StatoCons . 
            ?o rdfs:label ?desc_o . 
            ?TipoUtilizzoEdifici rdfs:comment ?utilizzo . 
            ?MatCostrEdifici rdfs:comment ?materialeCostruzione . 
            ?PeriodoCostrEdifici rdfs:comment ?periodoCostruzione . 
            ?StatoCons rdfs:comment ?statoConservazione . 
            ?PianiEdifici rdfs:comment ?piani . 
            ?InterniEdifici rdfs:comment ?interni . 
            OPTIONAL {?o cen:haNumeroInterni ?numInterni .} 
            FILTER(lang(?utilizzo)="it") 
            FILTER(lang(?materialeCostruzione)="it")  
            FILTER(lang(?periodoCostruzione)="it")  
            FILTER(lang(?statoConservazione)="it")  
            FILTER(lang(?piani)="it")  
            FILTER(lang(?interni)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`
    ],
    3: [
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?sesso ?Eta ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClassiEta16Categorie ?CE16Categorie . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE16Categorie rdfs:comment ?Eta . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
        `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?sesso ?Eta ?provenienza ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haStranieriApolidiResidentiItalia ?pop . 
            ?o cen:haClassiEta3Cat ?CE3Categorie . 
            ?o cen:provieneDa ?PaesiProvenienza . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE3Categorie rdfs:comment ?Eta . 
            ?PaesiProvenienza rdfs:comment ?provenienza . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?provenienza)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
        `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?componenti ?condizGodimento ?desc_o ?numFamiglie ?numeroComponenti 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroFamiglie ?numFamiglie . 
            ?o cen:haComponenti ?Componenti6Cat . 
            ?o cen:haCondizioneGodimento ?CondizGodimento3Cat . 
            ?o rdfs:label ?desc_o . 
            ?Componenti6Cat rdfs:comment ?componenti . 
            ?CondizGodimento3Cat rdfs:comment ?condizGodimento . 
            OPTIONAL { ?o cen:haNumeroComponenti ?numeroComponenti .} 
            FILTER(lang(?componenti) ="it") 
            FILTER(lang(?condizGodimento) ="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
        `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?sesso ?Eta ?istruzione ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta6Anni ?CE6Anni . 
            ?o cen:haGradoIstruzione ?GradoIstruzione . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE6Anni rdfs:comment ?Eta . 
            ?GradoIstruzione rdfs:comment ?istruzione . 
            FILTER(lang(?Eta )="it") 
            FILTER(lang(?istruzione )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?sesso ?Eta ?forzaLavoro ?statoOccupazionale ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haClasseEta15Anni ?CE15Anni . 
            ?o cen:haForzaLavoro ?ForzaLavoro2Cat . 
            ?o cen:haStatoOccupazionale ?StatoOccupazionale7Cat . 
            ?o rdfs:label ?desc_o . 
            ?o cen:haSesso ?sesso . 
            ?CE15Anni rdfs:comment ?Eta . 
            ?ForzaLavoro2Cat rdfs:comment ?forzaLavoro . 
            ?StatoOccupazionale7Cat rdfs:comment ?statoOccupazionale . 
            FILTER(lang(?Eta)="it") 
            FILTER(lang(?forzaLavoro)="it") 
            FILTER(lang(?statoOccupazionale )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?spostamenti ?desc_o ?pop 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haPopolazioneResidente ?pop . 
            ?o cen:haSpostamenti ?Spostamenti2Cat . 
            ?o rdfs:label ?desc_o . 
            ?Spostamenti2Cat rdfs:comment ?spostamenti . 
            FILTER(lang(?spostamenti )="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?superficie ?tipologia ?stato ?desc_o ?numAlloggi 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroAlloggi ?numAlloggi . 
            ?o cen:haTipoAlloggio ?TipoAlloggio . 
            ?o cen:haStatoOccupazione ?StatoOccupazione . 
            ?o rdfs:label ?desc_o . 
            ?TipoAlloggio rdfs:comment ?tipologia . 
            ?StatoOccupazione rdfs:comment ?stato . 
            OPTIONAL {?o cen:haSuperficie ?superficie .} 
            FILTER(lang(?tipologia)="it") 
            FILTER(lang(?stato)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`,
         `PREFIX ORACLE_SEM_HT_NS: <http://oracle.com/semtech#ALL_LINK_HASH>
            PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=600,allow_dup=t,strict_default=f>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ter: <http://datiopen.istat.it/odi/ontologia/territorio/>
            PREFIX cen: <http://datiopen.istat.it/odi/ontologia/censimento/>
            PREFIX qb: <http://purl.org/linked-data/cube#>
            SELECT  ?nomecom ?cod_istat_com ?nomeasc ?utilizzo ?materialeCostruzione ?periodoCostruzione ?statoConservazione ?piani ?interni ?desc_o ?numEdifici ?numInterni 
            WHERE {
            ?comune ter:haNome ?nomecom . 
            ?comune ter:haCodIstat ?cod_istat_com .  
            ?comune ter:asc_di_CDASC ?entitaTerritoriale . 
            ?entitaTerritoriale ter:haNome ?nomeasc . 
            ?entitaTerritoriale ter:haIndicatoreCensimento ?o . 
            ?o cen:haNumeroEdifici ?numEdifici . 
            ?o cen:haTipoUtilizzo ?TipoUtilizzoEdifici . 
            ?o cen:haMaterialeCostruzione ?MatCostrEdifici . 
            ?o cen:haPeriodoCostruzione ?PeriodoCostrEdifici . 
            ?o cen:haPiani ?PianiEdifici . 
            ?o cen:haInterni ?InterniEdifici . 
            ?o cen:haStatoConservazione ?StatoCons . 
            ?o rdfs:label ?desc_o . 
            ?TipoUtilizzoEdifici rdfs:comment ?utilizzo . 
            ?MatCostrEdifici rdfs:comment ?materialeCostruzione . 
            ?PeriodoCostrEdifici rdfs:comment ?periodoCostruzione . 
            ?StatoCons rdfs:comment ?statoConservazione . 
            ?PianiEdifici rdfs:comment ?piani . 
            ?InterniEdifici rdfs:comment ?interni . 
            OPTIONAL {?o cen:haNumeroInterni ?numInterni .} 
            FILTER(lang(?utilizzo)="it") 
            FILTER(lang(?materialeCostruzione)="it")  
            FILTER(lang(?periodoCostruzione)="it")  
            FILTER(lang(?statoConservazione)="it")  
            FILTER(lang(?piani)="it")  
            FILTER(lang(?interni)="it") 
            FILTER(lang(?desc_o)="it") 
            FILTER(?nomecom = "${loc}"@it) 
            }`
    ]
})

module.exports.maps = maps;  
