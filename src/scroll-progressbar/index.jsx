import "./style.css";
import { useEffect, useState } from "react";

function ScrollBar (){
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            let {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);

        }

        window.addEventListener('scroll', handleScroll)

         return () => {
        window.removeEventListener('scroll', handleScroll);
  };
    },[])

    return (
        <div className='scroll-bar'>
            <span className='scroll-progress' style={{width: progress + "%"}}></span>
        </div>
       
    )
}

export default ScrollBar;