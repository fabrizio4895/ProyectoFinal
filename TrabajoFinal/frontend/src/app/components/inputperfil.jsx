import styles from './perfiladmin.module.css'

const InputPerfil = (props) =>{
    return (
        <div className={styles.label} htmlFor="">
            <label className={styles.placeholder} htmlFor="">{props.placeholder}</label>
            <input className={styles.input} type="text" />
        </div>
    )
}

export default InputPerfil;