import { HomeOutlined } from '@ant-design/icons';
import "./styles/Nav.css";
const Nav = ()=>{
    return (
        <>
            <nav className='navItem'>
                <h1>hello</h1>
                <ul>
                    <li onClick={()=> document.body.classList.toggle("dark-mode")}>
                        <HomeOutlined />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;