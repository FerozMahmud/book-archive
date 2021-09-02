const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    // Clear Data
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if (books.length === 0) {
        const h4 = document.createElement('h4');
        h4.classList.add('text-danger');
        h4.innerHTML = `No Result Found`;
        searchResult.appendChild(h4);
    }
    books.forEach(book => {
        // console.log('book')
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="book-cover-image">
        <div class="card-body">
            <h6 class="card-title">Book Name: ${book.title}</h6>
            <h6 class="author-title">Author Name: ${book.author_name[0]}</h6>
            <h6 class="published-date">Published On: ${book.publish_date[0]}</h6>
        </div>
            </div >
    `;
        searchResult.appendChild(div);
    });
}