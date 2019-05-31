import React from 'react'
import { NumberFormatCurrency } from './utils/FormatCurrency'

export default function Gastos({ productos }) {
    return (
        <div>
            {productos.map((p, idx) =>
                <li className="list-group-item d-flex justify-content-between bg-light" key={idx}>
                    <div className="text-success">
                        <h6 className="my-0">{p.nombreProducto}</h6>
                        <small className="text-muted">{p.detalleProducto}</small>
                    </div>
                    <span className="text-success">${p.valorProducto}</span>
                </li>)}
            {
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (COP)</span>
                    <strong>{NumberFormatCurrency(productos.reduce((a, b) => (a + parseInt(b.valorProducto)), 0))}</strong>
                </li>
            }
        </div>
    )
}
