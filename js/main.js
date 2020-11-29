import { skaiciai } from './data/skaiciai.js';
import { skaiciai2 } from './data/skaiciai2.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';
import { atsPrint } from './components/atsPrint/atsPrint.js';

const ats = vidurkis(skaiciai);
const ats2 = vidurkis(skaiciai2);

const rez1DOM = document.querySelector('#rez1');
const rez2DOM = document.querySelector('#rez2');

rez1DOM.innerText = atsPrint(skaiciai, ats);
rez2DOM.innerText = atsPrint(skaiciai2, ats2);