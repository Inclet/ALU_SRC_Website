import Footer from "../Footer"
import NavBar from "../NavBar"
import TopHeader from "../TopHeader"

const Layout = (props) => {
    return (
    <>
        <TopHeader />
        <NavBar />
        {props.children}
        <Footer></Footer>
    </>
    )
};

export default Layout;