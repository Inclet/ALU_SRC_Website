import { useState } from 'react';
import './styles/navbar.module.scss';
import Image from '../Image';

const NavBar = () => {
    const [isShowingMenu, setIsShowingMenu] = useState(false)
    const [isDropdownActive, setDropdownToActive] = useState(false);
    const [highlightedMenu, setHighlightedMenu] = useState(null);

    const toggleMenu = (e) => {
        if(isShowingMenu){
            document.getElementById("drop_overlay").style.display = 'none';
            document.getElementById("menu_item").style.display = 'none';
            return setIsShowingMenu(false);
        }
        
        document.getElementById("menu_item").style.display = 'block';
        setIsShowingMenu(true);
    }

    const showDropDown = (menu_id) => {
        if(isDropdownActive && highlightedMenu === menu_id) {
            document.getElementById("drop_overlay").style.display = 'none';
            setHighlightedMenu(null)
            return setDropdownToActive(false);

        }

        document.getElementById("drop_overlay").style.display = 'block';
        setDropdownToActive(true);
        setHighlightedMenu(menu_id);
    }

    const isHighlighted = (menu_id) => highlightedMenu === menu_id ? 'highlighted' : '';

    return (
        <div className="navbarContainer">
            <div className="navbarArea">
                <div>
                    <Image imgsrc="/assets/ALU_logo.png" alt="logo" className="logoStyle"/>
                </div>
                <div onClick={toggleMenu} className="menu_container">
                    <Image imgsrc="/assets/menu.svg" alt="menu" className="menu_icon"/>
                </div>
                <div className="navbarContent" id="menu_item">
                    <a href="#" className={`menuItem ${isHighlighted("menu_1")}`} onClick={() => showDropDown("menu_1")}>Make Change <span className="drop_icon">&#9660;</span></a>
                    <a href="#" className={`menuItem ${isHighlighted("menu_2")}`} onClick={() => showDropDown("menu_2")}>Initiate <span className="drop_icon">&#9660;</span></a>
                    <a href="#" className={`menuItem ${isHighlighted("menu_3")}`} onClick={() => showDropDown("menu_3")}>Join <span className="drop_icon">&#9660;</span></a>
                    <a href="#" className={`menuItem ${isHighlighted("menu_4")}`} onClick={() => showDropDown("menu_4")}>Events <span className="drop_icon">&#9660;</span></a>
                    <a href="#" className={`menuItem ${isHighlighted("menu_5")}`} onClick={() => showDropDown("menu_5")}>Support <span className="drop_icon">&#9660;</span></a>
                </div>
                <div className="drop_overlay" id="drop_overlay">
                    <div className="inner">
                        <div className="drop_title">Lorem Ipsum</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;