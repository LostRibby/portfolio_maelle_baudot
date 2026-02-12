import style from './Portfolio.module.css';

export const Parcours = () => {



    return (
        <section id="parcours">
            <div className={style.body}>
                <div className={style.parcoursContainer}>
                    <h2>Mon Parcours</h2>
                    <div className={style.parcours}>

                        <div className={style.parcours1}>
                            <h3>Enfance</h3>
                            <p>J'ai passé mon enfance à Bruxelles, faisant mes études de primaire à Etterbeek et mes débuts de secondaire à l'Institut Saint-Boniface Parnasse.</p>
                        </div>

                        <div className={style.parcours1}>
                            <h3>CESS</h3>
                            <p>En juin 2023 j'ai obtenu mon CESS à l'Institut Saint-Luc de Bruxelles en Qualification Art Plastique.</p>
                        </div>
                        <div className={style.parcours1}>
                            <h3>fullstack Javascript developper</h3>
                            <p>En septembre 2025,  j'ai commencé à suivre une formation de développeur fullstack Javascript à l'Interface3, cette formation est toujours en cours.</p>
                        </div>
                    </div>
                </div></div></section>
    )
}