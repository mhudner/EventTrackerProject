window.addEventListener('load', function(e) {
	console.log('document loaded');
	loadBooks();

	document.body.style.backgroundColor = "#76D7C4";

});

let loadBooks = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books', true);
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
				input.disabled = true;
				td.appendChild(input);
			}
			tr.appendChild(td);
		});

		let data = document.createElement('td');

		let editButton = document.createElement('button');
		editButton.textContent = 'Edit';
		editButton.addEventListener('click', function() {
			enableEditing(tr);
		});
		data.appendChild(editButton);

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

	let existingTable = document.getElementById('bookList');
	if (existingTable) {
		existingTable.parentNode.replaceChild(table, existingTable);
	} else {
		document.body.appendChild(table);
	}
}

function enableEditing(book) {
	console.log(book);
	let inputs = book.querySelectorAll('input[type="text"]');
	inputs.forEach(function(input) {
		input.disabled = false;
	});

	let saveButton = document.createElement('button');
	saveButton.textContent = 'Save';
	saveButton.addEventListener('click', function() {
		saveChanges(book);
		console.log(book);
	});

	let data = book.lastElementChild;
	data.innerHTML = '';
	data.appendChild(saveButton);
}

function saveChanges(book) {

	let inputs = book.querySelectorAll('input[type="text"]');
	let updatedBook = {};

	inputs.forEach(input => {
		let key = input.parentNode.parentNode.firstChild.textContent.trim().toLowerCase().replace(' ', '');
		updatedBook[key] = input.value;
	});



	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `/api/books/${id}`, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('Book details updated successfully');
			displayBooks()
		} else {
			console.error('Failed to update book details:', xhr.status, xhr.responseText);
		}
	};
	xhr.send(JSON.stringify(updatedBook));
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

