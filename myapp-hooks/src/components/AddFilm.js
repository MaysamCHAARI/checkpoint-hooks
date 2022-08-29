import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddFilm = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    props.handleAddFilm(inputs);
    setInputs({ title: "", description: "", posterUrl: "", rating: "" });
    handleClose();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Add Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Put the tilte"
                name="title"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="put the description"
                name="description"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL"
                name="posterUrl"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="put the stars number"
                name="rating"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFilm;
