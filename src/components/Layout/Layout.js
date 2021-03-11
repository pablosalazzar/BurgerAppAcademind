import Aux from '../../hoc/Auxx'

const Layout = (props) => {
    return(
        <Aux>
            <div> Toolbar, Sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;

