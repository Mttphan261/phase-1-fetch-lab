function fetchBooks() {
  //create fetch request to GoT API
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json()) 

  //convert response to JSON
  
  //call renderBooks function to render JSON data
  .then((json) => renderBooks(json))
  // To pass the tests, don't forget to return your fetch!

}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
























// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   //grabbing total numbers of pages
//   .then((json) => { 
//     //assigning var to equal 0 to add total pages to it
//     let totalPages = 0;
//     //for loop, iterating through json array using condition until all books have been iterated through
//     for (let i = 0; i < json.length; i++) {
//     //adding var equaling 0 to number of pages extracted from iteration
//       totalPages += json[i].numberOfPages;
//     }
//     //console logging totalPages var outside of the function. If inside function, would return value for each book first.
//     console.log(totalPages);

//   })