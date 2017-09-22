import { IMenuItem } from 'ptz-menu-domain';
import React from 'react';

import { IndexLink, Link } from 'react-router';
interface IMenuItemProps {
    menuItem: IMenuItem;
}

function getSubItems(menuItem: IMenuItem) {
    if (!menuItem.subItems || menuItem.subItems.length === 0)
        return null;

    const subItems = menuItem.subItems.forEach(subItem => <MenuItem menuItem={subItem} />);
    return <ul>{subItems}</ul>;
}

const MenuItem: React.StatelessComponent<IMenuItemProps> = ({ menuItem }) => {
    return (
        <li>
            <Link to={menuItem.link} activeClassName="active">{menuItem.label}</Link>
            {getSubItems(menuItem)}
        </li>
    );
};

export default MenuItem;
