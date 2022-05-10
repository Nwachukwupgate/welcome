import React, { useEffect, useState } from "react";


const ScrollIndicator = () => {

    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };
  
   useEffect(() => {
        window.addEventListener("scroll", onScroll);
   },[])

    

    return (      
        
        <div className="sticky top-16 bg-black h-5 left-0 z-index-10 w-full" style={{position: "sticky", top:"76px"}}>
            <div className="h-5 bg-green-500" style={{ width: `${scroll}%`, backgroundColor: "green" }}>
            </div>
        </div>
    );
};

export default ScrollIndicator;