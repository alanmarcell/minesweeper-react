import React from 'react';
import Relay from 'react-relay';
import Footer from './Footer';
import Header from './Header';
class Main extends React.Component {
    render() {
        const { viewer, children } = this.props;
        return (React.createElement("div", null,
            React.createElement(Header, { app: viewer.app, menu: viewer.menu }),
            React.createElement("main", null, children),
            React.createElement(Footer, null)));
    }
}
export default Relay.createContainer(Main, {
    initialVariables: {
        limit: 20
    },
    fragments: {
        viewer: () => Relay.QL `
        fragment on Viewer{
            id,
            app{
                ${Header.getFragment('app')}
            },
            menu{
                ${Header.getFragment('menu')}
            }
        }
       `
    }
});
//# sourceMappingURL=Main.js.map