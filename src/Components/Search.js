
import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      query: ''
    }

    this.carrierFunctionThree = this.carrierFunctionThree.bind(this)
    // this.clearQuery = this.clearQuery.bind(this)
    
  }

// this function creates a controlled component, with user input updating state
// the user input is then passed into the API search query to render search results
// if else statements handle errors.
    updateQuery = (query) => {
    this.setState({query});
    // console.log(query);
    if (query) {
     BooksAPI.search(query).then((searchResults) => {
      if(searchResults.error) {
        this.setState({
        searchResults: []
      })
      } else {
        this.setState({
        searchResults
      })
      }
      
    }) } else {
      this.setState({
        searchResults: []
      })

    }
      // console.log('results =',results)
      // console.log('query =',this.state.query)
    }
  

    // this function exists to pass data up to the parent component.
      carrierFunctionThree(newShelf, book) {
   // console.log('book first time = ', book)
   // console.log('newBookRow first time =', newShelf);
   if (this.props.onChangeShelf) {
    this.props.onChangeShelf(newShelf, book);
  }
}
  

  render() { 



  return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" exact className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
         
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
               {this.state.searchResults != null && (
                <SearchResults searchResults={this.state.searchResults} moveItUpThree={this.carrierFunctionThree} shelvedBooks={this.props.shelvedBooks}/> 
              
              
                
                  )}        
         
        </div>
    )
  }
} 


export default Search
