import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './Components/BookShelf'
import Search from  './Components/Search'
import SearchButton from  './Components/SearchButton'
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shelf: '',
      // movedBook: ''
    }
    this.changeShelf = this.changeShelf.bind(this);
}

// retrieve books currently on bookshelf
componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ 
          books: books,
          shelf: '',
          // movedBook: ''
               })
         // console.log ("what is it at this point?",books)
      })

    }

// move books between shelves, and also from search to bookshelf.
changeShelf(newShelf, book) {
  // console.log('book 2nd time= ', book)
  //  console.log('newBookRow 2nd time =', newShelf);

  book.shelf = newShelf
  let updated = this.state.books
  let oldCollection = updated.filter(b => b.id != book.id)
  console.log("old collection = ", oldCollection)

  let newCollection = oldCollection.concat([book])
  console.log("new collection = ", newCollection)
  

  BooksAPI.update(book, newShelf).then((book) => {
    this.setState(state => ({
      books:newCollection})
      // shelf: newShelf
      // movedBook: book
    )
      // this.setState(state => ({
      //   books: newCollection
      }
    )

    

  
 }

  render() {


    return (
      <div className="app"> 
        <Route path="/search" render={() => ( 
          <Search onChangeShelf={this.changeShelf} shelvedBooks={this.state.books}/>
          )}
        />
              <Route exact path="/"  render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  

                    <BookShelf whichShelf ="currentlyReading" onChangeShelf={this.changeShelf} books={this.state.books}/>
                    <BookShelf whichShelf ="wantToRead" onChangeShelf={this.changeShelf} books={this.state.books} />
                    <BookShelf whichShelf ="read" onChangeShelf={this.changeShelf} books={this.state.books}/>
                           
                <SearchButton buttonState={this.displaySearchPage} />
              
              </div>
             )} />

       
       </div>
            )
      }
    }

  export default BooksApp