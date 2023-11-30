import styles from './perfiladmin.module.css'
import BarraPerfiles from './barraperfiles';
import InputPerfil from './inputperfil';
import BotonPerfil from './botonperfil';
import FotoPerfil from './fotoperfil';

const Contenido = () =>{
    return (
    <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <div className={styles.cuadro1}>
                            <FotoPerfil/>
                        </div>
                        <div className={styles.cuadro2}>
                            <BarraPerfiles/>
                            <form className={styles.formulario}action="">
                                <InputPerfil placeholder='Nombres'/>
                                <InputPerfil placeholder='Tipo de Documento'/>
                                <InputPerfil placeholder='Apellidos'/>
                                <InputPerfil placeholder='Nro de Documento'/>
                                <BotonPerfil/>
                            </form>
                        </div>  
                    </div>
                </article>
    )
}

export default Contenido;