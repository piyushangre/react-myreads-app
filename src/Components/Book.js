import React from 'react'
import ListControl from './ListControl'


class Book extends React.Component {
	constructor(props) {
	super(props);


	this.carrierFunction = this.carrierFunction.bind(this)

}

// this function exists to pass data up to the parent component.
carrierFunction(newShelf, book) {
	 // console.log('book first time = ', book)
	 // console.log('newBookRow first time =', newShelf);
	 if (this.props.moveItUpTwo ) {
		this.props.moveItUpTwo(newShelf, book);
	}
}


	render () {
		let book = this.props.book 
		// console.log("book =",book)
		let coverImageStyle = { width: 128, height: 188, backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : ''}  
return (
			<React.Fragment> 
				<div className="book">
					<div className="book-top">
						 <div className="book-cover" style={coverImageStyle}></div>									
						<div className="book-shelf-changer">
							<ListControl moveItUp = {this.carrierFunction} book={book} whichShelf={this.props.whichShelf}/>
						</div> 

					</div>
				</div>

				<div className="book-title">{book.title}</div>
          		<div className="book-authors">{book.author}</div>
			</React.Fragment> 

			
			)
		}
	}

export default Book