import favorito from "./favorito.png"
import open from "./open.png"

export default function Cards({itens, Styles}){
    return (
        <ul className={Styles.galeria__cards}>
                {
                    itens.map((item)=> {
                        return (
                        <li key={item.id} className={Styles.galeria__card}>
                                <img
                                    className={Styles.galeria__imagem}
                                    src={item.imagem}
                                    alt={item.titulo}
                                />
                                <p className={Styles.galeria__descricao}>{item.titulo}</p>
                            <div>
                                <p>{item.creditos}</p>
                                <span >
                                    <img
                                        src={favorito}
                                        alt="Ícone coração para cutir"
                                     />
                                    <img
                                        src={open}
                                        alt="Ícone de abrir modal"
                                     />
                                </span>
                            </div>
                        </li>
                        )
                    })
                }
        </ul>
    )
}