import React, { Component } from 'react'
import ResumenGastos from './ResumenGastos';
import FormularioProductos from './FormularioProductos';

export default class BodyGastos extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <FormularioProductos />
                    </div>
                    <div className="col-md-4 order-md-2 mb-4">
                        <ResumenGastos />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
