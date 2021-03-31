import { checkPropTypes } from "prop-types";
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxx'

const modal = (props) => {
    return(
        <Aux>
            <Backdrop clicked={props.modalClose} show={props.show}/>
            <div 
                className={styles.Modal}
                style={{
                    transform: props.show ? 'traslateY(0)': 'traslateY(-100vh)',
                    opacity:props.show? '1':'0',
                    display: props.show? 'inline': 'none'
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;