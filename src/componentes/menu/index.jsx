import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import Styles from '../../styles/Menu.module.scss'

export default function Menu(){
    return (
        <nav className={Styles.menu}>
            <ul className={Styles.menu__lista}>
                <li className={Styles.menu__item}>
                    <img src={home} />
                    <a href="">Início</a>
                </li>
                <li>
                    <img src={maisCurtidas} />
                    <a href="">Mais Curtidas</a>
                </li>
                <li>
                    <img src={maisVistas} />
                    <a href="">Mais Vistas</a>
                </li>
                <li>
                    <img src={novasInativo} />
                    <a href="">Novas</a>
                </li>
                <li>
                    <img src={surpreenda} />
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}