import React, { useEffect } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

/* 
Name: Henry Azer
ID: 220190314
*/
const BackToTop = () => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.getElementById("back-to-top").style.opacity = "1";
            } else {
                document.getElementById("back-to-top").style.opacity = "0";
            }
        });
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            id="back-to-top"
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon className="arrow-upward" />
        </div>
    );
};

export default BackToTop;
