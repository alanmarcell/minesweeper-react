import PropTypes from 'prop-types';
import { User } from 'ptz-user-domain';
import React from 'react';
import Errors from '../../core/components/Errors';
import TextInput from '../../core/components/TextInput';
export default class CreateUserForm extends React.Component {
    constructor() {
        super(...arguments);
        this.userFormRef = {};
        this.handleSubmit = (e) => {
            e.preventDefault();
            console.log('createUserSubmit e', e);
            const userArgs = {
                id: this.props.user.id,
                displayName: this.userFormRef.displayName.getValue(),
                email: this.userFormRef.email.getValue(),
                password: this.userFormRef.password.getValue(),
                userName: this.userFormRef.userName.getValue()
            };
            console.log('userArgs', userArgs);
            this.props.createUser(userArgs);
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.setUserForm(this.props.user);
    }
    render() {
        const user = this.props.user;
        console.log('CreateUserForm props.user', user);
        this.setUserForm(this.props.user);
        return (React.createElement("section", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("fieldset", null,
                    React.createElement("legend", null, "Create User"),
                    React.createElement(TextInput, { label: "Display Name", defaultValue: user.displayName, ref: (input) => (this.userFormRef.displayName = input), possibleErrors: User.displayNameErrors, errors: user.errors }),
                    React.createElement(TextInput, { label: "User Name", defaultValue: user.userName, ref: (input) => (this.userFormRef.userName = input), possibleErrors: User.userNameErrors, errors: user.errors }),
                    React.createElement(TextInput, { label: "E-mail", defaultValue: user.email, ref: (input) => (this.userFormRef.email = input), possibleErrors: User.emailErrors, errors: user.errors }),
                    React.createElement(TextInput, { label: "Password", type: "password", defaultValue: user.password, ref: (input) => (this.userFormRef.password = input), possibleErrors: User.passwordErrors, errors: user.errors }),
                    React.createElement("button", { type: "submit" }, "Create User"),
                    React.createElement(Errors, { errors: user.errors })))));
    }
    setUserForm(user) {
        if (!this.userFormRef || !this.userFormRef.displayName)
            return;
        console.log('userFormRef', this.userFormRef);
        this.userFormRef.displayName.setValue(user ? user.displayName : '');
        this.userFormRef.email.setValue(user ? user.email : '');
        this.userFormRef.password.setValue(user ? user.password : '');
        this.userFormRef.userName.setValue(user ? user.userName : '');
    }
}
CreateUserForm.propTypes = {
    createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};
//# sourceMappingURL=CreateUserForm.js.map