const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        // console.log('book')
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
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