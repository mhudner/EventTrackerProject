window.addEventListener('load', function(e) {
	console.log('document loaded');

	loadBooks();
	configureBookCreateForm();

});

let loadBooks = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				let books = JSON.parse(xhr.responseText);
				displayBooks(books);
			} else {
				console.error('Failed to fetch books');
			}
		}
	};
	xhr.send();
}

function displayBooks(books) {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headers = ['ID', 'Title', 'Author', 'Genre', 'Description', 'Publication Year', 'Read Status', 'Date Started', 'Date Finished', 'Rating'];
    headers.forEach(function(header) {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    books.forEach(function(book) {
        let tr = document.createElement('tr');
        Object.entries(book).forEach(function([key, value]) {
            let td = document.createElement('td');
            if (key === 'id') {
                td.textContent = value;
            } else {
                let input = document.createElement('input');
                input.type = 'text';
                input.value = value;
                td.appendChild(input);
            }
            tr.appendChild(td);
        }); 

        let actionsTd = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            console.log('Edit button clicked for book:', book);
            // Call a function to save the changes
            editBook(book);
        });
        actionsTd.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            console.log('Delete button clicked for book:', book);
            deleteBook(book.id);
        });
        actionsTd.appendChild(deleteButton);

        tr.appendChild(actionsTd);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    let existingTable = document.getElementById('bookTable');
    if (existingTable) {
        existingTable.parentNode.replaceChild(table, existingTable);
    } else {
        document.body.appendChild(table);
    }
}


function createBook(book) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/books');

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				location.reload();
				console.log('New book added');
			} else {
				displayError("Create book failed with status of: " + xhr.status);
			}
		}
	};

	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(book));
}

function configureBookCreateForm() {
	document.addBookForm.addBook.addEventListener('click', function(event) {
		event.preventDefault();

		let form = document.addBookForm;
		let newBook = {
			title: form.title.value,
			author: form.author.value,
			genre: form.genre.value,
			publicationYear: form.publicationYear.value,
			description: form.description.value,
			readStatus: form.readStatus.value,
			dateStarted: form.dateStarted.value,
			dateFinished: form.dateFinished.value,
			rating: form.rating.value,
		}

		createBook(newBook);
	});
}

function deleteBook(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/books/${id}`);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				location.reload();
				console.log('Book Deleted')
			} else {
				console.error('Failed to delete book');
			}
		}
	};
	xhr.send();
}

function editBook(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/books/${id}`);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				location.reload();
				console.log('Book edited');
			} else {
				displayError("Edit book failed with status of: " + xhr.status);
			}
		}
	};

	xhr.setRequestHeader("Content-type", "application/json");
	 xhr.send(JSON.stringify(book));
}

function deleteForm(id) {
	let formContainer = document.getElementById('editFormContainer');
	if (formContainer) {
		formContainer.innerHTML = '';
	}
}

