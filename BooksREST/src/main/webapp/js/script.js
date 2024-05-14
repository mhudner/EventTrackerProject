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
		Object.values(book).forEach(function(value) {
			let td = document.createElement('td');
			td.textContent = value;
			tr.appendChild(td);
		});

		let actionsTd = document.createElement('td');
		let editButton = document.createElement('button');
		editButton.textContent = 'Edit';
		editButton.addEventListener('click', function() {
			console.log('Edit button clicked for book:', book);
			displayEditForm(book.id);
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
	displayBooks(id);

}

function displayEditForm() {
	

	  let form = document.createElement('form');
    form.name = 'editBookForm';


	let titleLabel = document.createElement('label');
	titleLabel.textContent = 'Title:';
	let titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.name = 'title';
	titleInput.value = book.title;
	form.appendChild(titleLabel);
	form.appendChild(titleInput);
	form.appendChild(document.createElement('br'));

	let genreLabel = document.createElement('label');
	genreLabel.textContent = 'Genre:';
	let genreInput = document.createElement('input');
	genreInput.type = 'text';
	genreInput.name = 'genre';
	genreInput.value = book.title;
	form.appendChild(genreLabel);
	form.appendChild(genreInput);
	form.appendChild(document.createElement('br'));

	let publicationYearLabel = document.createElement('label');
	publicationYearLabel.textContent = 'Publication Year:';
	let publicationYearInput = document.createElement('input');
	publicationYearInput.type = 'text';
	publicationYearInput.name = 'publicationYear';
	publicationYearInput.value = book.title;
	form.appendChild(publicationYearLabel);
	form.appendChild(publicationYearInput);
	form.appendChild(document.createElement('br'));

	let descriptionLabel = document.createElement('label');
	descriptionLabel.textContent = 'Description:';
	let descriptionInput = document.createElement('input');
	descriptionInput.type = 'text';
	descriptionInput.name = 'description';
	descriptionInput.value = book.title;
	form.appendChild(descriptionLabel);
	form.appendChild(descriptionInput);
	form.appendChild(document.createElement('br'));

	let readStatusLabel = document.createElement('label');
	readStatusLabel.textContent = 'Read Status:';
	let readStatusInput = document.createElement('input');
	readStatusInput.type = 'text';
	readStatusInput.name = 'readStatus';
	readStatusInput.value = book.title;
	form.appendChild(readStatusLabel);
	form.appendChild(readStatusInput);
	form.appendChild(document.createElement('br'));

	let dateStartedLabel = document.createElement('label');
	dateStartedLabel.textContent = 'Date Started:';
	let dateStartedInput = document.createElement('input');
	dateStartedInput.type = 'text';
	dateStartedInput.name = 'dateStarted';
	dateStartedInput.value = book.title;
	form.appendChild(dateStartedLabel);
	form.appendChild(dateStartedInput);
	form.appendChild(document.createElement('br'));

	let dateFinishedLabel = document.createElement('label');
	dateFinishedLabel.textContent = 'Date Finished:';
	let dateFinishedInput = document.createElement('input');
	dateFinishedInput.type = 'text';
	dateFinishedInput.name = 'dateFinished';
	dateFinishedInput.value = book.title;
	form.appendChild(dateFinishedLabel);
	form.appendChild(dateFinishedInput);
	form.appendChild(document.createElement('br'));

	let ratingLabel = document.createElement('label');
	ratingLabel.textContent = 'rating:';
	let ratingInput = document.createElement('input');
	ratingInput.type = 'text';
	ratingInput.name = 'rating';
	ratingInput.value = book.title;
	form.appendChild(ratingLabel);
	form.appendChild(ratingInput);
	form.appendChild(document.createElement('br'));

	let submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.textContent = 'Save Changes';



	let editFormContainer = document.getElementById('editBookForm');
	editFormContainer.innerHTML = '';
	editFormContainer.appendChild(form);
 
}

function deleteForm(id) {
	let formContainer = document.getElementById('editFormContainer');
	if (formContainer) {
		formContainer.innerHTML = '';
	}
}

