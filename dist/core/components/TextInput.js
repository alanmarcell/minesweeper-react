import classNames from 'classnames';
import React from 'react';
import Errors from './Errors';
// tslint:disable-next-line:max-line-length
class TextInput extends React.Component {
    getValue() {
        return this.field.value;
    }
    setValue(val) {
        if (val == null)
            val = '';
        this.field.value = val;
    }
    render() {
        const { defaultValue, possibleErrors, errors, label } = this.props;
        var { placeholder, type } = this.props;
        const localErrors = errors && errors.length > 0 && possibleErrors && possibleErrors.length > 0
            ? errors.filter(error => possibleErrors.indexOf(error) >= 0)
            : [];
        const hasError = localErrors.length > 0;
        type = type ? type : 'text';
        placeholder = placeholder ? placeholder : label;
        return (React.createElement("div", { className: classNames('form-group', { 'has-error': hasError }) },
            React.createElement("label", null, label),
            React.createElement("input", { defaultValue: defaultValue, type: type, className: "form-control", placeholder: placeholder, ref: (f) => { this.field = f; } }),
            React.createElement(Errors, { errors: localErrors })));
    }
}
export default TextInput;
//# sourceMappingURL=TextInput.js.map