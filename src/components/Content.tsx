"use client";
import "./styles/content.css";

const Content = () => {
    return (
        <div className="flex  flex-col lg:flex-row items-center justify-center h-screen conatiner mx-auto" id="contentHome">
            <div className=" h-96 cardHero mt-3">
                <img src="https://up2client.com/envato/olivia/preview/one_page_design/assets/images/olivia-img.jpg" alt="" />
            </div>
            <div className="bg-blue-400 h-96  cardContent mt-3 shadow-lg">dd</div>
        </div>
    );
};

export default Content;