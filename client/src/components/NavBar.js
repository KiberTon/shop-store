import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '..';


const NavBar =  () => {
    const { user } = useContext(Context)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Navbar>
        </>
    );
};

export default NavBar;