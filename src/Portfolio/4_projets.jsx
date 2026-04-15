import style from './Portfolio.module.css';

const projects =[
    {
        id:1,
        title: "Todo List", 
        description : "une simple todo list pour notre liste de souhaits de jeux vidéo.", 
        image : "../Projets/ToDoList.jpeg", 
        link : undefined, 
        github : undefined
    }, 
    {
        id:2,
        title : "Premier Workshop", 
        description : "premier workshop de ma formation , j'ai réalisé un site d'autogestion de traitements médicamenteux.", 
        image : "/Projets/PillCraft.jpeg",
        link : undefined,
        github : "https://github.com/LostRibby/PC-again"
    }
]
export const Projets = () =>{



    return(
        <section id="projets">
       <div className={style.body}>
      
        <h2 className={style.title}>Mes Projets</h2>
        <div className={style.projets}>
            {projects.map((project) => (
                <div key={project.id} className={style.projet}>
                    <img src={project.image} alt={project.title} className={style.projetImage} />
                    <h3 className={style.projetTitle}>{project.title}</h3>
                    <p className={style.projetDescription}>{project.description}</p>
                    <div className={style.projetLinks}>
                        {/* <a href={project.link} className={style.projetLink}>Voir le projet</a>
                        <a href={project.github} className={style.projetLink}>Voir le code</a> */}
                    </div>
                </div>
            ))}
        </div>
      
                  
              </div>
                </section>
    )
}