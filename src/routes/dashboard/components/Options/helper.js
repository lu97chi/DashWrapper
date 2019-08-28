
import React from 'react';
import { OptionsType } from '../../types';
import Searcher from '../Searcher';
export const getOption = (option: OptionsType) => {
    switch (option.type) {
        case 'search':
            return  <p>fdsa</p>
        case 'icon':
            return <p>icono</p>;
        case 'notification':
            return <p>notificacion</p>;
        default:
            return <p>icono</p>
    }
}