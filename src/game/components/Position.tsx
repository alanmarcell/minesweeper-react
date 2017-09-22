import { IPosition } from 'minesweeper-core';
import React from 'react';

interface IRowProps {
    field: IPosition[][];
}

const Row: React.StatelessComponent<IRowProps> = ({ field }) => {

    const rowItens = field.map((r, i) => (<Col cols={r} key={i} />));
    return (<div className="row">{rowItens}</div>);
};

interface IColProps {
    cols: IPosition[];
}

const Col: React.StatelessComponent<IColProps> = ({ cols }) => {
    // R.map(rows, (position) => <Position position={position} />);

    const colsItens = cols.map((p, i) => (<Position position={p} key={i} />));
    return (<div className="col col-sm-2">{colsItens}</div>);
};

interface IPositionProps {
    position: IPosition;
}

const Position: React.StatelessComponent<IPositionProps> =
    ({ position }) => {
        console.log(position);
        const value = position.opened ? 'x' : 'B';
        return (<p >{value}</p>);
    };

export default Row;
