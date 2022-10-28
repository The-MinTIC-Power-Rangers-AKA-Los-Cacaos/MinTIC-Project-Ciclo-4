import React, { Fragment } from 'react'
import '../../styles/components/layout/CategoriesHeader.css'

export function CategoriesHeader(params) {
    return (
        <Fragment>
            <div class="categories">
                <p>Higiene</p>
                <p>Salud</p>
                <p>Aseo</p>
                <p>Comida</p>
                <p>Nutrición</p>
            </div>
        </Fragment>

    )
}
