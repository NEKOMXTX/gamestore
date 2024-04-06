import React from "react";
import {Container, Form} from "react-bootstrap";
import {Card, Button, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className="justify-content-between">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегстрируйтесь!</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                        >
                            Войти
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
            
        </Container>
    );
};

export default Auth;