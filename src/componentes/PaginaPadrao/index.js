import Banner from 'componentes/Banner'
import styles from './PaginaPadrao.module.css'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}