import styles from './perfiladmin.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Contenido from './contenidoadmin';

const PerfilAdmin = () =>{
    return (
        <div className={styles.container}>
        <Barra titulobarra='Administración de Bibliotecas'/>
        <main className={styles.main}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Biblioteca"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido!</span>
                </div>
                <Contenido/>
                
            </section>
        </main>
    </div>
    )
}

export default PerfilAdmin;