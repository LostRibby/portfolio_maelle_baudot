import { useEffect, useState } from 'react';
import style from './NavBar.module.css';


const NavItems = [
    { name: 'Accueil', link: '#accueil' },
    { name: 'Parcours', link: '#parcours' },
    { name: 'Compétences', link: '#compétences' },
    { name: 'Projets', link: '#projets' },
    { name: 'Contact', link: '#contact' }
];

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <header className={style.header}>
        <nav className={`${style.body} ${isScrolled ? style.scrolled : ''}`}>

            <div className={style.container}>
                <div className={style.logo}>
                    <h1 className={style.titre}>Portfolio <span className={style.nom}>Maelle Baudot</span></h1>
                </div>

                <ul className={style.navlinks}>
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            
        </nav>
        </header>
    )
}

export default NavBar