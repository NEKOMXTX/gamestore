import React, {useContext} from 'react';
import { Context } from '../index';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Игрошоп</NavLink>
            {user.isAuth ?
              <Nav className="ms-auto" style={{color: 'white'}}>
                <Button 
                  variant={"outline-light"} 
                  onClick={() => history.push(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
                <Button 
                  variant={"outline-light"} 
                  onClick={() => history.push(LOGIN_ROUTE)} 
                  className="ms-2" 
                >
                  Выйти
                </Button>
              </Nav>
              :
              <Nav className="ms-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
              </Nav>
            }
          </Container>
        </Navbar>
    );
});

export default NavBar;