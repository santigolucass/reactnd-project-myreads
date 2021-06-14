import React, { Component } from "react";
export const BooksContext = React.createContext();

class BooksProvider extends Component {
  constructor() {
    super();
    this.state = {
      wantToRead: [],
      currentlyReading: [],
      read: [],
      books: [],
      moveBook: (book, newSection, sections) => {
        const newBooks = this.state.books.map((currBook) => {
          if(currBook.id === book.id){
            currBook.shelf = newSection;
          }

          return currBook;
        });

        this.state.addBooks(newBooks);
      },
      addBooks: (books) => {
        const currentlyReading = []
        const wantToRead = []
        const read = []
        books.forEach(b => {
          switch(b.shelf){
            case 'currentlyReading': {
              currentlyReading.push(b);
              break
            }
            case 'wantToRead': {
              wantToRead.push(b);
              break
            }
            case 'read': {
              read.push(b)
              break
            }
            default: {
              break
            }
          }
        })
        this.setState({ books, currentlyReading, wantToRead, read });
      },
    };
  }

  render() {
    return (
      <BooksContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BooksContext.Provider>
    );
  }
}

export default BooksProvider;
