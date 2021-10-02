import React, { Component } from 'react'
import { Modal, Form, Button } from "react-bootstrap";

class UpdateBook extends Component {
    render() {
        return (
            <div>
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Header>
                    <Form onSubmit={this.props.addBook}>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder='Enter Book Name' />
                        <Form.Label>Book Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder='Enter Book description' />
                        <Button variant="primary" type="submit" value="Update Book">Submit</Button>
                    </Form>
                </Modal.Header>
            </Modal>
                
            </div>
        )
    }
}

export default UpdateBook
