import React from "react";
import { Container, Form } from "react-bootstrap";
import { Card, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Введите ваш email..." />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Введите ваш пароль..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex justify-content-between mt-3 px-3">

                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>

                        <Button variant="primary" type="submit">
                            Войти
                        </Button>
                    </div>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;