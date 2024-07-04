import { useEffect } from "react";

import styles from './styles/Circles.module.css';

const Circles = () => {
    return (
        <div>
           <ul className={styles.background}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );  
}

export default Circles;