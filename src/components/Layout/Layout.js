import React from 'react'
import Aux from '../../hoc/Auxx'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout  extends React.Component{

    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => { return {showSideDrawer: ! prevState.showSideDrawer}})
        /* this.setState({showSideDrawer:true}) */
    }

    render(){
        return(
            <Aux>
                <Toolbar
                    drawerToogleClicked = {this.sideDrawerOpenHandler}
                />
                <SideDrawer
                    open = {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;

