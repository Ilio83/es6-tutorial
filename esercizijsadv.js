utente = {
    nome:'Ilio',
    cognome:'Tomeo',
    id: function() {
        console.log("ciao" + " " + this.nome + " " + this.cognome);

var self = this;

var altronome = function() {
   this.nome = 'Marco';
   return self.nome + 'secondo nome'
}
console.log(altronome());
    }
}

utente.id();

/////


var uno = 1
var due = 2
a()
function a() {
var uno = 5
let ciao = 'ciaone';
console.log(ciao);
}
console.log(uno+due);

//////

//const soprannome = ssp
//var secondosoprannome = soprannome//




