import React from 'react'
import { Link } from 'react-router-dom'


// a very small component to take the user to the search page.
function SearchButton (props) {
return (
	<div className="open-search">
		<Link
			to = "/search"
			onClick={props.buttonState}>Add a book
		</Link>
	</div>

	)
}

export default SearchButton
