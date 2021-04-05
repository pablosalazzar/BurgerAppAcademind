import React from 'react'
import { checkPropTypes } from "prop-types";
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxx'

class Modal extends React.Component{

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show;
    }

    componentDidMount(){
        console.log('[Modal] componentDidMount');
    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate')
    }

    render(){

        return(
            <Aux>
                <Backdrop clicked={this.props.modalClose} show={this.props.show}/>
                <div 
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'traslateY(0)': 'traslateY(-100vh)',
                        opacity: this.props.show? '1':'0',
                        display: this.props.show? 'inline': 'none'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}


export default Modal;