let books= [];


function addBook() {    
    const BookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = document.getElementById("pagesNumber").value;

    if(BookName && authorName && bookDescription && !isNaN(pagesNumber))
    {
        const book = {
            BookName: BookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }

    else
    {
        alert("Please fill all fields correctly.");
    }



}

function showbooks() {
    const booksDiv = books.map((book , index) =>`<h1>Kitap Numarası: ${index + 1}</h1>
        <p><strong>Kitap Adı: </strong>${book.BookName}</p>
        <p><strong>Yazar Adı:</strong> ${book.authorName}</p>
        <p><strong>Kitap Açıklaması:</strong> ${book.bookDescription}</p>
        <p><strong>Sayfa Sayısı:</strong> ${book.pagesNumber} sayfa</p>
        <button onclick="editbook(${index})">Düzenle</button>
        <button onclick="deletebook(${index})">Sil</button>`);
        
        document.getElementById("books").innerHTML = booksDiv.join("");
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.BookName;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Eski girişi kaldır
    showbooks(); // Listeyi yenile
  }

  function deletebook(index) {
    books.splice(index, 1); // Kitabı diziden kaldır
    showbooks(); // Listeyi güncelle
  }

  function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}