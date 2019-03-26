export default class Library {

    constructor() {
        this.bookList = []; //pole knih, na zacatku prazdne
        this.lastBook = null;
        this.currentBook = null;
        this.nextBook = null; //prvni neprectena kniha v seznamu
        this.unreadBooks = 0;
    }

    addBook(book) { // vymyslet metodu 
        this.bookList.push(book);

        if (!book.isRead) {
            this.unreadBooks++;
            if (this.nextBook === null) {
                this.nextBook = book;
            }
        }
        /*
        - pridat knihu do pole
        - pokud je kniha neprectena, zvetsi pocet neprectenych
        - pokud je neprectena a neni zadna dalsi kniha, udelej z ni dalsi knihu       
        */  
    }        
    
    listAllBooks() { // vypsat knihy
        console.table(this.bookList);
        console.log(this.currentBook);
        console.log(this.nextBook);
    }

    /*vezmi v knihovne knihu a udelej z nich aktualne ctenou knihu */
    startReadingNextBook() {

        if (this.nextBook !== null) {
            this.currentBook = this.nextBook;
            this.nextBook = null; //porad by tam byla posledni kniha kdyby jsme to neudelali

            for (let book of this.bookList) {
                if (!book.isRead && book !== this.currentBook) {
                    this.nextBook = book; 
                    //vzdy to bude posledni kniha v seznamu - bude vzdy pokracovat, takze kdyz ji najdeme tak potrebujeme brake
                    break;
                }
            }

            /*for (let i = 0; this.bookList.length, i++) {
                this.bookList[i]
            }*/
        }
        /*
        mame dalsi knihu na cteni?
        ano --> 
         - zapis ji do aktualne ctene knihy
         - do pristi knihy dej prvni neprectenou, ktera neni ta aktualni
         
         */

    }
}