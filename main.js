/*1-Crea una funzione che converte tutte le proprietà di tipo 'number' all'interno di un oggetto in stringhe (comprese le proprietà annidate).

2-Crea un calcolatore di fattoriale (5 fattoriale = 5x4x3x2x1). L'utente deve poter inserire un numero, e al click di un bottone calcola, stampare il risultato del fattoriale di quel numero (è una funzione ricorsiva).

3-Crea una funzione che dato un oggetto, stampa sul documento HTML il diagramma ad albero dell'oggetto usando i tag <ul> per gli oggetti e i tag <ol> per gli array. Esempio:
const italy = {
	nome: 'Repubblica Italiana',
	bandiera: {
		stile: 'verticale'
		colori: ['rosso', 'verde', 'bianco'],
		forma: 'rettangolo',
	},
	currency: 'euro',
    	popolazione: 50000000,
}

Risultato:
<ul>
        <li>nome: Repubblica Italiana</li>
        <li>
            bandiera:
            <ul>
                <li>stile: verticale</li>
                <li>
                    colori: 
                    <ol>
                        <li>rosso</li>
                        <li>verde</li>
                        <li>bianco</li>
                    </ol>
                </li>
                <li>forma: rettangolo</li>
            </ul>
        </li>
        <li>currency: euro</li>
        <li>popolazione: 50000000</li>
    </ul> */

/*1-Crea una funzione che converte tutte le proprietà di tipo 'number' all'interno di un oggetto in stringhe (comprese le proprietà annidate).*/

let interNazionale = {
  attaccanti: 3,
  mediani: 5,
  difensori: {
    pavard: 28,
    darmian: 36,
    bastoni: 99,
  },
  portiere: 1,
};

const convertitoreStringhe = (obj) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      convertitoreStringhe(obj[key]);
    }
  }
};

convertitoreStringhe(interNazionale);
console.log(interNazionale);
