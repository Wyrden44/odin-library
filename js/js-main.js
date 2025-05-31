const library = [];

const tableBody = document.querySelector("tbody");
const BOOK_PARAMETERS = 4;

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBook(title, author, pages, hasRead) {
    library.push(
        new Book(
            title,
            author,
            pages,
            hasRead
        )
    );
}

function addBookToTable(book) {
    let row = tableBody.insertRow();
    
    for (let key in book) {
        if (book.hasOwnProperty(key)) {
            let cell = row.insertCell();
            cell.textContent = book[key];
        }
    }
}

function displayBooks() {
    for (let book of library) {
        addBookToTable(book);
    }
}

addBook("Harry Potter", "J.K. Rowling", 354, true);
addBook("Harry Potter", "J.K. Rowling", 354, true);
addBook("Harry Potter", "J.K. Rowling", 354, true);


displayBooks();