import { MenuFoldOutlined,MenuUnfoldOutlined, PieChartOutlined,DesktopOutlined,MailOutlined,HomeOutlined ,UserOutlined, FileOutlined, SolutionOutlined, MoonOutlined,SunOutlined} from '@ant-design/icons';
import styles from  "./styles/Nav.module.css";
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
    const handleNavBar = ()=>
    {
        setToggle(!toggle);
    }
    return (
        <>
            <div id={styles["navIcon"]} className={`${styles.iconStyle}`} onClick={handleNavBar}>
                <Hamburger/>
            </div>

            <div id={styles["modeIcon"]} onClick={handleMode}>
               {
                    isDark ? <MoonOutlined className='iconStyle' /> : <SunOutlined className='iconStyle'/>
               }
            </div>
            <nav className={`${styles.navItem} + ${toggle && styles.activeNav}`}>
                <ul>
                    <li className={`'text-lg ${styles.activeNav}'`}>
                        <HomeOutlined className={styles.iconStyle}/>
                    </li>
                    <li className='text-lg'>
                        <UserOutlined  className={styles.iconStyle}/>
                    </li>
                    <li className='text-lg'>
                        <SolutionOutlined className={styles.iconStyle}/>
                    </li>
                    <li className='text-lg'>
                        <FileOutlined className={styles.iconStyle}/>
                    </li>
                    <li className='text-lg'>
                        <MenuFoldOutlined className={styles.iconStyle}/>
                    </li>
                    <li className='text-lg'>
                        <PieChartOutlined className={styles.iconStyle}/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
