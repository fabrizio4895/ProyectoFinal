import styles from './perfilalumno.module.css'
import Link from 'next/link';


const PerfilAlumno = () =>{
    return (
        <div className={styles.container}>
        <header className={styles.barra}>
            <div className={styles.icono1}>
                <img src="/media/menu-barras.png" alt="barras"/>
            </div>
            <span className={styles.titulobarra}>Biblioteca</span>
            <div className={styles.icono2}>
                <img src="/media/usuario.png" alt="usuario"/>
            </div>
        </header>
        <main className={styles.main}>
            <aside className={styles.barralateral}>
                <ul className={styles.opciones}>
                    <li className={styles.li}>
                    <Link href="./perfilAlumno">Principal</Link>
                    </li>
                    <li className={styles.li}>Perfil</li>
                    <li className={styles.li}>Préstamos</li>
                </ul>
            </aside>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Mi Perfil</span>
                </div>
                <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <div className={styles.cuadro1}>
                            <div className={styles.contenedorphoto}>
                                <span></span>
                            </div>
                        </div>
                        <div className={styles.cuadro2}>
                            <nav className={styles.barracuadro}>
                                <ul className={styles.opcionescuadro}>
                                    <li className={styles.licuadro}>DATOS PERSONALES</li>
                                    <li className={styles.licuadro}>CUENTA</li>
                                </ul>
                            </nav>
                            <form className={styles.formulario}action="">
                                <div className={styles.label1} htmlFor="">
                                    <label className={styles.placeholder} htmlFor="">Nombres</label>
                                    <input className={styles.input} type="text" />
                                    <label className={styles.placeholder} htmlFor="">Tipo de Documento</label>
                                    <input className={styles.input} type="text" />
                                </div>
                                <div className={styles.label2} htmlFor="">
                                    <label className={styles.placeholder} htmlFor="">Apellidos</label>
                                    <input className={styles.input} type="text" />
                                    <label className={styles.placeholder} htmlFor="">Nro de Documento</label>
                                    <input className={styles.input} type="text" />
                                </div>
                                <button type='submit' className={styles.Button}>Guardar</button>
                            </form>
                        </div>  
                    </div>
                </article>
            </section>
        </main>
    </div>
    )
}

export default PerfilAlumno;