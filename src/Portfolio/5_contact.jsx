import style from './Contact.module.css';

export const Contact = () => {




    
    return(
        <section >
        <div id="contact" className={ style.footer }>
            <p>Contactez - moi : </p>



                < button className = { style.button } > <a href="mailto:maelle.r.baudot@gmail.com" > Email </a></button >
                    <button className={ style.button }> <a href="https://www.linkedin.com/in/ma%C3%ABlle-baudot-16a284389/" target = "_blank" > LinkedIn </a></button >
                        <button className={ style.button }> <a href="https://github.com/LostRibby" target = "_blank" > GitHub </a></button >


                            <p>Tous droits réservés © 2026 Maëlle Baudot </p>
                                </div>
               </section>                
    ) 
}