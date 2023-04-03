import Logo from './logo.png'
import Search from './search.png'
import Styles from '../../styles/Cabecalho.module.scss'


export default function Cabecalho(){
    return (
        <header className={Styles.cabecalho}>
            <img src={Logo} alt="Logo Alura Space" />

            <div className={Styles.cabecalho__container}>
                <input type="text"className={Styles.cabecalho__input} placeholder="O que você procura?"/>
                <img src={Search} alt="Icone de Busca" />
            </div>
        </header>
    )
}