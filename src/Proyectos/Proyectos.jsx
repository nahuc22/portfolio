import styles from '../Proyectos/Proyectos.module.css';
import fundaciones from '../assets/nosotros.jpg';
import github from '../assets/github.svg';
import html from '../assets/htmlnuevo.svg';
import css from '../assets/cssnuevo.svg';
import js from '../assets/jsnuevo.svg';
import ts from '../assets/ts.svg';
import react from '../assets/reactjs-icon.svg';
import psql from '../assets/postgresql-icon.svg';
import expressjs from '../assets/expressjs.svg';
import nodejs from '../assets/nodejs-icon.svg';
import pokemon from '../assets/landing.png';
import ambientalistas from '../assets/bg-3.jpg';

const Proyectos = () => {
  const tarjetas = [
    {
      image: [ambientalistas],
      name: 'OAA',
      descrip: 'Organización Ambientalistas Autoconvocados que promueve la lucha socio-ambientalista.',
      tecno: [html, css, ts, react, psql, expressjs, nodejs],
      url: 'https://github.com/Lizhana/oaa-web',
      deploy: 'https://ambientalistas.org.ar/',
    },
    {
      image: [fundaciones],
      name: 'Pet Connect Rescue',
      descrip: 'Proyecto para que las fundaciones puedan dar a conocer sus mascotas en adopción.',
      tecno: [html, css, js, react, psql, expressjs, nodejs],
      url: 'https://github.com/nahuc22/Proyecto-final',
      deploy: 'https://pet-connect-rescue.vercel.app/',
    },
    {
      image: [pokemon],
      name: 'Pokemon',
      descrip: 'Proyecto para visualizar todos los pokemons, consumo de API , PERN stack',
      tecno: [html, css, js, react, psql, expressjs, nodejs],
      url: 'https://github.com/nahuc22/pokemon',
      deploy: 'https://pokemon-nahuc22.vercel.app/',
    },
  ];

  return (
    <section className={styles.Proyectos}>
      <h2>Proyectos</h2>
      <div className={styles.cards}>
        {tarjetas.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <a href={card.deploy} target="_blank" rel="noopener noreferrer">
                <img src={card.image} alt={`Imagen de ${card.name}`} />
              </a>
            </div>

            {/* <div className={styles.cut}></div> */}

            <div className={styles.cardContent}>
              <h3>{card.name}</h3>
              <p>{card.descrip}</p>

              <div className={styles.tecno}>
                {card.tecno.map((icono, i) => (
                  <img key={i} src={icono} alt="Tecnología" />
                ))}
              </div>

              <div className={styles.github}>
                <a href={card.url} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
