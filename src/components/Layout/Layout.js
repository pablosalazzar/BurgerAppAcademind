import Aux from '../../hoc/Auxx'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


const Layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <SideDrawer/>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;

