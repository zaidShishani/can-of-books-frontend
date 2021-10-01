import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { Book } from './components/Book';
import AddBook from './components/AddBook';
import { Button } from 'react-bootstrap';


class MyFavoriteBooks extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        bookData: [],
        email: this.props.auth0.user.email,
        showModal: false
      }
    }

    handleShow = () => {
      console.log('show card')
      this.setState({
        showModal: true
      })
    }

    handleClose = () => {
      this.setState({
        showModal: false
      })
    }
    componentDidMount = async () => {
      let url = `http://localhost:3001/getbooks?email=${this.state.email}`;
      let URLbooks = await axios.get(url);
      this.setState ({
        bookData: URLbooks.data
      }); console.log('book data',this.state.bookData);
    }

    addBook = async (event) => {
      event.preventDefault()

      let bookFromInfo = {
        title: event.target.title.value,
        description: event.target.description.value,
        email: this.state.email
      }

      let newBookData = await axios.post(`http://localhost:3001/addbook`, bookFromInfo)

      this.setState({
        bookData: newBookData.data
      });
    }

    deleteBook = async (bookId) => {
      console.log('delte book clicked')
      let newBookData = await axios.delete(`http://localhost:3001/deleteBook?email=${this.state.email}&bookId=${bookId}`)
      console.log('book ids in delete book', bookId)

      this.setState({
        bookData: newBookData.data
      });
      
      console.log('book ids in data for book', this.state.bookData)
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

      <Button  onClick={this.handleShow}>Add Book</Button>
      {this.state.showModal && 
      <>
      <AddBook addBook={this.addBook} show={this.state.showModal} handleShow={this.handleShow} handleClose={this.handleClose}/>
      </>}

      {this.state.bookData &&
        <>
        {this.state.bookData.map((element,index) => {
          return (
            <div>
            <Book key={index} deleteBook={this.deleteBook} id={element._id} title={element.title} description={element.description} email={element.email} />
            </div>
          )
        })}
        </>
      }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
