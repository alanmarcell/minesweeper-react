import { IPosition } from 'minesweeper-core';
import React from 'react';

interface IRowProps {
    field: IPosition[][];
}

const Row: React.StatelessComponent<IRowProps> = ({ field }) => {

    const rowItens = field.map((r, i) => (<Col cols={r} key={i} />));
    return (<div>{rowItens}</div>);
};

interface IColProps {
    cols: IPosition[];
}

const Col: React.StatelessComponent<IColProps> = ({ cols }) => {
    // R.map(rows, (position) => <Position position={position} />);

    const colsItens = cols.map((p, i) => (<Position position={p} key={i} />));
    return (<div>{colsItens}</div>);
};

interface IPositionProps {
    position: IPosition;
}

const divStyle = {
    height: '50px',
    width: '50px',
    background: '#999',
    display: 'inline-block'
};

const Position: React.StatelessComponent<IPositionProps> =
    ({ position }) => {
        console.log(position);
        const value = position.opened ? 'x' : 'B';
        return (<div style={divStyle} >{value}</div>);
    };

export default Row;
