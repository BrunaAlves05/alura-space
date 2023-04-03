import Tags from "../tags";
import Styles from "../../styles/Galeria.module.scss"
import fotos from "./foto.json"

import Cards from "./cards";
import { useState } from "react";

export default function Galeria(){
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor)=> valor.tag ))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto)=> {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    }

    return (
       <section className={Styles.galeria}>
            <h2>
                Navegue pela galeria
            </h2>
            <Tags tags={tags} filtraFotos={filtraFotos}/>
            <Cards itens={itens} Styles={Styles}/>
       </section> 
    )
}