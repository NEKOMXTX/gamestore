import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../..';

const CreateProduct = ({show, onHide}) => {
  const {product} = useContext(Context)
  const [info, setInfo] = useState([])
  
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую игру
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите жанр</Dropdown.Toggle>
              <Dropdown.Menu>
              {product.genres.map(genre =>
                <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>)}                
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберите маркетплейс</Dropdown.Toggle>
              <Dropdown.Menu>
              {product.marketplaces.map(marketplace =>
                <Dropdown.Item key={marketplace.id}>{marketplace.name}</Dropdown.Item>)}                
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className='mt-3'
              placeholder='Введите название игры'
            />
            <Form.Control
              className='mt-3'
              placeholder='Введите стоимость игры'
              type='number'

            />
            <Form.Control
              className='mt-3'
              type='file'

            />
            <hr/>
            <Button
            variant='outline-dark'
            onClick={addInfo}
            >
            Добавить новое свойство

            </Button>
            {
              info.map(i => 
              <Row className='mt-4' key={i.number}>
                <Col md={4}>
                  <Form.Control
                    placeholder='Введите название описания'
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder='Введите описание'
                  />
                </Col>
                <Col md={4}>
                  <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
                </Col>
              </Row>
              )
            }
        </Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateProduct;