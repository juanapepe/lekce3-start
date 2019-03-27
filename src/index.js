/*import Animal from './animal';
import Dog from './dog';
import Person from './person';

let zvire = new Animal('Bob', 20);
zvire.run();

let alik = new Dog('Alík', 10, 'Haf, haf, haf');
alik.run();
alik.bark();

let baryk = new Dog ('Baryk', 15, 'woof');
baryk.run();
baryk. bark();

let osoba = new Person('Jana', 'Nováková');

osoba.fullName = 'Jára Cimrman';
osoba.name = 'Klára';
console.log(osoba.fullName);*/

/*
Třída knihovna
- seznam knih (pole)
- poslední přečtená kniha
- aktuálně čtená kniha
- další kniha na přečtení
- počet nepřečtených knih

+ přidat knihu
+ vypsat knihy
+ přečíst aktuální knihu (označit jako přečtenou) - bude DÚ



Třída kniha
- autor
- název
- rok vydání
- přečtená

*/

import Book from './book';
import Library  from './library';

/*let kniha = new Book('Wilbur Smith', 'Řeka bohů', 1980);
kniha.read();*/

/*let knihovna = new Library();
knihovna.addBook(new Book('Wilbur Smith', 'Řeka bohů 1', 1980));
knihovna.addBook(new Book('Wilbur Smith', 'Řeka bohů 2', 1980));
knihovna.listAllBooks();
 
knihovna.startReadingNextBook();
knihovna.listAllBooks();*/

/*fetch('https://swapi.co/api/people/1/').then(
  response => {
    console.log(response);
  }
);*/

console.log('hahaha');

let slib = fetch('https://swapi.co/api/people/1/'); // ulozi promise - ze js da vedet az se provede
//then reakce na to ze se stane slib

// slib.then(function(vysledek){})
// fce ktera se ma vykonat kdyz se akce povede
// fce ktera se ma vykonat kdyz se akce nepovede
console.log(slib);

slib.then(vysledek => {
    if (vysledek.ok) {
    console.log(slib);
    console.log(vysledek);
} else {
    console.log('Vysledek neexistuje');
}
});

console.log('hahaha2');

slib.catch(chyba => {
    console.log(chyba);
})
// jiny zpusob zapisu
slib.catch(() => {
    console.log(chyba);
})

slib.then(response => {
    console.log('Odpoved prisla');
})
// jiny zpusob zapisu
slib.then(() => {
    console.log('Odpoved prisla');
})

// consumers - neco co konzumuje slib
// vysledek do promenne slib a muzeme pouzivat ale nejcasteji se to neuklada
fetch('https://swapi.co/api/people/1/').then(
  vysledek => {
      return vysledek.json(); //text(); // vysledek ve forme textu
    if (vysledek.ok) {
        console.log(slib);
        console.log(vysledek);
    } else {
        console.log('Vysledek neexistuje');
    }
  }
).then(obsah => {
    console.log(obsah.name); // zde mam data
})
.catch(() => {
    console.log(chyba); // toto proved kdyz dojde k chybe
});

// abych dostal data tak musim rict v jakem formatu data chci

// uvnitr json objectu je pole a tam vlastnost results
/*let lidi = osoby.results;
lidi.forEach(clovek => {
    console.log(clovek.name);
    
});*/

// https://home.openweathermap.org/api_keys
// konec videa pocasi