import React from 'react'
import './HeaderGastos.css'

export default function HeaderGastos({titulo, year}) {
    return (
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
            <img className="mr-3" src="https://cdn6.aptoide.com/imgs/c/9/3/c93c09e1b826be9ea087ce203044b01b_icon.png?w=240" alt="" width="48" height="48" />
            <div className="lh-100">
                <h6 className="mb-0 text-white lh-100">{titulo}</h6>
                <small>Since {year}</small>
            </div>
        </div>
    )
}
