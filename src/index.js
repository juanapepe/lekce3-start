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

let knihovna = new Library();
knihovna.addBook(new Book('Wilbur Smith', 'Řeka bohů 1', 1980));
knihovna.addBook(new Book('Wilbur Smith', 'Řeka bohů 2', 1980));
knihovna.listAllBooks();
 
knihovna.startReadingNextBook();
knihovna.listAllBooks();