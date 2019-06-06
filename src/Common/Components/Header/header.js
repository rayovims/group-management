import React , {Component} from 'react';
import './header.css';
import logo from '../../Images/ups-header.png';

export default class Header extends Component {
    render () {
        return (
            <div className="text-center">
                <p className="top">Systems Programming</p>
                <p className="bottom">Windows Development Group</p>
                <img src={logo} width="100%" alt="logo"/>
            </div>
        )
    }
}