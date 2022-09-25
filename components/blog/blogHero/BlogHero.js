import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Content = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Businesses", "Startups", "HR's"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

    return (
      <div className="px-4 pb-16 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-30 lg:pb-24">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

          <div className="flex flex-col justify-center space-y-5 text-5xl lg:text-7xl font-bold text-center lg:text-left">
            <div>School</div>
            <div>For <span className="text-[#F49038] italic text-[2.5rem] lg:text-7xl" ref={el}></span> </div>
            <div>and <span className="text-[#F49038] italic text-[2.5rem] lg:text-7xl">Developers </span> </div>
          </div>

          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="images/home-c17fe990d (1).png?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Blog image"
            />
          </div>

        </div>
      </div>
    );
  };

export default Content;