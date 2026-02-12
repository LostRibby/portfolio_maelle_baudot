import style from './Portfolio.module.css';


import css from '../images/css-3.png';
import html from '../images/html-5.png';
import js from '../images/javascript-logo.png';
import react from '../images/React-Logo-PNG-HD.png';
import node from '../images/node.png';
import tailwind from '../images/tailwindcss.png';
import git from '../images/git.png';
import github from '../images/github.png';


export const Compétences = () => {



    return (
        <section id="compétences">
            <div className={style.body}>

                <div className={style.competencesContainer}>
                    <h2>Mes compétences</h2>
                    <h3>Langages</h3>

                    <div className={style.competences}>
                        <img src={css} alt="CSS" />
                        <img src={html} alt="HTML" />
                        <img src={js} alt="JavaScript" />
                        <img src={react} alt="React" />
                        <img src={node} alt="Node.js" />
                        <img src={tailwind} alt="Tailwind CSS" />
                        <img src={git} alt="Git" />
                        <img src={github} alt="GitHub" />
                    </div>
                </div>

            </div></section>
    )
}