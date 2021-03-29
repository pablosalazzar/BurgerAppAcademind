import { checkPropTypes } from "prop-types";
import styles from './Modal.module.css';

const modal = (props) => {
    return(
        <div className={styles.Modal}>
            {props.children}
        </div>
    )
}

export default modal;