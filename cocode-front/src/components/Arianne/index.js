import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
    { key: 'Acceuil', content: 'Home', link: true },
    { key: 'Tous les projets', content: 'Tous les projets', link: true },
    { key: 'Friends', content: 'T-Friends', active: true },
]

const Ariane = () => (

    <Breadcrumb icon='right angle' sections={sections} />

)

export default Ariane;