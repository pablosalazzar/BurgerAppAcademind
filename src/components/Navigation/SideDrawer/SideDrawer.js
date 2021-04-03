import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Aux from '../../../hoc/Auxx'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) =>{

    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} /* clicked={props.modalClose} show={props.show} *//>

            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>            
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );

}

export default sideDrawer;
