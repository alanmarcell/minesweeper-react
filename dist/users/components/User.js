import React from 'react';
import Relay from 'react-relay';
class User extends React.Component {
    render() {
        const { user } = this.props;
        return (React.createElement("li", null,
            user.id,
            " ",
            React.createElement("br", null),
            user.email,
            " ",
            React.createElement("br", null),
            user.displayName,
            " ",
            React.createElement("br", null),
            user.imgUrl,
            " ",
            React.createElement("br", null),
            user.userName,
            " ",
            React.createElement("br", null)));
    }
}
export default Relay.createContainer(User, {
    fragments: {
        user: () => Relay.QL `
            fragment on User {
                displayName,
                email,
                imgUrl,
                userName,
                id
            }
        `
    }
});
//# sourceMappingURL=User.js.map