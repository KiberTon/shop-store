import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..';
import { observer } from 'mobx-react-lite'


const NavBar = observer(() => {
    const history = useHistory()
    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className='ml-auto' style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)} style={{ marginLeft: '20px' }}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;