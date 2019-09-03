
import React from 'react';
import ToolTip from './Tooltip';
import Notification from './Notification';
import Searcher from './Searcher';
import Profile from './Profile';
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
        case 'profile':
            return <Profile option={option} />
        default:
            return <ToolTip 
            handleClick={(option) => globalHandler(option)} 
            option={option} />
    }
}