import styles from '../Proyectos/Proyectos.module.css';
import fundaciones from '../assets/nosotros.png'
import github from '../assets/github.svg'
import html from '../assets/htmlnuevo.svg'
import css from '../assets/cssnuevo.svg'
import js from '../assets/jsnuevo.svg'
import ts from '../assets/ts.svg'
import react from '../assets/reactjs-icon.svg'
import psql from '../assets/postgresql-icon.svg'
import expressjs from '../assets/expressjs.svg'
import nodejs from '../assets/nodejs-icon.svg'
import pokemon from '../assets/landing.png'
import ambientalistas from '../assets/ambientalistas.png'

const Proyectos = () => {

    const tarjetas = [
      {
        image:[pokemon],
        name:'Pokemon',
        descrip:'Proyecto para visualizar todos los pokemons, consumo de API , PERN stack',
        tecno:[html,css,js, react, psql, expressjs, nodejs],
        url:'https://github.com/nahuc22/pokemon',
        deploy: 'https://pokemon-nahuc22.vercel.app/'
      },
      {
        image:[fundaciones],
        name:'Pet Connect Rescue',
        descrip:'Proyecto para que las fundaciones puedan dar a conocer sus mascotas en adopción.',
        tecno:[html,css,js, react, psql, expressjs, nodejs],
        url:'https://github.com/nahuc22/Proyecto-final',
        deploy: 'https://pet-connect-rescue.vercel.app/'
      },
      {
        image:[ambientalistas],
        name:'OAA',
        descrip:' Organización Ambientalistas Autoconvocados que promueve la lucha socio-ambientalista ',
        tecno:[html,css,ts, react, psql, expressjs, nodejs],
        url:'https://github.com/Lizhana/oaa-web',
        deploy: 'https://ambientalistas.org.ar/'
      }
    ]

    return (
        <section className={styles.Proyectos}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>

                {
                  tarjetas.map((card,index) => {
                    return(
                      <div key={index} className={styles.card}>           
                        <div className={styles.img}>
                        <a href={card.deploy} target="_blank" rel="noopener noreferrer">
                          <img width='100%' height='250px' src={card.image} alt="" />
                        </a>
                        </div>

                        <h3>{card.name}</h3>

                        <p>{card.descrip}</p>

                        <div className={styles.tecno}>
                          <img width='30px' src={card.tecno[3]} alt="" />
                          <img width='30px' src={card.tecno[0]} alt="" />
                          <img width='30px' src={card.tecno[1]} alt="" />   
                          <img width='30px' src={card.tecno[2]} alt="" />
                          <img width='30px' src={card.tecno[6]} alt="" />
                          <img width='30px' src={card.tecno[4]} alt="" />
                          <img width='30px' src={card.tecno[5]} alt="" />
                        </div>

                        <div className={styles.github}>
                          <a href={card.url}>
                            <img width='30px' src={github} alt="" />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }

            </div>
        </section>
    )
}

export default Proyectos;