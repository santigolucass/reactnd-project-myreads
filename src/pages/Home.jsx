import React, { Component } from "react";
import Section from "../components/Section";
import Add from "../components/Add";
import { getAll } from "../BooksAPI";

class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Section title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook} />
          <Section title="Want to read" books={this.props.wantToRead} moveBook={this.props.moveBook} />
          <Section title="Read" books={this.props.read} moveBook={this.props.moveBook} />
        </div>
        <Add />
      </div>
    );
  }
}

export default Home;
