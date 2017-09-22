import { IBattle, IField, IFieldConfig } from 'minesweeper-core';
import R from 'ramda';
import React from 'react';
import Field from './Field';

const newPos = (x: number, y: number) => {
    return {
        x, y, isBomb: false, nearBombs: 0,
        opened: false, marked: 0, isValid: true
    };
};

const getEmptyField = (fieldConfig: IFieldConfig) => {
    const widthRange = R.range(0, fieldConfig.width);
    const heightRange = R.range(0, fieldConfig.height);

    return widthRange.map(i => heightRange.map(j => newPos(i, j)));
};

const startBattle = (fieldConfig: IFieldConfig): IBattle => {
    const field: IField = getEmptyField(fieldConfig);
    return { field, isOver: false, marks: 0, bombsMarked: 0, winner: null };
};
interface IBattleProps {
    fieldConfig: IFieldConfig;
}

const Battle: React.StatelessComponent<IBattleProps> = ({ fieldConfig }) => {

    const battle = startBattle(fieldConfig);
    const field = battle.field as IField;

    return <Field field={field} />;
};

export default Battle;
