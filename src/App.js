import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { Switch, Route } from "react-router-dom";
import BooksProvider, { BooksContext } from "./Provider/BooksProvider";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <BooksProvider>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => (
                <BooksContext.Consumer>
                  {(context) => <Home {...context} />}
                </BooksContext.Consumer>
              )}
            />
            <Route
              exact
              path={"/search"}
              render={() => (
                <BooksContext.Consumer>
                  {(context) => <Search {...context} />}
                </BooksContext.Consumer>
              )}
            />
          </Switch>
        </BooksProvider>
      </div>
    );
  }
}

export default BooksApp;
