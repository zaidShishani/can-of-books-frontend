import React  from 'react';
import { Component } from 'react';
import {Card, Button} from 'react-bootstrap/';


export class Book extends Component {
    render () {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Book's name: {this.props.title}</Card.Title>
                        <Card.Text>
                            Book's description: {this.props.description}
                            <br></br>
                            user's Email: {this.props.email}
                            <br></br>
                            book id: {this.props.id}
                        </Card.Text>
                        <Card.Footer>
                            <Button onClick={() => {this.props.deleteBook(this.props.id)}}>Delete book</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Book;