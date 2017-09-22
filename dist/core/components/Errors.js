import PropTypes from 'prop-types';
import React from 'react';
const Errors = ({ errors }) => {
    const errorsList = errors
        ? errors.map(error => React.createElement("li", { key: error }, error))
        : [];
    return (React.createElement("ul", { className: "errors" }, errorsList));
};
Errors.propTypes = {
    errors: PropTypes.array
};
export default Errors;
//# sourceMappingURL=Errors.js.map