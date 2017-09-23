import { IFieldConfig } from 'minesweeper-core';
import React from 'react';
import Battle from '../../game/components/Battle';

const Game: React.StatelessComponent<any> = () => {

    const fieldConfig: IFieldConfig = {
        width: 9,
        height: 9,
        bombs: 9
    };
    return (
        <section>
            <Battle fieldConfig={fieldConfig} />
        </section>
    );
};

export default Game;
