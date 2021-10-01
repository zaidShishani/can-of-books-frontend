import React  from 'react';
import { Component } from 'react';
import {Card, Button} from 'react-bootstrap/';


export class Book extends Component {
    render () {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Book name: {this.props.title}</Card.Title>
                        <Card.Text>
                            Book description: {this.props.description}
                            <br></br>
                            user's Email: {this.props.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Book;