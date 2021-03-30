import styles from './Backdrop.module.css'

const backdrop = (props) => {
    return(
        props.show ? <div onClick={props.clicked} className={styles.Backdrop}/> : null
    )
}

export default backdrop;