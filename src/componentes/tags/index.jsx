import Styles from "../../styles/Tags.module.scss"

export default function Tags({tags, filtraFotos}){
    return(
        <div className={Styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={Styles.tags__lista}>
                {tags.map(tag => {
                    return (
                    <li key={tag} onClick={()=>filtraFotos(tag)}>
                        {tag}
                    </li>
                    ) 
                })}
            </ul>
        </div>
    )
}