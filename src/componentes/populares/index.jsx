import fotosPopulares from './fotos-populares.json'
import Styles from './populares.module.scss'

export default function Populares(){
    return (
        <aside className={Styles.populares}>
            <h2>Populares</h2>
            <ul className={Styles.populares__imagens}>
                {fotosPopulares.map((fotosPopular)=> {
                    return (
                        <li key={fotosPopular.id}>
                            <img src={fotosPopular.path} alt={fotosPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}