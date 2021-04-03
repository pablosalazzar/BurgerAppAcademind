import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle'
import { checkPropTypes } from 'prop-types'

const toolbar = (props) => {
    return(
        <header className={styles.Toolbar}>
            <DrawerToogle
                clicked  = {props.drawerToogleClicked}
            />
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar;