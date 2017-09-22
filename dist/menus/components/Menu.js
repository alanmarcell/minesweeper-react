import React from 'react';
import Relay from 'react-relay';
import MenuItem from './MenuItem';
const Menu = ({ menu }) => {
    const menuItems = menu.items.map((menuItem, i) => React.createElement(MenuItem, { menuItem: menuItem, key: i }));
    return (React.createElement("nav", null,
        React.createElement("label", { htmlFor: "cb-menu" }, menu.label),
        React.createElement("input", { type: "checkbox", name: "cb-menu", id: "cb-menu" }),
        React.createElement("ul", null, menuItems)));
};
export default Relay.createContainer(Menu, {
    fragments: {
        menu: () => Relay.QL `
            fragment on Menu {
                label,
                items{
                    label,
                    link,
                    subItems{
                        label,
                        link
                    }
                }
            }
        `
    }
});
//# sourceMappingURL=Menu.js.map