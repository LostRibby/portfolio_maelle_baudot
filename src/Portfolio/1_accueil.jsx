import style from './Portfolio.module.css'; 
import pdp from "../images/PhotoMoi.jpg"
export const Accueil = () =>{



    return(
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
<h1>Hello, moi c'est Maëlle</h1>

<p>J'aime le codage et l'art, mais surtout les combiner pour créer de nouvelles choses</p>

</div>
</div>

    )
}