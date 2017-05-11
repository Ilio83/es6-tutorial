var a = 10;
var c =2;
b(); //hoisting 
function b() {
  var a =100;
  if (a === 100) {
    const ciccio ="ciao"; //const rende la variabile non modificabile, assegna un valore unico alla variabile altrimenti non modificabile
      console.log(ciccio);
  }
  console.log(a * c);
}



person = {
  name: "Adriana",
  surname: "Lima",
  greet: function () {
    console.log("ciao" + this.name + " " + this.surname);

    var self = this;

    var altraFunc = function () {
      this.surname = "Emily"; //senza questo stamperebbe undefined!!!//
      return self.surname + "!!!" //abbiamo corretto return this.surname + "!!!" sostituendolo con self. in questo modo stampiano Lima e non Emily, cosi richiamiamo la variabile self evitando confusioni, questo referenziando al suo interno l'oggetto stesso su cui stiamo girando.//
    }
 
//si loggano dunque entrambe le variabili = function, e refenziando l'oggetto interno a se stesso evitiamo problemi di sovrascritture e confusioni che altrimenti ci sarebbero, tipo in questo caso il surname Emily che sostituirebbe Lima""

    console.log(altraFunc());

  }
}

person.greet();

//this richiama l'elemento della funzione, in altre parole logga i parametri dell'oggetto person nel momento in cui all'interno dell'oggetto istanziamo una funzione.//

function salutatore(preambolo) {

    return function (nome) {
        console.log(preambolo + "," + nome + "!")
    }
}

var salutatoreEducato = salutatore("mmmoccammammt");

salutatoreEducato("Ilio");

class Casa {
  constructor(stanze, mq, categoria){
    this.stanze = stanze;
    this.mq= mq;
    this.categoria = categoria;
    this.prezzomq = 0;
  }
  setPrezzomq(prezzomq) {
    this.prezzomq = prezzomq;
  }
   calcolaPrezzo() {
     return this.prezzomq*this.mq;
   }
}

let topaia = new Casa (1,10, 'z');
let attico = new Casa (12, 450, 'A++++');

topaia.setPrezzomq(1);
attico.setPrezzomq(100);

console.log(topaia.calcolaPrezzo());
console.log(attico.calcolaPrezzo());

class Ufficio extends Casa {

	constructor(stanze, mq, tipoAgi) {
		super(stanze, mq, "UFF");
		this.tipoAgi = tipoAgi;
	}

	daiAgibilita(tipoAgi) {
		this.tipoAgi = tipoAgi;
	}
	stampa() {
		return "Ufficio con "+this.stanze+" stanze e agibilità "+this.tipoAgi;
	}

}

var studioLegale = new Ufficio(4, 130, 'Commerciale');
console.log(studioLegale.stampa());
console.log(atticoFichissimo.stampa());






