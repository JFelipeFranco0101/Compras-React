import React, { Component } from 'react'

export default class Productos extends Component {

    agregarProducto() {
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="mb-3">Billing address</h4>
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombreProducto">Nombre Producto: </label>
                            <input type="text" className="form-control" id="nombreProducto" placeholder="" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                    </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="detalleProducto">Detalle Producto: </label>
                            <input type="text" className="form-control" id="detalleProducto" placeholder="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                    </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="valorProducto">Valor Producto: </label>
                            <input type="text" className="form-control" id="valorProducto" placeholder="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                    </div>
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.agregarProducto}>Agregar</button>
                </form>
            </React.Fragment>
        )
    }
}
