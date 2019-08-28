
import React from 'react';
import ToolTip from './Tooltip';
import Notification from './Notification';
import Searcher from './Searcher';
// import { OptionsType } from '../../types';
export const getOption = (option, globalHandler) => {
    switch (option.type) {
        case 'searcher':
            return  <Searcher
                option={option}
            />
        case 'icon':
            return <ToolTip 
                handleClick={(option) => globalHandler(option)} 
                option={option} />
        case 'notification':
            return <Notification
                option={option} 
                handleClick={(option) => globalHandler(option)}
            />;
        default:
            return <ToolTip 
            handleClick={(option) => globalHandler(option)} 
            option={option} />
    }
}