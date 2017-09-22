import { IField } from 'minesweeper-core';
import React from 'react';

import Cols from './Position';

interface IFieldProps {
    field: IField;
}

const Field: React.StatelessComponent<IFieldProps> = ({ field }) => {
    return (
        <div className="container">
            <Cols field={field} />
        </div>);
};

export default Field;
