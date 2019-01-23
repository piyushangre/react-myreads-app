import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
	constructor(props) {
		super(props);	
		this.state = {

			
	}

this.carrierFunctionTwo = this.carrierFunctionTwo.bind(this)
	
}

	// this function exists to pass data up to the parent component.
    carrierFunctionTwo(newShelf, book) {
	  // console.log('book first time = ', book)
	  // console.log('newBookRow first time =', newShelf);
	 if (this.props.onChangeShelf) {
		this.props.onChangeShelf(newShelf, book);
	}
}





render () {

let List = this.props.books.filter(book => book.shelf === this.props.whichShelf);



// console.log("list is now...", firstList)
// console.log("New list", newList)
	return (
		 <div className="bookshelf">

	          <h2 className="bookshelf-title">

	          	{this.props.whichShelf === "currentlyReading" ? "Currently Reading" :
		 		 this.props.whichShelf === "wantToRead" ? "Want to Read" : "Read"
		 		}

	          </h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid">

		            {List.map((book) => (
		            	<li key={book.id}>
				     		<Book book={book} moveItUpTwo={this.carrierFunctionTwo} whichShelf={this.props.whichShelf}/>
			     		</li>
				            	)) }

		            </ol>
	          </div>
		 </div>
		)
	}
}

export default BookShelf