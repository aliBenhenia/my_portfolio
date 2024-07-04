"use client";

import styles from  "./styles/content.module.css";

const Content = () => {
    return (
        <div className="flex  flex-col xl:flex-row  items-center justify-center h-screen container mx-auto gap-4 pb-10 pt-10" id={styles["contentHome"]}>
            <div className={` h-96 ${styles.cardHero} mt-3`}>
                <img src="https://up2client.com/envato/olivia/preview/one_page_design/assets/images/olivia-img.jpg" alt="" />
                <div className={styles.info}>
                    <h2>Olivia</h2>
                    <h3>Web Designer</h3>
                    <button className="bg-green-400 text-white p-2 rounded-lg mt-3 w-full p-1 text-gray-800 font-bold">Read More</button>
                </div>
            </div>
            <div className={`bg-blue-400 h-96  ${styles.cardContent} mt-3 shadow-lg`}></div>
        </div>
    );
};

export default Content;