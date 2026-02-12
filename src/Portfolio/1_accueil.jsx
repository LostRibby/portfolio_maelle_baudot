import style from './Portfolio.module.css'; 
import pdp from "../images/PDPMOI.jpg"
export const Accueil = () =>{



    return(
        <section id="accueil">
        <div className={style.body}>

<div>
    <nav>
        
    </nav>
</div>

<div className={style.photo}>
         <img className={style.pdp} src={pdp} alt="Photo de Maëlle" />  
         <p>Front-End Developper</p>
</div>

<div className={style.presentation}>
<h1 className={style.titre}>Hello, moi c'est <span className={style.nom}>Maëlle</span></h1>

<p className={style.phrasedaccroche}>J'aime le codage et l'art, mais surtout les combiner pour créer de nouvelles choses</p>

</div>

<div>
    <button className={style.button} download="CV_Maelle_Baudot.pdf" onClick={() => window.open('CV_Maelle_Baudot.pdf', '_blank')}>CV</button>
    <button className={style.button}><a href="https://github.com/LostRibby" target="_blank">GitHub</a></button>
</div>
</div>
</section>
    )
}