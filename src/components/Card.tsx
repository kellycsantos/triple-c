import { Icard } from "../interfaces/ICard"
export default function Card({variable, icon, altIcon , title, text , link} :Icard){
    return(
       <section role="column" className={`column ${variable}`}>
        <span>
            <img src={icon} alt={altIcon} />
        </span>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={link}>Learn more</a>
       </section>
    )
}