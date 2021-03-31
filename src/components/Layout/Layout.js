import Aux from '../../hoc/Auxx'
import styles from './Layout.module.css'
import Toolbar from '../Navegation/Toolbar/Toolbar'

const Layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;

