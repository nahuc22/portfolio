import styles from '../Inicio/Inicio.module.css'
import react from '../assets/reactjs-icon.svg';
import reactnative from '../assets/reactnative.svg';
import redux from '../assets/redux.svg';
import vite from '../assets/vite.svg';
import ts from '../assets/ts.svg';
import expo from '../assets/expo.svg';
import html from '../assets/htmlnuevo.svg';
import css from '../assets/css.svg';
import nextjs from '../assets/nextjs.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import insomnia from '../assets/insomnia.svg';
import figma from '../assets/figma.svg'
import node from '../assets/node2.svg'
import express from '../assets/express.svg'
import middleware from '../assets/middleware.svg'
import api from '../assets/api.png'
import mysql from '../assets/mysql.svg'
import psql from '../assets/psql.svg'
import mongo from '../assets/mongo.svg'
import db from '../assets/db.svg'
import docker from '../assets/docker.svg'

const Presentacion = () => {
  return (
      <section className={styles.Inicio}>
          <article className={styles.full}>
              {/* <br></br> */}
              <h1 className={styles.h1Title} style={{marginBottom: '-25px', marginTop: '10px'}}>NAHUEL CASTILLA</h1>
              <h1 className={styles.h1Title}>FULLSTACK DEVELOPER</h1>
              <p style={{marginTop: '10px'}}> Desarrollador mobile(2024)
                  <br></br>
                  <img src={reactnative} style={{ height: '40px', marginLeft: '5px' , marginTop: '10px' }}></img>
                  <img src={redux} style={{ height: '35px', marginLeft: '15px' }}></img>
                  <img src={expo} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <img src={ts} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <br></br>
                  <br></br>
                  Desarrollador web(2022-2024)
                  <br></br>
                  <br></br>
                  <img src={react} style={{ height: '35px' }}></img>
                  <img src={redux} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <img src={vite} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <img src={ts} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <br></br>
                  <br></br>
                  Especializado en Front-end
                  <br></br><br></br>
                  <img src={css} style={{ height: '36px' }}></img>
                  <img src={html} style={{ height: '33px', marginLeft: '25px' }}></img>
                  <img src={nextjs} style={{ height: '36px', marginLeft: '25px' }}></img>
                  <img src={git} style={{ height: '36px', marginLeft: '20px' }}></img>
                  <img src={figma} style={{ height: '35px', marginLeft: '12px' }}></img>
                  <br></br>
                  <br></br>
                  Bases sólidas en Back-end
                  <br></br>
                  <br></br>
                  <img src={node} style={{ height: '36px' }}></img>
                  <img src={express} style={{ height: '36px', marginLeft: '20px' }}></img>
                  <img src={api} style={{ height: '33px', width: '40px', marginLeft: '23px' }}></img>
                  <img src={insomnia} style={{ height: '33px', marginLeft: '20px' }}></img>
                  <img src={middleware} style={{ height: '36px', marginLeft: '20px' }}></img>
                  <br></br>
                  <br></br>
                  Mantenimiento de Database
                  <br></br>
                  <br></br>
                  <img src={psql} style={{ height: '35px' }}></img>
                  <img src={mongo} style={{ height: '35px', marginLeft: '25px' }}></img>
                  <img src={mysql} style={{ height: '40px', marginLeft: '20px' }}></img>
                  <img src={db} style={{ height: '35px', marginLeft: '20px' }}></img>
                  <img src={docker} style={{ height: '35px', marginLeft: '20px' }}></img>
                  <br></br>
              </p>
          </article>


      </section>
  )
}

export default Presentacion