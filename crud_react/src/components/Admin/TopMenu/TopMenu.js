import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import {useAuth} from "../../../hooks"
import "./TopMenu.scss";

export function TopMenu() {
    const {auth, logout} = useAuth();

    const renderName = () => {
        if (auth.me?.first_name && auth.me?.last_name) {
            return `${auth.me.first_name} ${auth.me.last_name}`;
            
        }
        return auth.me?.email;
    } 

return (
    <div>
        <Menu fixed='top' className='top-menu-admin'>
            <Menu.Item className='top-menu-admin__logo'>
                <p>Crud React Admin</p>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>Hola, {renderName()}</Menu.Item>
                <Menu.Item onClick={logout}>
                    <Icon name='log out'/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
)
}
