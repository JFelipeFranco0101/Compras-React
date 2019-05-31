import React from 'react'
import Gastos from './Gastos';

export default function ResumenGastos(lstProductos) {
    return (
        <React.Fragment>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Resumen de Productos</span>
                <span className="badge badge-secondary badge-pill">{lstProductos.productos.length}</span>
            </h4>
            <Gastos productos={lstProductos.productos} />
        </React.Fragment>
    )
}
