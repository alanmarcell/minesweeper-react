import { IFieldConfig } from 'minesweeper-core';
import React from 'react';
import Battle from '../../game/components/Battle';

const Game: React.StatelessComponent<any> = () => {

    const fieldConfig: IFieldConfig = {
        width: 3,
        height: 3,
        bombs: 3
    };
    return (
        <section>
            <Battle fieldConfig={fieldConfig} />
        </section>
    );
};

export default Game;
