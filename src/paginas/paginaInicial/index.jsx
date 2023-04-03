import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import Banner from "./banner.png"
import Styles from "../../styles/PaginaInicial.module.scss"
import Galeria from "../../componentes/galeria";
import Populares from "../../componentes/populares";

export default function paginaInicial(){
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={Styles.principal}>
                    <Menu/>
                    <div className={Styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={Banner} alt="Visão espcial do planeta terra" />
                    </div>
                </section>
                
                <div className={Styles.galeria}>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            
        </>
        
    );
}