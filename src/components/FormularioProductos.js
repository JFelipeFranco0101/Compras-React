import React, { Component } from 'react'

export default class Productos extends Component {

    lstProductos = [];

    constructor(props) {
        super(props);
        this.state = {
            nombreProducto: '',
            detalleProducto: '',
            valorProducto: ''
        };
        
        this.baseState = this.state;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
    };


    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        },
        () => console.log(this.state));
    }

    agregarProducto = () => {
        this.lstProductos.push(this.state);
        this.props.agregarProducto(this.lstProductos);
        
        this.limpiarFormulario();
    }

    limpiarFormulario = () => {
        this.setState(this.baseState);
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="mb-3">Billing address</h4>
                <form id="fomulario">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombreProducto">Nombre Producto: </label>
                            <input
                                className="form-control"
                                id="nombreProducto"
                                name="nombreProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text"
                                value={this.state.nombreProducto} />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="detalleProducto">Detalle Producto: </label>
                            <input
                                className="form-control"
                                id="detalleProducto"
                                name="detalleProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text" 
                                value={this.state.detalleProducto} />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="valorProducto">Valor Producto: </label>
                            <input
                                className="form-control"
                                id="valorProducto"
                                name="valorProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text" 
                                value={this.state.valorProducto} />
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
