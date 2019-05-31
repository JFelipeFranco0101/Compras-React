import React, { Component } from 'react'
import HeaderGastos from './HeaderGastos';
import BodyGastos from './BodyGastos';
import Footer from './Footer';

export default class MainGastos extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <HeaderGastos titulo="AppGastos" year={new Date().getFullYear()} />
                </div>
                <div className="container">
                    <BodyGastos />
                </div>
                <div>
                    <Footer year={new Date().getFullYear()} nombreCompania="AppGastos S.A" />
                </div>
            </React.Fragment>
        )
    }
}