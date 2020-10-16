import React from 'react';
import Menu from './Menu';
import Slide from './Slide';
export default class Head extends React.Component{
    render(){
        return(
            <div>
            <Menu/>
            <Slide/>
            </div>
        );
    }
}