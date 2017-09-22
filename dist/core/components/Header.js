import React from 'react';
import Relay from 'react-relay';
import Menu from '../../menus/components/Menu';
class Header extends React.Component {
    render() {
        const { app, menu } = this.props;
        return (React.createElement("header", null,
            React.createElement("a", { href: "/" },
                React.createElement("h1", null, app.title),
                React.createElement("p", null, app.subTitle)),
            React.createElement(Menu, { menu: menu })));
    }
}
export default Relay.createContainer(Header, {
    fragments: {
        app: () => Relay.QL `
            fragment on App {
                title,
                subTitle
            }
        `,
        menu: () => Relay.QL `
            fragment on Menu {
                ${Menu.getFragment('menu')}
            }
        `
    }
});
//# sourceMappingURL=Header.js.map