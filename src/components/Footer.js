import React from 'react'

export default function Footer({year, nombreCompania}) {
    return (
        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">
                © {year} {nombreCompania}
            </p>
        </footer>
    )
}
