import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { Book } from './components/Book';


class MyFavoriteBooks extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        bookData: [],
        email: this.props.auth0.user.email
      }
    }

    componentDidMount = async () => {
      let url = `http://localhost:3001/getbooks?email=${this.state.email}`;
      let URLbooks = await axios.get(url);
      this.setState ({
        bookData: URLbooks.data
      }); console.log('book data',this.state.bookData);
    }

  render() {
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>

      {this.state.bookData &&
        <>
        {this.state.bookData.map((element,index) => {
          return (
            <Book key={index} title={element.title} description={element.description} email={element.email} />
          )
        })}
        </>
      }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
