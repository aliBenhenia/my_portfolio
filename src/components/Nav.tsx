import { MenuFoldOutlined,MenuUnfoldOutlined, PieChartOutlined,DesktopOutlined,MailOutlined,HomeOutlined ,UserOutlined, FileOutlined, SolutionOutlined, MoonOutlined,SunOutlined} from '@ant-design/icons';
import "./styles/Nav.css";
import { useState} from 'react'
import Hamburger from 'hamburger-react'
import {Drawer, Button  ,Menu} from 'antd';

const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Option 1',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Option 2',
    },
    {
      key: '3',
      icon: <MailOutlined />,
      label: 'Option 3',
    }
  ];
const Nav = ()=>{
    const [toggle,setToggle] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const handleMode = ()=>{
        document.body.classList.toggle("dark-mode");
        setIsDark(!isDark);
    }
    return (
        <>
            <div id="navIcon" className='iconStyle' onClick={()=>setToggle(!toggle)}>
                <Hamburger/>
            </div>

            <div id="modeIcon" onClick={handleMode}>
               {
                    isDark ? <MoonOutlined className='iconStyle' /> : <SunOutlined className='iconStyle'/>
               }
            </div>
            <nav className='navItem'>
                <ul>
                    <li className='text-lg activeNav'>
                        <HomeOutlined className='iconStyle'/>
                    </li>
                    <li className='text-lg'>
                        <UserOutlined  className='iconStyle'/>
                    </li>
                    <li className='text-lg'>
                        <SolutionOutlined className='iconStyle'/>
                    </li>
                    <li className='text-lg'>
                        <FileOutlined className='iconStyle'/>
                    </li>
                    <li className='text-lg'>
                        <FileOutlined className='iconStyle'/>
                    </li>
                    <li className='text-lg'>
                        <FileOutlined className='iconStyle'/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
