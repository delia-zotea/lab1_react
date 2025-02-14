import { adunare, scadere } from './mathUtils.js';

const numar1 = 10;
const numar2 = 5;

console.log(`Suma: ${adunare(numar1, numar2)}`);
console.log(`Diferența: ${scadere(numar1, numar2)}`);


import bunaDelia from '../salutari.js';
bunaDelia();


import * as dateUtilizator from '.dateUtilizator.js';

console.log(dateUtilizator.nume);  
console.log(dateUtilizator.varsta);  
dateUtilizator.afiseazaUtilizator();  
