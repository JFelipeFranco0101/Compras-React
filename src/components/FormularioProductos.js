import React, { Component } from 'react';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

export default class Productos extends Component {

    lstProductos = [];

    constructor(props) {
        super(props);
        this.state = {
            nombreProducto: '',
            detalleProducto: '',
            valorProducto: ''
        };

        this.baseState = { ...this.state };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
    };


    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        },
            (_) => _);
    }

    agregarProducto = () => {
        if (this.formularioValido()) {
            this.lstProductos.push(this.state);
            this.props.agregarProducto(this.lstProductos);
            this.limpiarFormulario();
            ToastsStore.success('El producto de agrego correctamente', 3000);
        }
    }

    limpiarFormulario = () => {
        this.setState(this.baseState);
    }

    formularioValido = () => {
        const expreg = {
            decimal: /^[0-9]+([,][0-9]+)?$/,
            alfanumerico: /^([a-zA-Z0-9 _-]+)$/
        };

        if (this.state.nombreProducto === '' || this.state.detalleProducto === '' || this.state.valorProducto === '') {
            ToastsStore.error('Todos los campos marcados con * son obligatorios', 3000);
            return false;
        } else if (!expreg.alfanumerico.test(this.state.nombreProducto)) {
            ToastsStore.error(`El texto: "${this.state.nombreProducto}" no es alfanumerico`, 3000);
            return false;
        } else if (!expreg.alfanumerico.test(this.state.detalleProducto)) {
            ToastsStore.error(`El texto: "${this.state.detalleProducto}" no es alfanumerico`, 3000);
            return false;
        } else if (!expreg.decimal.test(this.state.valorProducto)) {
            ToastsStore.error(`El valor: "${this.state.valorProducto}" no es decimal`, 3000);
            return false;
        }

        return true;
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="mb-3">Billing address</h4>
                <form id="fomulario">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombreProducto"><span className="text-danger">*</span>Nombre Producto: </label>
                            <input
                                className="form-control"
                                id="nombreProducto"
                                name="nombreProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text"
                                value={this.state.nombreProducto} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="detalleProducto"><span className="text-danger">*</span>Detalle Producto: </label>
                            <input
                                className="form-control"
                                id="detalleProducto"
                                name="detalleProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text"
                                value={this.state.detalleProducto} />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="valorProducto"><span className="text-danger">*</span>Valor Producto: </label>
                            <input
                                className="form-control"
                                id="valorProducto"
                                name="valorProducto"
                                onChange={this.handleInputChange}
                                placeholder=""
                                required
                                type="text"
                                value={this.state.valorProducto} />
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.agregarProducto}>Agregar</button>
                </form>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_LEFT} lightBackground />
            </React.Fragment>
        )
    }
}
