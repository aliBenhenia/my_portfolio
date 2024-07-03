"use client";

import "./styles/content.css";

const Content = () => {
    return (
        <div className="flex  flex-col  items-center justify-center h-screen container mx-auto gap-10 pb-10 pt-10" id="contentHome">
            <div className=" h-96 cardHero mt-3">
                <img src="https://up2client.com/envato/olivia/preview/one_page_design/assets/images/olivia-img.jpg" alt="" />
                <div className="info">
                    <h2>Olivia</h2>
                    <h3>Web Designer</h3>
                    <button className="bg-green-400 text-white p-2 rounded-lg mt-3 w-full p-1 text-gray-800 font-bold">Read More</button>
                </div>
            </div>
            <div className="bg-blue-400 h-96  cardContent mt-3 shadow-lg"></div>
        </div>
    );
};

export default Content;