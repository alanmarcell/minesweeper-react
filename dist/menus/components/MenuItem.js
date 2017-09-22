import React from 'react';
function getSubItems(menuItem) {
    if (!menuItem.subItems || menuItem.subItems.length === 0)
        return null;
    const subItems = menuItem.subItems.forEach(subItem => React.createElement(MenuItem, { menuItem: subItem }));
    return React.createElement("ul", null, subItems);
}
const MenuItem = ({ menuItem }) => {
    return (React.createElement("li", null,
        React.createElement("a", { href: menuItem.link, className: "active" }, menuItem.label),
        getSubItems(menuItem)));
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map