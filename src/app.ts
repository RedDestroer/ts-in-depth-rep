import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { ReferenceItem, UnversityLabrarian, Shelf } from './classes';
import RefBook from './classes/encyclopedia';
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/utility-functions';
import Encyclopedia from './classes/encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// TASK 01
// logFirstAvailable(getAllBooks());

// TASK 02
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// TASK 03
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// console.log(getBookById(2));

// TASK 04
// const myId = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerId;

// console.log(idGenerator('Boris', 20));

// TASK 05
// createCustomer('Ann');
// createCustomer('Boris', 20);
// createCustomer('Clara', 45, 'Moskow');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// TASK 06
// const titles = checkoutBooks('Ann', 1, 2, 4);
// console.log(titles);

// const checkOutBooks = getTitles(true);
// console.log(checkOutBooks);

// TASK 07
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Demaged: ${reason}`)
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// TASK 08
// const logDamage: DamageLogger = (reason: string) => console.log(`Demaged: ${reason}`);

// logDamage('missing back cover');

// Task 09
// const favoriteAuthor: Author = {
//   name: 'Ann',
//   email: 'a@a.com',
//   numBooksPublished: 10
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'b@b.com',
//   department: 'Classical Literature',
//   assistCustomer: (custName: string) => console.log(`Assist ${custName}`)
// };

// TASK 10

// const favoriteLibrarian: Librarian = new UnversityLabrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');

// TASK 11

// const ref = new RefernceItem('Title', 2019);
// console.log(ref);

// ref.printItem();
// ref.publisher = 'Ann';
// console.log(ref.publisher);

// TASK 12

// const refBook = new Encyclopedia('Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();

// TASK 13

// const refBook = new Encyclopedia('Title', 2019, 10);
// // console.log(refBook);
// refBook.printCitation();

// TASK 15
// const logDamage: Logger = (reason: string) => console.log(`Demaged: ${reason}`);

// logDamage('missing back cover');

// TASK 16

// const refBook = new RefBook('Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();

// TASK 18

// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// let result: Book[] | number[] = purge(inventory);
// console.log(result);

// result = purge([1, 2, 3, 4, 5]);
// console.log(result);

// Task 19

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Magazine[] = [
//   {
//     title: 'Programming Language Monthly',
//     publisher: 'Code Mags'
//   },
//   {
//     title: 'Literary Fiction Quarterly',
//     publisher: 'College Press'
//   },
//   {
//     title: 'Five Points',
//     publisher: 'GSU'
//   }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// TASK 20

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// TASK 22

// const fLabrarian = new UnversityLabrarian();
// console.log(fLabrarian);

// fLabrarian.name = 'Anna';
// fLabrarian['printLibrarian']();

// TASK 23

// const fLib = new UnversityLabrarian();
// fLib.assistFaculty = null;
// fLib.teachComunity = () => console.log('123');

// TASK 24

// const refBook = new Encyclopedia('Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();

// TASK 25

// const fLabrarian = new UnversityLabrarian();

// fLabrarian.name = 'Anna';
// fLabrarian.assistCustomer('Boris');

// TASK 26

// const fLabrarian = new UnversityLabrarian();

// fLabrarian.name = 'Anna';
// console.log(fLabrarian.name);

// TASK 27

// const refBook = new Encyclopedia('Title', 2019, 10);
// refBook.copies = 10;
// console.log(refBook.copies);
// refBook.copies = -10;
// console.log(refBook.copies);

// TASK 28

// console.log('Start searching...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish searching');

// TASK 29

// console.log('Start searching...');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
//   console.log(`Found titles: ${titles}`);

//   return Promise.resolve(titles.length);
// })
// .then(numOfTitles => console.log(`NumOfTitles: ${numOfTitles}`))
// .catch(reason => console.log(reason));
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish searching');

// TASK 30

// console.log('Beginning search...');
// logSearchResults(Category.JavaScript)
//   .catch(reason => console.log(reason));
// console.log('Search submitted...');