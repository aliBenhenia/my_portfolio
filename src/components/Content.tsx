"use client";

import styles from  "./styles/content.module.css";
import { TypeAnimation } from 'react-type-animation';
const Content = () => {
    
  
    return (
        <div className="flex  flex-col xl:flex-row  items-center justify-center h-screen container mx-auto gap-4 pb-10 pt-10" id={styles["contentHome"]}>
            <div className={` h-96 ${styles.cardHero} mt-3`}>
                <img src="https://up2client.com/envato/olivia/preview/one_page_design/assets/images/olivia-img.jpg" alt="" />
                <div className={styles.info}>
                    <h2>Olivia</h2>
                    <TypeAnimation
                        sequence={[
                            'Web developer', // Types 'One'
                            3000, // Waits 1s
                            'software engineer ', // Deletes 'One' and types 'Two'
                            3000, // Waits 2s
                            'Freelancer', // Types 'Three' without deleting 'Two'
                            () => {
                            console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1.3em', display: 'inline-block' , fontWeight: 'bold'}}
                    />
                    <button className="bg-green-400  text-gray-900 p-2 rounded-lg mt-3 w-full p-1 text-gray-800 font-bold">
                        @Hire me
                    </button>
                </div>
            </div>
            <div className={`bg-blue-400 h-96  ${styles.cardContent} mt-3 shadow-lg`}></div>
        </div>
    );
};

export default Content;