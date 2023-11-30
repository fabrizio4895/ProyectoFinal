"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import styles from './page.module.css'
import Input from './input1'; 
import Admins from './administradores.json';
import Usuario from './usuario.json';

const Login = () => {

  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const router = useRouter();

  function manageChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const validarLogeo = async (e) => {

    e.preventDefault();
    const { usuario, contrasena } = state;

    const admin = Object.values(Admins).find(
      (admin) => admin.correo === usuario && admin.contrasena === contrasena
    );

    const alumno = Object.values(Usuario).find(
      (alumno) => alumno.correo === usuario && alumno.password === contrasena
    );

    if (admin) {
      router.push(`/blog/admin/${admin.correo}/perfiladmin`);
    } else if (alumno && alumno.correo === usuario && alumno.password === contrasena) {
      router.push(`/blog/alumno/${alumno.correo}/principalalm`);
    } else {
      alert('No coincide la contraseña o usuario');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <span className={styles.titulo1}>Sistema de reserva de Libros</span>
        <form className={styles.registro} onSubmit={validarLogeo}>
          <Input
            inputType="text"
            spanText="Usuario o Correo"
            name="usuario"
            value={state.usuario}
            onChange={manageChange}
          />
          <div className={styles.label2}>
            <Input
              inputType="password"
              spanText="Contraseña"
              name="contrasena"
              value={state.contrasena}
              onChange={manageChange}
            />
            <div className={styles.opcion}>
              <span>Olvidé mi contraseña</span>
            </div>
          </div>
          <div className={styles.botones}>
            <button className={styles.button1}>
              <Link href="./registro">Registro usuario</Link>
            </button>
            <button className={styles.button2} type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;