/**
 * Sýnilausn á verkefni 7 í vef1 2025.
 *
 * Notar jsdoc fyrir skjölun og týpur.
 * Hægt að kveikja á `Check JS` og `Strict Null Checks` í VSCode til að fá
 * ábendingar um hvar hlutir geti bilað.
 *
 * Munið að þetta verkefni skal skrifað af ykkur án hjálpar mállíkans.
 * Agents, models and other LLMs or AI tools must not be used to implement this
 * assignment. They can be used to help with understanding concepts and if that
 * is done, include a link to the chat via sharing.
 */

/** @typedef {Object} TodoItem
 * @property {string} text - Texti verkefnis.
 * @property {boolean} finished - Hvort verkefni sé klárað eða ekki.
 */

/** Verkefnalistinn okkar, hann mun innihalda hluti (objects) af týpu
 * `TodoItem`.
 * Með því að skilgreina týpuna og kveikja á `Check JS` í VSCode fáum við villu
 * ef við reynum að setja eitthvað annað en `TodoItem` í listann.
 * @type {TodoItem[]}
 */
const todoList = [
  // Hér er hægt að fjarlægja komment til að hafa nokkur verkefni í byrjun
  // Ekki skila með þessu inni.
  // { text: "Læra CSS", finished: true },
  // { text: "Læra JavaScript", finished: false },
  // { text: "Búa til verkefnalista", finished: false },
];

//------------------------------------------------------------------------------
// Föll sem vinna með verkefnalistann

/**
 * Búa til verkefni og bæta því aftast í verkefnalistann.
 * @param {unknown} input - Texti verkefnis, ætti að vera strengur.
 * @returns {number} Ný stærð verkefnalistans.
 */
function createTodoItem(input) {
  if (typeof input !== 'string') { //segir semsagrt að ef inputtið sé ekki string þá lætur console vita
   console.log('Þetta er ólöglegt inntak!');
   return;
  }

const nýttVerkefni = {text: input, finished: false} // Þetta býr til verkefni og bætir svo við í (todoList) listanum
const verkefnaFjöldi = todoList.push(nýttVerkefni)
return verkefnaFjöldi;
}

/**
 * Birtir verkefnalistann í console.
 */
function list() {
  if (todoList.length === 0) { // Þetta lætur mann vita ef það er engin verkefni í listanum 
    console.log('Engin verkefni í listanum');
    return;
  }

  for (let i = 0; i < todoList.length; i++) { // Býrð til loop sem hækkar töluna fyrir "i" um eitt svo lengi sem að hún er minni en todolistanum. (fer í gegnum gegnum listanum)
    const verkefni = todoList[i];
    let status;

    if (verkefni.finished === true) {
      status = '[x]';
    } else {
      status = '[ ]';
    }

    console.log(status + ' ' + verkefni.text);
  }
}

/**
 * Breytir stöðu verkefnis í „klárað“ eða „óklárað“.
 * @param {unknown} index - Index verkefnis í lista, verður að vera á bilinu
 *   [0, todoList.length], ætti að vera tala
 * @returns {boolean} - `true` ef breyting tókst, annars `false`.
 */
function toggleFinished(index) {
  if (typeof index !== 'number') { // tékkar hvort það sé tala eða ekki
    console.log('Þetta er ekki tala')
    return;
  }

  if (index < 0 || index >= todoList.length) {  // tékkar hvort talan í listanum sé til
    console.log('Þetta númer er ekki til');
    return;
  }

  let verkefni = todoList[index];
  
  if (verkefni.finished === true) {  // Segir þér hvort það er búin að klára verkefnið eða ekki
    verkefni.finished = false;
    console.log('Verkefnið ' + verkefni.text + ' er ólokið');
  } else {
    verkefni.finished = true;
    console.log('Verkefnið ' + verkefni.text + ' er lokið');
  }
}
  

/**
 * Skrifar út stöðu verkefnalistans í console.
 */
function stats() {
  if (todoList.length === 0) {  // Þetta telur hvað það eru mörg lokið, ólokið og samtals verkefni
    console.log('Engin verkefni í listanum');
    return;
  }

  let lokið = 0;
  let ólokið = 0;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].finished === true) {
      lokið++;
    } else {
      ólokið++;
    }
   }

  console.log('Lokið verkefni: ' + lokið);
  console.log('Ólokið verkefni: ' + ólokið);
  console.log('Samtals: ' + todoList.length);
}

/**
 * Tæma verkefnalistan.
 */
function clear() {
    if (todoList.length === 0) {
    console.log('Listinn er tómur það er ekkert tils að eyða');
    return;
  }

  const staðfest = confirm('Viltu eyða öllum kláruðum verkefnum?');
  if (!staðfest) {
    console.log('Hætt við');
    return;
  }

  for (let i = todoList.length - 1; i >= 0; i--) { // Fer afturábak í gegnum listann og eyðir öllum kláruðum verkefnum
    if (todoList[i].finished === true) {
      todoList.splice(i, 1);
    }
  }

  console.log('Kláruð verkefni hafa verið eytt');
}

/**
 * Leiðbeint ferli til að bæta verkefnum við, sýnir síðan lista og stöðu.
 */
function start() {
  while (true) {
    let input = prompt('Sláðu inn nýtt verkefni (ýttu svo á cancel til að hætta): ');

    if (input === null) {
      // Ef maður ýtir á cancel
      console.log('Hættur við');
      list();
      stats();
      break;
    }

    if (input.trim() === '') {
      alert('Verkefni verður að hafa texta!');
      continue;
    }

    createTodoItem(input);
  }
}
