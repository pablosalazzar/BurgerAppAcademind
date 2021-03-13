import Aux from '../../hoc/Auxx'
import styles from './Layout.module.css'

const Layout = (props) => {
    return(
        <Aux>
            <div> Toolbar, Sidebar, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;

