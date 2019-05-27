import React, { Component } from 'react'
import Productos from './Productos';
import ResumenGastos from './ResumenGastos';

export default class BodyGastos extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <Productos />
                    </div>
                    <div className="col-md-4 order-md-2 mb-4">
                        <ResumenGastos />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
