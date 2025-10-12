import React from 'react'
import Linkedin from "../img/linkedin.png";
import Nitindev from "../img/nitindev.png";
import Twitter from "../img/twitter.png";
import Youtube from "../img/youtube.png";

const ShareButton = () => {
    const message = "Hii Nitn";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
const iconClass =
    "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] hover:scale-110 transition-transform duration-200";

    return (
        <div data-aos="fade-down" className="  flex gap-5 text-black ">
            <a target='_blank' href='https://www.linkedin.com/in/nitin0202/'>
                <img src={Linkedin} className="  hover:scale-110 transition-transform duration-200 w-[56px] h-[56px] bg-black text-white" />
            </a>
            <a target='_blank' href='https://x.com/nitin_0202'>
                <img src={Nitindev} className="  hover:scale-110 transition-transform duration-200 w-[56px] h-[56px]" />
            </a>
            <a target='_blank' href='https://drive.google.com/file/d/1bGp8Wxa3hPyB7Xprc2jixcU-TanoadPC/view?usp=sharing'>
                <img src={Twitter} className="  hover:scale-110 transition-transform duration-200 w-[56px] h-[56px]" />
            </a>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
            >
                <img src={Youtube} alt="WhatsApp" className={iconClass} />
            </a>
        </div>
    )
}

export default ShareButton