import styles from './DrawerToogle.module.css'

const drawerToogle = (props) => {
    return(
        <div
            className = {styles.DrawerToggle}
            onClick = {props.clicked}
        >
            <div></div>
            <div></div>
            <div></div>

        </div>
    )
}

export default drawerToogle;