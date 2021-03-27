import styles from './BuildControl.module.css'

const BuildControl = (props) => {

    return(
        <div className={styles.BuildControl}>
            <div className={styles.Lavel}>{props.label}</div>
            <button className={styles.Less} onClick = {props.removed}>-</button>
            <button className={styles.More} onClick = {props.added}>+</button>
        </div>
    )
} 

export default BuildControl;