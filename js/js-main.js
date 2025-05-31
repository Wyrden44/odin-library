const library = [];

const tableBody = document.querySelector("tbody");
const BOOK_PARAMETERS = 4;

const dialogButton = document.querySelector("#add-book-button");
const submitDialogButton = document.querySelector("#submit-dialog");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBook(title, author, pages, hasRead) {
    let book = new Book(title, author, pages, hasRead);
    library.push(book);

    addBookToTable(book);
}

function addBookToTable(book) {
    let row = tableBody.insertRow();
    
    for (let key in book) {
        if (book.hasOwnProperty(key)) {
            let cell = row.insertCell();
            // Adjust value of the "read" property to not display true/false
            // but rather a better representation as an emoji
            if (typeof(book[key]) !== "boolean") {
                cell.textContent = book[key];
            }
            else {
                cell.textContent = book[key] ? "✓" : "✕";
            }
        }
    }
}

dialogButton.addEventListener("click", (e) => {
    dialog.showModal();
});

submitDialogButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let bookData = [];
    const formData = new FormData(form);
    for (let pair of formData.entries()) {
        bookData.push(pair[1]);
        console.log(pair, pair[1]);
    }
    console.log(bookData)
    // if read was not checked it will not be returned to FormData
    // therefore, we need to check its absence and add it
    if (bookData.length < BOOK_PARAMETERS)
        bookData.push(false);
    else
        bookData[3] = true;

    addBook(bookData[0], bookData[1], bookData[2], bookData[3]);

    dialog.close();
});

addBook("Harry Potter", "J.K. Rowling", 354, true);
addBook("Harry Potter", "J.K. Rowling", 354, true);
addBook("Harry Potter", "J.K. Rowling", 354, true);