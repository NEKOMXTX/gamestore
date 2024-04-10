import React from "react";
import { Container, Form } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { NavLink, useLocation  } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE    
    
    
    
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Введите ваш email..." />
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Введите ваш пароль..." />
                    </Form.Group>

                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ?

                            <Form.Text>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </Form.Text>
                            :
                            <Form.Text>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </Form.Text>
                        }
                        <Button variant="primary" type="submit">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;