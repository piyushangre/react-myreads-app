import React from 'react'
import Book from './Book'

class SearchResults extends React.Component {
	constructor(props) {
		super(props);

		this.carrierFunctionTwo = this.carrierFunctionTwo.bind(this)

	}

	// this function exists to pass data up to the parent component.
	    carrierFunctionTwo(newShelf, book) {
	 // console.log('book first time = ', book)
	 // console.log('newBookRow first time =', newShelf);
	 if (this.props.moveItUpThree) {
		this.props.moveItUpThree(newShelf, book);
	}
}


		render() {
				return (
		<div className="search-books-results">
              <ol className="books-grid">
              	{this.props.searchResults.map((book) => {
              		let shelf="none"
              		// console.log(this.props.shelvedBooks)

              		this.props.shelvedBooks.map((shelfBook) => (
              			shelfBook.id === book.id ? shelf = shelfBook.shelf : ''))

              		// console.log(book.id)
              		// console.log(shelfBook.id)
              		// console.log(shelf)
              		

              		return (
          			<li key={book.id}>
              			<Book book={book} onChangeShelf={this.props.onChangeShelf} moveItUpTwo={this.carrierFunctionTwo} whichShelf={shelf} />
          			</li>

              		)})}


              </ol>
        </div>


		)
	}
}

export default SearchResults


