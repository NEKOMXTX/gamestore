import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateMarketPlace = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый маркетплейс
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                placeholder={'Введите название маркетплейса'}
            />
        </Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateMarketPlace;