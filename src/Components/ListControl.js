import React, {Component} from 'react'

class ListControl extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	// this function handles the change in value in the select menu.
	handleChange(e) {
		let newBookRow = e.target.value;
		let book = this.props.book;
		
		// console.log("the shelf I clicked on was ", newBookRow)
		// console.log("the book object is..",book)
		if (this.props.moveItUp) {
			this.props.moveItUp(newBookRow, book);
		}
		
	}

	render() {
		return (
			<select onChange={this.handleChange} value={this.props.whichShelf}>	
		            <option value="move" disabled>Move to...</option>
		            <option value="currentlyReading">Currently Reading</option>
		            <option value="wantToRead">Want to Read</option>
		            <option value="read">Read</option>
		            <option value="none">None</option>
        	</select>
			)
		}

}
	

export default ListControl