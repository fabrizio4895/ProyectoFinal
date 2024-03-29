import styles from './admin.module.css'
import Sidebar from './sidebar';
import Cuadros from './cuadros';
import Barra from './barra';
import Link from 'next/link';

const Perfilalumno = () => {
    return (
        <div className={styles.container}>
            <Barra />
            <main className={styles.xd}>
                <Sidebar
                    li1="Principal"
                    li2={<Link href="/perfilAlumnoReal">Perfil</Link>}
                    li3="Prestamos"
                />
                <section className={styles.parte2}>
                    <div className={styles.titulo2}>
                        <span>Bienvenido!!</span>
                    </div>
                    <Cuadros texto='Últimas Reservas' mostrarOpcion={false} />
                    <Cuadros texto='Los más pedidos' mostrarOpcion={false} />
                </section>
            </main>
        </div>
    );
}

export default Perfilalumno;