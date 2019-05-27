import React from 'react'

export default function ResumenGastos() {
    return (
        <React.Fragment>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Resumen de Productos</span>
                <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (COP)</span>
                    <strong>$20</strong>
                </li>
            </ul>
        </React.Fragment>
    )
}
