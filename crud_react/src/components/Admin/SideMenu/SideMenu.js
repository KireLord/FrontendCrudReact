import React from 'react';
import {Menu, Icon} from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
    const { children } = props;
    const {pathname} = useLocation();
return (
    <div className='side-menu-admin'>
        <MenuLeft pathname={pathname}/>
        <div className='content'>{children}</div>
    </div>
);
}

function MenuLeft(props){
    const {pathname} = props;
    const {auth} = useAuth();

    return(
        <Menu fixed='left' borderless className='side' vertical>
            {auth.me?.is_staff &&(
                <Menu.Item as={Link} to={'/admin/users'} active={pathname === "/admin/users"}>
                    <Icon name='user'/>Usuarios
                </Menu.Item>
            )}
            <Menu.Item as={Link} to={'/admin'} active={pathname === "/admin"}>
                <Icon name='home'/>Home Admin
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/tables'} active={pathname === "/admin/tables"}>
                <Icon name='table'/>Proximamente
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/payments-history'} active={pathname === "/admin/payments-history"}>
                <Icon name='history'/>Proximamente
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/categories'} active={pathname === "/admin/categories"}>
                <Icon name='folder'/>Proximamente
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/products'} active={pathname === "/admin/products"}>
                <Icon name='cart'/>Proximamente
            </Menu.Item>
        </Menu>
    )
}
